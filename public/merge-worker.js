// Service Worker for background video merging
importScripts('https://unpkg.com/@ffmpeg/ffmpeg@0.12.15/dist/umd/ffmpeg.js');
importScripts('https://unpkg.com/@ffmpeg/util@0.12.2/dist/umd/index.js');

const { FFmpeg } = FFmpegWASM;
const { fetchFile, toBlobURL } = FFmpegUtil;

let ffmpeg = null;

async function loadFFmpeg() {
  if (ffmpeg?.loaded) return ffmpeg;
  
  ffmpeg = new FFmpeg();
  const base = 'https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd';
  
  ffmpeg.on('progress', ({ progress }) => {
    self.postMessage({ type: 'progress', step: 3, progress: Math.round(progress * 100) });
  });
  
  await ffmpeg.load({
    coreURL: await toBlobURL(`${base}/ffmpeg-core.js`, 'text/javascript'),
    wasmURL: await toBlobURL(`${base}/ffmpeg-core.wasm`, 'application/wasm'),
  });
  
  return ffmpeg;
}

async function fetchWithProgress(url, step) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
  
  const contentLength = res.headers.get('Content-Length');
  const total = contentLength ? parseInt(contentLength, 10) : 0;
  const reader = res.body.getReader();
  const chunks = [];
  let received = 0;
  
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    chunks.push(value);
    received += value.length;
    if (total > 0) {
      self.postMessage({ type: 'progress', step, progress: Math.round((received / total) * 100) });
    }
  }
  
  const result = new Uint8Array(received);
  let offset = 0;
  for (const chunk of chunks) {
    result.set(chunk, offset);
    offset += chunk.length;
  }
  return result;
}

self.addEventListener('message', async (e) => {
  const { videoUrl, audioUrl, filename } = e.data;
  
  try {
    // Step 1: Download video
    self.postMessage({ type: 'progress', step: 1, progress: 0 });
    const videoData = await fetchWithProgress(videoUrl, 1);
    
    // Step 2: Download audio
    self.postMessage({ type: 'progress', step: 2, progress: 0 });
    const audioData = await fetchWithProgress(audioUrl, 2);
    
    // Step 3: Merge
    self.postMessage({ type: 'progress', step: 3, progress: 0 });
    const ff = await loadFFmpeg();
    
    await ff.writeFile('video.mp4', videoData);
    await ff.writeFile('audio.mp4', audioData);
    
    await ff.exec(['-i', 'video.mp4', '-i', 'audio.mp4', '-c:v', 'copy', '-c:a', 'aac', '-shortest', 'output.mp4']);
    
    const data = await ff.readFile('output.mp4');
    
    ff.deleteFile('video.mp4');
    ff.deleteFile('audio.mp4');
    ff.deleteFile('output.mp4');
    
    self.postMessage({ type: 'complete', data, filename });
  } catch (error) {
    self.postMessage({ type: 'error', error: error.message });
  }
});

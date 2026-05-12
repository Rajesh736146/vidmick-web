type RelatedLink = {
  href: string;
  label: string;
  description: string;
};

export default function RelatedDownloaders({
  title = "Related Downloaders",
  links,
}: {
  title?: string;
  links: RelatedLink[];
}) {
  return (
    <section className="related-links">
      <h3>{title}</h3>
      <div className="related-grid">
        {links.map((link) => (
          <a key={link.href} href={link.href} className="related-card">
            <div>
              <strong>{link.label}</strong>
              <p>{link.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

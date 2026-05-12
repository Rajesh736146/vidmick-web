type Crumb = {
  label: string;
  href?: string;
};

export default function BreadcrumbNav({ items }: { items: Crumb[] }) {
  return (
    <nav className="breadcrumb-nav" aria-label="Breadcrumb">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <span key={`${item.label}-${index}`} className="breadcrumb-item">
            {item.href && !isLast ? (
              <a href={item.href}>{item.label}</a>
            ) : (
              <span aria-current={isLast ? "page" : undefined}>{item.label}</span>
            )}
            {!isLast && <span className="breadcrumb-sep">&gt;</span>}
          </span>
        );
      })}
    </nav>
  );
}

const SHARE_LINKS = [
  { label: "Facebook", short: "f", href: "#" },
  { label: "LinkedIn", short: "in", href: "#" },
  { label: "Instagram", short: "ig", href: "#" },
  { label: "Twitter", short: "x", href: "#" },
] as const;

export function BlogShareWidget() {
  return (
    <div className="blog-share-widget flex items-center lg:block">
      <p>Share Now</p>
      <div className="social-link">
        {SHARE_LINKS.map(({ label, short, href }) => (
          <a key={label} href={href} aria-label={`Share on ${label}`}>
            {short}
          </a>
        ))}
      </div>
    </div>
  );
}

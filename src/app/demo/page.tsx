export default function DemoPage() {
  return (
    <html lang="en">
      <body>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: 40 }}>
          <h1>Architecture Demo</h1>
          <p>
            This section demonstrates architectural patterns used in the
            GidroTeplo reference project. It is excluded from SEO indexing.
          </p>
          <h2>Patterns Demonstrated</h2>
          <ul>
            <li>SEO-first metadata factory</li>
            <li>i18n with next-intl (ru/en)</li>
            <li>Server Components by default</li>
            <li>Zod-validated local data layer</li>
            <li>Server Actions for forms</li>
            <li>JSON-LD structured data</li>
            <li>Automated sitemap and robots</li>
            <li>Enterprise folder structure</li>
          </ul>
        </div>
      </body>
    </html>
  );
}

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", background: "var(--bg-card)" }}>
      <div className="footer-inner section-pad" style={{ paddingTop: 32, paddingBottom: 32 }}>
        
        {/* Left initials logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div 
            style={{ 
              width: 28, 
              height: 28, 
              background: "#000000", 
              borderRadius: 4, 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center" 
            }}
          >
            <span style={{ fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: 13, color: "#ffffff" }}>MF</span>
          </div>
          <span 
            style={{ 
              fontFamily: "var(--font-sans)", 
              fontWeight: 800, 
              fontSize: 14, 
              letterSpacing: "0.02em", 
              textTransform: "uppercase", 
              color: "var(--fg)" 
            }}
          >
            Mahakal Fitness
          </span>
        </div>

        {/* Center Copyright text */}
        <p style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--fg-dim)", margin: 0, fontWeight: 500 }}>
          © {new Date().getFullYear()} Mahakal Fitness · Meerut · Science-Based Training.
        </p>

        {/* Right Nav links */}
        <div style={{ display: "flex", gap: 20, flexWrap: "wrap", justifyContent: "center" }}>
          {[
            { name: "Programs", href: "#plans" },
            { name: "Transformations", href: "#transformations" },
            { name: "Location", href: "#location" },
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--fg-dim)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--fg)")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--fg-dim)")}
            >
              {item.name}
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}

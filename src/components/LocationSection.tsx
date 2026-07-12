import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const info = [
  { label: "City", value: "Meerut, Uttar Pradesh" },
  { label: "Hours", value: "4:00 AM – 9:15 PM" },
  { label: "Days", value: "Monday – Saturday" },
  { label: "Contact", value: "+91 96756 86868" },
  { label: "Instagram", value: "_mahakal_fitness_gym" },
];

export default function LocationSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="location" className="section-pad" style={{ borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="location-grid">
          
          {/* Left Column: Info list */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div>
              <span 
                className="mono-badge" 
                style={{ 
                  background: "#000000", 
                  color: "#ffffff", 
                  marginBottom: 16,
                  border: "none"
                }}
              >
                FIND US
              </span>
              <h2 
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 800,
                  fontSize: "clamp(34px, 5vw, 56px)",
                  lineHeight: 1.05,
                  color: "var(--fg)",
                  margin: "8px 0 12px",
                  letterSpacing: "-0.02em",
                }}
              >
                Train at
                <br />
                Mahakal Fitness
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 14,
                  color: "var(--fg-dim)",
                  lineHeight: 1.5,
                  margin: "0 0 32px 0",
                  maxWidth: 420,
                }}
              >
                Located in the heart of Meerut. Drop by for a free tour, grab a high-energy workout, and meet our coaches. No high-pressure sales pitches—just raw iron and evidence-based training.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              {info.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.15 + i * 0.08, duration: 0.5 }}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "16px 0",
                    borderBottom: "1px solid var(--border)",
                    flexWrap: "wrap",
                    gap: 8,
                  }}
                >
                  <span 
                    style={{ 
                      fontFamily: "var(--font-mono)", 
                      fontSize: 10, 
                      letterSpacing: "0.08em", 
                      textTransform: "uppercase", 
                      color: "var(--fg-dim)", 
                      fontWeight: 700 
                    }}
                  >
                    {item.label}
                  </span>

                  {item.label === "Contact" ? (
                    <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                      <a
                        href="tel:+919675686868"
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: 14,
                          color: "var(--fg)",
                          fontWeight: 600,
                          textDecoration: "none",
                          letterSpacing: "0.01em",
                        }}
                      >
                        +91 96756 86868
                      </a>
                      <a
                        href="https://wa.me/919675686868"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 5,
                          background: "#25D366",
                          color: "#ffffff",
                          fontFamily: "var(--font-mono)",
                          fontSize: 9,
                          fontWeight: 700,
                          letterSpacing: "0.06em",
                          padding: "5px 10px",
                          borderRadius: 5,
                          textDecoration: "none",
                        }}
                      >
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        WHATSAPP
                      </a>
                    </div>
                  ) : item.label === "Instagram" ? (
                    <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                      <a
                        href="https://instagram.com/_mahakal_fitness_gym"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: 14,
                          color: "var(--fg)",
                          fontWeight: 600,
                          textDecoration: "none",
                          letterSpacing: "0.01em",
                        }}
                      >
                        @_mahakal_fitness_gym
                      </a>
                      <a
                        href="https://instagram.com/_mahakal_fitness_gym"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 5,
                          background: "#E1306C",
                          color: "#ffffff",
                          fontFamily: "var(--font-mono)",
                          fontSize: 9,
                          fontWeight: 700,
                          letterSpacing: "0.06em",
                          padding: "5px 10px",
                          borderRadius: 5,
                          textDecoration: "none",
                        }}
                      >
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                        </svg>
                        FOLLOW
                      </a>
                    </div>
                  ) : (
                    <span style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--fg)", fontWeight: 500 }}>
                      {item.value}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.55, duration: 0.5 }}
              style={{ marginTop: 32 }}
            >
              <motion.a
                href="https://maps.app.goo.gl/yFWmuVRNiwqB7Nwj6"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="pill-button"
              >
                Get Directions
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column: Greyscale Image with Badge */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ position: "relative" }}
          >
            <div 
              style={{
                borderRadius: 12,
                overflow: "hidden",
                position: "relative",
                aspectRatio: "4/3",
                background: "var(--bg-card2)",
                border: "1px solid var(--border)",
                boxShadow: "0 8px 24px rgba(0,0,0,0.03)",
              }}
            >
              <img
                src="/gym-location.png"
                alt="Inside Mahakal Fitness Gym"
                style={{ 
                  width: "100%", 
                  height: "100%", 
                  objectFit: "cover",
                  filter: "grayscale(100%) brightness(0.8) contrast(1.1)",
                }}
              />
              
              {/* Dark overlay */}
              <div 
                style={{ 
                  position: "absolute", 
                  inset: 0, 
                  background: "linear-gradient(135deg, rgba(0,0,0,0.2) 0%, transparent 80%)" 
                }} 
              />

              {/* Styled Badge */}
              <div 
                style={{
                  position: "absolute",
                  bottom: 20,
                  left: 20,
                  background: "#000000",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: 6,
                  padding: "10px 16px",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                }}
              >
                <div style={{ fontFamily: "var(--font-sans)", fontWeight: 800, fontSize: 15, color: "#ffffff", letterSpacing: "-0.01em" }}>
                  Mahakal Fitness
                </div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "rgba(255,255,255,0.6)", marginTop: 2, fontWeight: 700 }}>
                  MEERUT, UP
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

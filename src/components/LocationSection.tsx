import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const info = [
  { label: "City", value: "Meerut, Uttar Pradesh" },
  { label: "Hours", value: "6:00 AM – 10:00 PM" },
  { label: "Days", value: "Monday – Sunday" },
  { label: "Contact", value: "info@mahakalfitness.com" },
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
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--fg)", fontWeight: 500 }}>
                    {item.value}
                  </span>
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
                src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=700&h=500&fit=crop&auto=format"
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

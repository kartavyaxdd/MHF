import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  {
    value: "1,200+",
    label: "Active Members in Meerut",
    desc: "Join a thriving local community of like-minded lifters who support each other's goals.",
  },
  {
    value: "98.4%",
    label: "Goal Achievement Rate",
    desc: "Proof that evidence-based training templates out-perform old-school bro-science routines.",
  },
  {
    value: "15,000+",
    label: "Coaching Hours Delivered",
    desc: "Deep hands-on training and form-correction expertise from certified lifting coaches.",
  },
];

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section 
      ref={ref} 
      className="section-pad" 
      style={{ 
        paddingTop: 40, 
        paddingBottom: 60,
        background: "transparent",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        
        {/* Technical section divider */}
        <div className="section-divider">
          <div className="section-divider-line" />
          <span className="section-divider-text">BY THE NUMBERS</span>
          <div className="section-divider-line" />
        </div>

        {/* 3 Columns Stat Grid */}
        <div 
          className="stats-row" 
          style={{ 
            marginTop: 40,
            display: "flex",
            alignItems: "stretch",
          }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="stat-item"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              style={{
                flex: 1,
                padding: "0 24px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                textAlign: "left",
              }}
            >
              {/* Stat Value */}
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 800,
                  fontSize: "clamp(38px, 5vw, 52px)",
                  color: "var(--fg)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.02em",
                  marginBottom: 10,
                }}
              >
                {s.value}
              </div>

              {/* Stat Label */}
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 800,
                  fontSize: 18,
                  color: "var(--fg)",
                  marginBottom: 12,
                  letterSpacing: "-0.01em",
                }}
              >
                {s.label}
              </div>

              {/* Stat Description */}
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 13,
                  color: "var(--fg-dim)",
                  lineHeight: 1.5,
                  margin: 0,
                }}
              >
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom divider line */}
        <div 
          style={{ 
            height: 1, 
            background: "var(--border)", 
            marginTop: 60 
          }} 
        />

      </div>
    </section>
  );
}

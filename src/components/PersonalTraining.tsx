import { motion } from "framer-motion";
import { useEffect } from "react";

interface PTProps {
  onBack: () => void;
}

export default function PersonalTraining({ onBack }: PTProps) {
  // Scroll to top when loading this page view
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        background: "var(--bg)",
        minHeight: "100vh",
        paddingTop: 100, // accommodate navbar space
        paddingBottom: 80,
      }}
    >
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 20px" }}>
        
        {/* Back navigation header */}
        <div style={{ marginBottom: 40 }}>
          <button
            onClick={onBack}
            style={{
              background: "none",
              border: "none",
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              fontWeight: 700,
              color: "var(--fg)",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: 0,
            }}
          >
            ← BACK TO HOME
          </button>
        </div>

        {/* Section Header Banner */}
        <div style={{ marginBottom: 48 }}>
          <span className="mono-badge" style={{ background: "#000000", color: "#ffffff", border: "none", marginBottom: 16 }}>
            ELITE PERSONAL TRAINING
          </span>
          
          <h1
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 800,
              fontSize: "clamp(38px, 6vw, 68px)",
              lineHeight: 1.0,
              color: "var(--fg)",
              letterSpacing: "-0.03em",
              margin: "12px 0 24px 0",
            }}
          >
            Guaranteed Results.
            <br />
            Science-Backed.
          </h1>

          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 16,
              color: "var(--fg-dim)",
              lineHeight: 1.6,
              maxWidth: 600,
              margin: 0,
            }}
          >
            Forget copying random social media workouts. Our Elite Personal Training program integrates joint mechanics, recovery mapping, and daily coaching oversight to guarantee your physical transformation.
          </p>
        </div>

        {/* Horizontal Line Divider */}
        <div style={{ height: 1, background: "var(--border)", margin: "32px 0" }} />

        {/* Two Column details layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 40,
            alignItems: "start",
          }}
        >
          {/* Left Column: How it Works (Funnel steps) */}
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 800, fontSize: 24, margin: 0, color: "var(--fg)" }}>
              The 3-Phase Coaching Protocol
            </h3>

            {/* Step 1 */}
            <div style={{ display: "flex", gap: 16 }}>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 16,
                  fontWeight: 900,
                  color: "#ffffff",
                  background: "#000000",
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                01
              </div>
              <div>
                <h4 style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 16, margin: "0 0 6px 0", color: "var(--fg)" }}>
                  Biomechanical Posture Assessment
                </h4>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--fg-muted)", lineHeight: 1.5, margin: 0 }}>
                  We map your joint range of motion, identify lateral shifts during movements, and index your strength potential to build a injury-free mechanical profile.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div style={{ display: "flex", gap: 16 }}>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 16,
                  fontWeight: 900,
                  color: "#ffffff",
                  background: "#000000",
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                02
              </div>
              <div>
                <h4 style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 16, margin: "0 0 6px 0", color: "var(--fg)" }}>
                  Progressive Micro-Periodization
                </h4>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--fg-muted)", lineHeight: 1.5, margin: 0 }}>
                  Your training blueprint is updated weekly. We adjust load, volume, and rest intervals based on your recovery indexes to ensure progressive overload never stalls.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div style={{ display: "flex", gap: 16 }}>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 16,
                  fontWeight: 900,
                  color: "#ffffff",
                  background: "#000000",
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                03
              </div>
              <div>
                <h4 style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 16, margin: "0 0 6px 0", color: "var(--fg)" }}>
                  Daily Macro & Metabolic Tuning
                </h4>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--fg-muted)", lineHeight: 1.5, margin: 0 }}>
                  No generic diet plans. We tune your target calories and protein intake daily to match metabolic scale shifts, keeping body fat reduction on schedule.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Pricing packages */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: 20,
              alignItems: "start",
            }}
          >
            {/* Starter PT Package */}
            <div
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: 16,
                padding: "20px 16px",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.02)",
                position: "relative",
              }}
            >
              <div
                style={{
                  background: "rgba(0, 0, 0, 0.7)",
                  color: "#ffffff",
                  fontFamily: "var(--font-mono)",
                  fontSize: 8,
                  fontWeight: 700,
                  padding: "3px 8px",
                  borderRadius: 3,
                  display: "inline-block",
                  marginBottom: 12,
                }}
              >
                STARTER PT
              </div>
              <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 800, fontSize: 18, margin: "0 0 4px 0", color: "var(--fg)" }}>
                Coaching Tier
              </h3>
              <span style={{ fontFamily: "var(--font-sans)", fontSize: 11, color: "var(--fg-dim)", display: "block", marginBottom: 12 }}>
                Trainer: Anubhav Pradhan (1 Yr Exp)
              </span>
              <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 16 }}>
                <span style={{ fontFamily: "var(--font-sans)", fontWeight: 800, fontSize: 24, color: "var(--fg)" }}>
                  ₹7,000
                </span>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: 11, color: "var(--fg-dim)", fontWeight: 500 }}>
                  / 3 Mos (₹2,333/mo)
                </span>
              </div>
              <div style={{ height: 1, background: "var(--border)", margin: "0 0 16px 0" }} />
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px 0", display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  "1-on-1 scheduled sessions (2x/week)",
                  "Standard training split template",
                  "Weekly progress & weight logging",
                  "Full gym floor & cardio room access",
                ].map((inc) => (
                  <li key={inc} style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--fg-muted)", display: "flex", gap: 6 }}>
                    <span style={{ color: "var(--fg)", fontWeight: 700 }}>•</span>
                    {inc}
                  </li>
                ))}
              </ul>
              <motion.a
                href="https://wa.me/918630608211?text=Hi%20Anubhav,%20I'm%20interested%20in%20Starter%20Coaching%20PT%20at%20Mahakal%20Fitness!"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="pill-button"
                style={{ width: "100%", padding: "10px 0", fontSize: 11, display: "block", textDecoration: "none", textAlign: "center" }}
              >
                BOOK STARTER PT
              </motion.a>
            </div>

            {/* Standard PT Package */}
            <div
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: 16,
                padding: "20px 16px",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.03)",
                position: "relative",
              }}
            >
              <div
                style={{
                  background: "#000000",
                  color: "#ffffff",
                  fontFamily: "var(--font-mono)",
                  fontSize: 8,
                  fontWeight: 700,
                  padding: "3px 8px",
                  borderRadius: 3,
                  display: "inline-block",
                  marginBottom: 12,
                }}
              >
                STANDARD PT
              </div>
              <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 800, fontSize: 18, margin: "0 0 4px 0", color: "var(--fg)" }}>
                Coaching Tier
              </h3>
              <span style={{ fontFamily: "var(--font-sans)", fontSize: 11, color: "var(--fg-dim)", display: "block", marginBottom: 12 }}>
                Trainer: Abhishek Panwar (4+ Yrs Exp)
              </span>
              <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 16 }}>
                <span style={{ fontFamily: "var(--font-sans)", fontWeight: 800, fontSize: 24, color: "var(--fg)" }}>
                  ₹9,000
                </span>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: 11, color: "var(--fg-dim)", fontWeight: 500 }}>
                  / 3 Mos (₹3,000/mo)
                </span>
              </div>
              <div style={{ height: 1, background: "var(--border)", margin: "0 0 16px 0" }} />
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px 0", display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  "1-on-1 scheduled sessions (3x/week)",
                  "Customized workout split templates",
                  "Weekly weight & form reviews",
                  "Full gym floor & heavy iron access",
                ].map((inc) => (
                  <li key={inc} style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--fg-muted)", display: "flex", gap: 6 }}>
                    <span style={{ color: "var(--fg)", fontWeight: 700 }}>•</span>
                    {inc}
                  </li>
                ))}
              </ul>
              <motion.a
                href="https://wa.me/919528521770?text=Hi%20Abhishek,%20I'm%20interested%20in%20Standard%20Coaching%20PT%20at%20Mahakal%20Fitness!"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="pill-button"
                style={{ width: "100%", padding: "10px 0", fontSize: 11, display: "block", textDecoration: "none", textAlign: "center" }}
              >
                BOOK STANDARD PT
              </motion.a>
            </div>

            {/* Elite PT Package */}
            <div
              style={{
                background: "var(--bg-card)",
                border: "2px solid var(--accent)",
                borderRadius: 16,
                padding: "20px 16px",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.06)",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: -10,
                  left: 20,
                  background: "#000000",
                  color: "#ffffff",
                  fontFamily: "var(--font-mono)",
                  fontSize: 8,
                  fontWeight: 700,
                  padding: "3px 8px",
                  borderRadius: 3,
                }}
              >
                ELITE PACKAGE
              </div>
              <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 800, fontSize: 18, margin: "8px 0 4px 0", color: "var(--fg)" }}>
                Coaching Tier
              </h3>
              <span style={{ fontFamily: "var(--font-sans)", fontSize: 11, color: "var(--fg-dim)", display: "block", marginBottom: 12 }}>
                Trainer: Varun Sharma (10+ Yrs Exp)
              </span>
              <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 16 }}>
                <span style={{ fontFamily: "var(--font-sans)", fontWeight: 800, fontSize: 24, color: "var(--fg)" }}>
                  ₹15,000
                </span>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: 11, color: "var(--fg-dim)", fontWeight: 500 }}>
                  / 3 Mos (₹5,000/mo)
                </span>
              </div>
              <div style={{ height: 1, background: "var(--border)", margin: "0 0 16px 0" }} />
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px 0", display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  "Dedicated 1-on-1 floor coaching",
                  "Daily macro & calorie tuning",
                  "Weekly body testing & steam bath",
                  "90-Day Results Guarantee",
                ].map((inc) => (
                  <li key={inc} style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--fg-muted)", display: "flex", gap: 6 }}>
                    <span style={{ color: "var(--fg)", fontWeight: 700 }}>•</span>
                    {inc}
                  </li>
                ))}
              </ul>
              <motion.a
                href="https://wa.me/919675686868?text=Hi%20Varun,%20I'm%20interested%20in%20Elite%20Coaching%20PT%20at%20Mahakal%20Fitness!"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="pill-button"
                style={{ width: "100%", padding: "10px 0", fontSize: 11, display: "block", textDecoration: "none", textAlign: "center" }}
              >
                BOOK ELITE PT
              </motion.a>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}

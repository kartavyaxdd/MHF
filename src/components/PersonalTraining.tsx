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
        background: "#eaeaea",
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

          {/* Right Column: Pricing package & Risk Reversal */}
          <div
            style={{
              background: "var(--bg-card)",
              border: "2px solid #000000",
              borderRadius: 16,
              padding: "32px 24px",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
              position: "relative",
            }}
          >
            {/* Package badge */}
            <div
              style={{
                position: "absolute",
                top: -12,
                left: 24,
                background: "#000000",
                color: "#ffffff",
                fontFamily: "var(--font-mono)",
                fontSize: 9,
                fontWeight: 700,
                padding: "4px 10px",
                borderRadius: 4,
              }}
            >
              ELITE PACKAGE
            </div>

            <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 800, fontSize: 24, margin: "12px 0 6px 0", color: "var(--fg)" }}>
              Elite Coaching Tier
            </h3>
            
            <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 20 }}>
              <span style={{ fontFamily: "var(--font-sans)", fontWeight: 800, fontSize: 36, color: "var(--fg)" }}>
                ₹15,000
              </span>
              <span style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--fg-dim)", fontWeight: 500 }}>
                for 3 Months (₹5,000 / mo)
              </span>
            </div>

            {/* divider */}
            <div style={{ height: 1, background: "var(--border)", margin: "0 0 20px 0" }} />

            {/* Inclusions */}
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px 0", display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                "Dedicated 1-on-1 personal lifting coach",
                "Custom daily workout programs updated weekly",
                "Daily nutritional log reviews & calorie adjustments",
                "Weekly body composition & muscle mass testing",
                "Full VIP access to all heavy lifting zones",
                "Unlimited free guest passes (one per month)",
              ].map((inc) => (
                <li key={inc} style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--fg-muted)", display: "flex", gap: 8, alignItems: "flex-start" }}>
                  <span style={{ color: "#000000", fontWeight: 700 }}>•</span>
                  {inc}
                </li>
              ))}
            </ul>

            {/* Risk Reversal Callout */}
            <div
              style={{
                background: "rgba(0, 0, 0, 0.03)",
                border: "1px solid var(--border)",
                borderRadius: 8,
                padding: 16,
                marginBottom: 24,
              }}
            >
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, fontWeight: 700, color: "var(--fg)", display: "block", marginBottom: 6 }}>
                RISK REVERSAL GUARANTEE:
              </span>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--fg-dim)", lineHeight: 1.4, margin: 0 }}>
                If you do not hit your strength or body fat target goals in 90 days, we coach you for free until you do. No excuses, no fine print.
              </p>
            </div>

            {/* Action button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="pill-button"
              style={{ width: "100%", padding: "12px 0", fontSize: 13 }}
            >
              BOOK FREE PT CONSULTATION
            </motion.button>
          </div>
        </div>

      </div>
    </motion.div>
  );
}

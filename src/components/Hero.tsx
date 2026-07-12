import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "#000000",
        overflow: "hidden",
      }}
    >
      {/* Background desaturated image */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        <img
          src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=1800&h=1200&fit=crop&auto=format"
          alt="Athlete performing split squat training"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 20%",
            filter: "grayscale(100%) brightness(0.65) contrast(1.05)",
          }}
        />
        {/* Subtle dark gradient overlay to ensure text readability */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.1) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 30%)",
          }}
        />
      </div>

      <div
        className="hero-pad"
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: 1000,
          width: "100%",
          margin: "0 auto",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 20,
          }}
        >
          {/* Eyebrow badge */}
          <div
            style={{
              background: "#ffffff",
              color: "#000000",
              padding: "4px 12px",
              borderRadius: 4,
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              display: "inline-block",
            }}
          >
            Science-Based Bodybuilding
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 800,
              fontSize: "clamp(40px, 7vw, 76px)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "#ffffff",
              margin: 0,
              maxWidth: 820,
            }}
          >
            Start your fitness journey today
            <br />
            with Mahakal Fitness.
          </h1>

          {/* Subheader copy */}
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(15px, 2vw, 17px)",
              fontWeight: 400,
              lineHeight: 1.6,
              color: "rgba(255, 255, 255, 0.76)",
              maxWidth: 580,
              margin: "8px 0 16px 0",
            }}
          >
            Most gym members quit in 30 days due to zero guidance and zero progress. At Mahakal, we combine evidence-based lifting templates with elite accountability to guarantee you build muscle and lose fat from week one.
          </p>

          {/* Pill Button (white on hero for contrast) */}
          <motion.a
            href="#plans"
            whileHover={{ scale: 1.03, background: "#f3f3f3" }}
            whileTap={{ scale: 0.97 }}
            style={{
              background: "#ffffff",
              color: "#000000",
              padding: "14px 32px",
              borderRadius: 9999,
              fontFamily: "var(--font-sans)",
              fontWeight: 800,
              fontSize: 13,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            CLAIM YOUR FREE 3-DAY PASS
          </motion.a>
        </motion.div>
      </div>

      {/* Slide / Page progress indicator on bottom right */}
      <div
        style={{
          position: "absolute",
          bottom: 40,
          right: "8%",
          zIndex: 10,
          fontFamily: "var(--font-mono)",
          fontSize: 12,
          fontWeight: 700,
          color: "rgba(255, 255, 255, 0.6)",
          letterSpacing: "0.08em",
        }}
      >
        2 / 3
      </div>
    </section>
  );
}

import { useState, useRef } from "react";
import { motion } from "framer-motion";

interface Transformation {
  name: string;
  beforeImg: string;
  afterImg: string;
  quote: string;
  programLink: string;
}

const transformations: Transformation[] = [
  {
    name: "Liam",
    beforeImg: "https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?w=300&h=400&fit=crop&auto=format&q=60",
    afterImg: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=300&h=400&fit=crop&auto=format&q=60",
    quote: "I wasted 2 years copying random bodybuilding routines with zero progress. Switching to Mahakal's Committed Plan gave me a structured, scientific path. I gained 6kg of pure muscle in 12 weeks.",
    programLink: "#plans",
  },
  {
    name: "Sarah",
    beforeImg: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=300&h=400&fit=crop&auto=format&q=60",
    afterImg: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=300&h=400&fit=crop&auto=format&q=60",
    quote: "I was always intimidated to lift weights and had no idea where to start. The coaches corrected my form, adjusted my nutrition, and helped me drop 8kg while building real strength.",
    programLink: "#plans",
  },
  {
    name: "David",
    beforeImg: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&h=400&fit=crop&auto=format&q=60",
    afterImg: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=400&fit=crop&auto=format&q=60",
    quote: "No bro-science, just raw results. Having my training, sets, and RPEs structured meant zero guesswork. My bench went up by 30kg and my squat by 45kg.",
    programLink: "#plans",
  },
];

export default function FeaturesSection() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % transformations.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + transformations.length) % transformations.length);
  };

  return (
    <section id="transformations" className="section-pad" style={{ borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        
        {/* Header Block */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48 }}>
          <div>
            <h2
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 800,
                fontSize: "clamp(36px, 6vw, 56px)",
                color: "var(--fg)",
                lineHeight: 1.05,
                margin: 0,
                letterSpacing: "-0.02em",
              }}
            >
              100,000+
              <br />
              Transformations
            </h2>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 14,
                color: "var(--fg-dim)",
                margin: "12px 0 0 0",
                maxWidth: 480,
                lineHeight: 1.5,
              }}
            >
              Results vary based on factors such as training consistency, nutrition, and individual differences.
            </p>
          </div>

          {/* Carousel Arrows */}
          <div style={{ display: "flex", gap: 12 }}>
            <button
              onClick={handlePrev}
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                color: "var(--fg)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                fontSize: 16,
              }}
            >
              ←
            </button>
            <button
              onClick={handleNext}
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                color: "var(--fg)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                fontSize: 16,
              }}
            >
              →
            </button>
          </div>
        </div>

        {/* Carousel Window */}
        <div 
          style={{ 
            overflow: "hidden",
            width: "100%",
            borderRadius: 12,
            border: "1px solid var(--border)",
            background: "var(--bg-card)",
            boxShadow: "0 8px 24px rgba(0,0,0,0.02)",
          }}
        >
          <motion.div
            ref={containerRef}
            animate={{ x: `-${index * 100}%` }}
            transition={{ type: "spring", stiffness: 100, damping: 18 }}
            style={{
              display: "flex",
              width: `${transformations.length * 100}%`,
            }}
          >
            {transformations.map((item, tIdx) => (
              <div 
                key={item.name} 
                style={{ 
                  width: `${100 / transformations.length}%`,
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  alignItems: "stretch",
                }}
              >
                {/* Responsive grid card */}
                <div 
                  style={{ 
                    display: "grid", 
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                  }}
                >
                  
                  {/* Left Side: Before & After Photos side-by-side */}
                  <div style={{ display: "flex", width: "100%", height: 350, borderRight: "1px solid var(--border)" }}>
                    {/* Before Photo */}
                    <div style={{ position: "relative", width: "50%", height: "100%", overflow: "hidden" }}>
                      <img
                        src={item.beforeImg}
                        alt={`${item.name} Before`}
                        style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(20%)" }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          top: 12,
                          left: 12,
                          background: "#ffffff",
                          color: "#000000",
                          fontFamily: "var(--font-mono)",
                          fontSize: 9,
                          fontWeight: 700,
                          padding: "3px 8px",
                          borderRadius: 3,
                          border: "1px solid rgba(0,0,0,0.15)",
                        }}
                      >
                        BEFORE
                      </div>
                    </div>

                    {/* After Photo */}
                    <div style={{ position: "relative", width: "50%", height: "100%", overflow: "hidden", borderLeft: "1px solid var(--border)" }}>
                      <img
                        src={item.afterImg}
                        alt={`${item.name} After`}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          top: 12,
                          left: 12,
                          background: "#ffffff",
                          color: "#000000",
                          fontFamily: "var(--font-mono)",
                          fontSize: 9,
                          fontWeight: 700,
                          padding: "3px 8px",
                          borderRadius: 3,
                          border: "1px solid rgba(0,0,0,0.15)",
                        }}
                      >
                        AFTER
                      </div>
                    </div>
                  </div>

                  {/* Right Side: Testimonial Quote & Info */}
                  <div style={{ padding: "40px 32px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <span 
                      style={{ 
                        fontFamily: "var(--font-mono)", 
                        fontSize: 11, 
                        fontWeight: 700, 
                        color: "var(--fg-dim)", 
                        letterSpacing: "0.08em",
                        marginBottom: 16,
                        display: "block"
                      }}
                    >
                      {item.name}
                    </span>
                    
                    {/* Testimonial Quote */}
                    <blockquote
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontWeight: 800,
                        fontSize: "clamp(18px, 3vw, 24px)",
                        color: "var(--fg)",
                        lineHeight: 1.35,
                        margin: "0 0 24px 0",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      “{item.quote}”
                    </blockquote>

                    {/* Action link */}
                    <div>
                      <a
                        href={item.programLink}
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: 11,
                          fontWeight: 700,
                          letterSpacing: "0.05em",
                          color: "var(--fg)",
                          textDecoration: "underline",
                          textTransform: "uppercase",
                        }}
                      >
                        VISIT PROGRAM
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}

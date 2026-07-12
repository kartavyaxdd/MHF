import { useState, useRef, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface TransformSlide {
  before: string;
  after: string;
  name: string;
  result: string;
  aspectRatio?: string;
}

const transformations: TransformSlide[] = [
  {
    before: "/before1.png",
    after: "/after1.png",
    name: "Member 1",
    result: "Fat Loss · Body Recomposition",
  },
  {
    before: "/before2.png",
    after: "/after2.png",
    name: "Member 2",
    result: "Weight Loss · Lean Physique",
  },
  {
    before: "/before3.png",
    after: "/after3.png",
    name: "Member 3",
    result: "Skinny to Muscular · Bulk Up",
    aspectRatio: "16/9",
  },
  {
    before: "/before4.png",
    after: "/after4.png",
    name: "Member 4",
    result: "Mass Gain · Strength Build",
  },
];

/* ─── MF Watermark ─── */
function MFWatermark() {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 12,
        right: 12,
        zIndex: 20,
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        gap: 5,
        background: "rgba(0,0,0,0.55)",
        backdropFilter: "blur(4px)",
        padding: "4px 9px",
        borderRadius: 6,
      }}
    >
      <div
        style={{
          width: 22,
          height: 22,
          background: "#ffffff",
          borderRadius: 4,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <span
          style={{
            fontFamily: "'Space Mono', monospace",
            fontWeight: 700,
            fontSize: 9,
            color: "#000000",
            letterSpacing: "-0.05em",
          }}
        >
          MF
        </span>
      </div>
      <span
        style={{
          fontFamily: "'Space Mono', monospace",
          fontWeight: 700,
          fontSize: 8,
          color: "#ffffff",
          letterSpacing: "0.04em",
          textTransform: "uppercase",
        }}
      >
        Mahakal Fitness
      </span>
    </div>
  );
}

/* ─── Drag Slider Card ─── */
function SliderCard({ slide, index, inView }: { slide: TransformSlide; index: number; inView: boolean }) {
  const [sliderPos, setSliderPos] = useState(50);
  const isDragging = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const ratio = slide.aspectRatio ?? "3/4";

  const calcPos = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(100, Math.max(0, pct)));
  }, []);

  const onMouseDown = (e: React.MouseEvent) => { isDragging.current = true; calcPos(e.clientX); };
  const onTouchStart = (e: React.TouchEvent) => { isDragging.current = true; calcPos(e.touches[0].clientX); };

  useEffect(() => {
    const onMove = (e: MouseEvent) => { if (isDragging.current) calcPos(e.clientX); };
    const onTouch = (e: TouchEvent) => { if (isDragging.current) calcPos(e.touches[0].clientX); };
    const onUp = () => { isDragging.current = false; };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onTouch);
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("touchend", onUp);
    };
  }, [calcPos]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
      style={{ display: "flex", flexDirection: "column" }}
    >
      {/* Slider */}
      <div
        ref={containerRef}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: ratio,
          overflow: "hidden",
          borderRadius: "12px 12px 0 0",
          cursor: "ew-resize",
          userSelect: "none",
          background: "#111",
        }}
      >
        {/* After (base layer) */}
        <img
          src={slide.after}
          alt="After"
          draggable={false}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />

        {/* Before (clipped) */}
        <div style={{ position: "absolute", inset: 0, clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}>
          <img
            src={slide.before}
            alt="Before"
            draggable={false}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        {/* Divider line */}
        <div
          style={{
            position: "absolute", top: 0, bottom: 0,
            left: `${sliderPos}%`, width: 2,
            background: "#fff",
            boxShadow: "0 0 8px rgba(0,0,0,0.6)",
            transform: "translateX(-50%)", zIndex: 10,
          }}
        >
          {/* Handle */}
          <div
            style={{
              position: "absolute", top: "50%", left: "50%",
              transform: "translate(-50%, -50%)",
              width: 38, height: 38, borderRadius: "50%",
              background: "#fff", boxShadow: "0 2px 14px rgba(0,0,0,0.5)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M5 8L2 5M5 8L2 11M11 8L14 5M11 8L14 11" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="8" y1="2" x2="8" y2="14" stroke="#000" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

        {/* BEFORE label */}
        <div style={{
          position: "absolute", top: 10, left: 10, zIndex: 5,
          background: "rgba(0,0,0,0.72)", color: "#fff",
          fontFamily: "'Space Mono', monospace", fontSize: 8, fontWeight: 700,
          padding: "3px 8px", borderRadius: 3, letterSpacing: "0.06em",
          opacity: sliderPos > 10 ? 1 : 0, transition: "opacity 0.2s",
        }}>BEFORE</div>

        {/* AFTER label */}
        <div style={{
          position: "absolute", top: 10, right: 10, zIndex: 5,
          background: "rgba(0,0,0,0.72)", color: "#fff",
          fontFamily: "'Space Mono', monospace", fontSize: 8, fontWeight: 700,
          padding: "3px 8px", borderRadius: 3, letterSpacing: "0.06em",
          opacity: sliderPos < 90 ? 1 : 0, transition: "opacity 0.2s",
        }}>AFTER</div>

        <MFWatermark />
      </div>

      {/* Caption */}
      <div
        style={{
          background: "var(--bg-card)",
          border: "1px solid var(--border)", borderTop: "none",
          borderRadius: "0 0 12px 12px",
          padding: "14px 16px",
          display: "flex", justifyContent: "space-between", alignItems: "center",
        }}
      >
        <div>
          <span style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 14, color: "var(--fg)", display: "block" }}>
            {slide.name}
          </span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: "var(--fg-dim)", fontWeight: 700, letterSpacing: "0.04em" }}>
            {slide.result}
          </span>
        </div>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, fontWeight: 700, color: "var(--fg-dim)", letterSpacing: "0.04em" }}>
          ← DRAG →
        </span>
      </div>
    </motion.div>
  );
}

/* ─── Main Section ─── */
export default function FeaturesSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section id="transformations" className="section-pad" style={{ borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }} ref={ref}>

        <div className="section-divider">
          <div className="section-divider-line" />
          <span className="section-divider-text">REAL RESULTS</span>
          <div className="section-divider-line" />
        </div>

        {/* Header */}
        <div style={{ marginBottom: 40 }}>
          <span className="mono-badge" style={{ background: "#000", color: "#fff", border: "none", marginBottom: 12 }}>
            MEMBER TRANSFORMATIONS
          </span>
          <h2 style={{
            fontFamily: "var(--font-sans)", fontWeight: 800,
            fontSize: "clamp(34px, 5vw, 56px)", lineHeight: 1.05,
            color: "var(--fg)", letterSpacing: "-0.02em", margin: 0,
          }}>
            Results That Speak<br />Louder Than Words
          </h2>
          <p style={{
            fontFamily: "var(--font-sans)", fontSize: 15,
            color: "var(--fg-dim)", lineHeight: 1.6,
            maxWidth: 520, margin: "12px 0 0 0",
          }}>
            Drag the slider left or right to reveal the transformation. Real members, real results — no filters, no tricks.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24,
        }}>
          {transformations.map((slide, i) => (
            <SliderCard key={i} slide={slide} index={i} inView={inView} />
          ))}
        </div>

        <p style={{
          fontFamily: "var(--font-mono)", fontSize: 10,
          color: "var(--fg-dim)", textAlign: "center",
          marginTop: 24, letterSpacing: "0.06em",
        }}>
          ← SLIDE TO REVEAL TRANSFORMATION →
        </p>

      </div>
    </section>
  );
}

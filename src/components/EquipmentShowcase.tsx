import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface EquipmentItem {
  title: string;
  badge: string;
  desc: string;
  img: string;
}

const equipments: EquipmentItem[] = [
  {
    title: "Heavy Iron Zone",
    badge: "STRENGTH & STABILITY",
    desc: "Fully stocked premium hex dumbbell racks, high-grade steel plates, heavy barbells, and reinforced squat platforms.",
    img: "/weights.jpg",
  },
  {
    title: "Cardio Conditioning Suite",
    badge: "METABOLIC VELOCITY",
    desc: "Commercial spin bikes, dual-action air resistance trainers, and elliptical setups engineered to build endurance.",
    img: "/cardio.png",
  },
  {
    title: "Endurance Station",
    badge: "AEROBIC THRESHOLD",
    desc: "Premium motorized heavy-duty treadmills featuring customizable incline profiles and real-time biometric readouts.",
    img: "/treadmills.png",
  },
];

export default function EquipmentShowcase() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <section id="facility" className="section-pad" style={{ borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }} ref={ref}>
        
        {/* Section Divider Line */}
        <div className="section-divider">
          <div className="section-divider-line" />
          <span className="section-divider-text">OUR FACILITY</span>
          <div className="section-divider-line" />
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 40, flexWrap: "wrap", gap: 20 }}>
          <div>
            <span className="mono-badge" style={{ background: "#000000", color: "#ffffff", border: "none", marginBottom: 12 }}>
              THE HARDWARE
            </span>
            <h2
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 800,
                fontSize: "clamp(34px, 5vw, 56px)",
                lineHeight: 1.05,
                color: "var(--fg)",
                letterSpacing: "-0.02em",
                margin: 0,
              }}
            >
              Equipped For Serious
              <br />
              Physical Progress
            </h2>
          </div>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 15,
              color: "var(--fg-dim)",
              lineHeight: 1.6,
              maxWidth: 450,
              margin: 0,
            }}
          >
            We do not compromise on hardware. Our facility features premium-grade mechanical equipment, heavy free weights, and dedicated athletic training setups.
          </p>
        </div>

        {/* Equipment Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 24,
          }}
        >
          {equipments.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              style={{
                background: "var(--bg-card)",
                borderRadius: 12,
                overflow: "hidden",
                border: "1px solid var(--border)",
                display: "flex",
                flexDirection: "column",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.02)",
              }}
            >
              {/* Image Container */}
              <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden", background: "#eaeaea" }}>
                <img
                  src={item.img}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    filter: "grayscale(100%)",
                    transition: "filter 0.3s ease, scale 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = "grayscale(15%)";
                    e.currentTarget.style.scale = "1.03";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = "grayscale(100%)";
                    e.currentTarget.style.scale = "1";
                  }}
                />

                {/* Badge Overlay */}
                <div
                  style={{
                    position: "absolute",
                    top: 12,
                    left: 12,
                    background: "rgba(0, 0, 0, 0.85)",
                    color: "#ffffff",
                    fontFamily: "var(--font-mono)",
                    fontSize: 8,
                    fontWeight: 700,
                    padding: "4px 8px",
                    borderRadius: 3,
                    letterSpacing: "0.05em",
                  }}
                >
                  {item.badge}
                </div>
              </div>

              {/* Info Block */}
              <div style={{ padding: "20px 20px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                <h3
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 800,
                    fontSize: 20,
                    color: "var(--fg)",
                    margin: "0 0 8px 0",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 13.5,
                    color: "var(--fg-dim)",
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

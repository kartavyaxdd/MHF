import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Trainer {
  name: string;
  role: string;
  specialty: string;
  credentials: string;
  bio: string;
  img: string;
}

const trainers: Trainer[] = [
  {
    name: "Varun Sharma",
    role: "HEAD STRENGTH COACH",
    specialty: "Powerlifting & Biomechanics",
    credentials: "CSCS · 10+ Years Coaching",
    bio: "Specializes in advanced progressive overload programming, correcting mechanical sticking points, and targeted physique development.",
    img: "/varun.jpg",
  },
  {
    name: "Rohan Sharma",
    role: "HYPERTROPHY SPECIALIST",
    specialty: "Body Recomposition & Diet",
    credentials: "ACSM CPT · PN1 Nutritionist",
    bio: "Focuses on evidence-based muscle hypertrophy, macro distribution, and scientific diet templates for sustainable fat loss.",
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=800&fit=crop&auto=format",
  },
  {
    name: "Amit Verma",
    role: "PERFORMANCE COACH",
    specialty: "Olympic Lifting & Velocity",
    credentials: "USAW Level 1 · 6+ Years Coaching",
    bio: "Helps local athletes develop explosive power, speed off the floor, and master technical snatch and clean-and-jerk mechanics.",
    img: "https://images.unsplash.com/photo-1605296867304-46d5465a25f1?w=600&h=800&fit=crop&auto=format",
  },
  {
    name: "Priya Joshi",
    role: "MOBILITY & FUNCTIONAL COACH",
    specialty: "Corrective Exercise & Rehab",
    credentials: "NASM CES · FMS Level 2",
    bio: "Dedicated to joint health, biomechanical recovery, mobility drills, and rebuilding pain-free structural movement patterns.",
    img: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=600&h=800&fit=crop&auto=format",
  },
];

export default function TrainersSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <section id="trainers" className="section-pad" style={{ borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }} ref={ref}>
        
        {/* Custom Section Header */}
        <div className="section-divider">
          <div className="section-divider-line" />
          <span className="section-divider-text">COACHING STAFF</span>
          <div className="section-divider-line" />
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 40, flexWrap: "wrap", gap: 20 }}>
          <div>
            <span className="mono-badge" style={{ background: "#000000", color: "#ffffff", border: "none", marginBottom: 12 }}>
              THE INTELLECT ON THE GYM FLOOR
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
              Learn From Elite
              <br />
              Physique Coaches
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
            Our coaching team holds certifications in strength conditioning, nutrition planning, and biomechanics. No bro-science—just pure, evidence-based training methods.
          </p>
        </div>

        {/* Trainers Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 24,
          }}
        >
          {trainers.map((trainer, index) => (
            <motion.div
              key={trainer.name}
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
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.03)",
              }}
            >
              {/* Profile Image container */}
              <div style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden", background: "#eaeaea" }}>
                <img
                  src={trainer.img}
                  alt={trainer.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    filter: "grayscale(100%)",
                    transition: "filter 0.3s ease, scale 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = "grayscale(20%)";
                    e.currentTarget.style.scale = "1.04";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = "grayscale(100%)";
                    e.currentTarget.style.scale = "1";
                  }}
                />

                {/* Role badge overlay */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 12,
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
                  {trainer.role}
                </div>
              </div>

              {/* Text info */}
              <div style={{ padding: "20px 16px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                <h3
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 800,
                    fontSize: 20,
                    color: "var(--fg)",
                    margin: "0 0 4px 0",
                  }}
                >
                  {trainer.name}
                </h3>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    fontWeight: 700,
                    color: "var(--fg-dim)",
                    marginBottom: 12,
                    display: "block",
                  }}
                >
                  {trainer.credentials}
                </span>
                
                {/* Horizontal line divider */}
                <div style={{ height: 1, background: "var(--border)", margin: "0 0 12px 0" }} />

                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 12,
                    fontWeight: 700,
                    color: "var(--fg)",
                    display: "block",
                    marginBottom: 6,
                  }}
                >
                  SPECIAL FOCUS: {trainer.specialty}
                </span>

                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 13,
                    color: "var(--fg-muted)",
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  {trainer.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

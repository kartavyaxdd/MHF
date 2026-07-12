import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Trainer {
  name: string;
  role: string;
  specialty: string;
  credentials: string;
  bio: string;
  img: string;
  phone?: string;
}

const trainers: Trainer[] = [
  {
    name: "Varun Sharma",
    role: "HEAD STRENGTH COACH",
    specialty: "Weight Loss & Hypertrophy (Body Recomposition)",
    credentials: "CSCS · 10+ Years Coaching",
    bio: "Helping clients burn stubborn body fat while simultaneously building lean, sculpted muscle through evidence-based resistance training and sustainable, non-restrictive nutrition strategies.",
    img: "/varun.jpg",
    phone: "9675686868",
  },
  {
    name: "Abhishek Panwar",
    role: "PERSONAL TRAINER",
    specialty: "Weight Loss & Teen Athletic Physique",
    credentials: "CPT · 4+ Years Coaching",
    bio: "I help teenagers and young adults build a strong, lean, and athletic physique while achieving healthy weight loss. My coaching combines safe resistance training with sustainable lifestyle habits to help young clients drop fat and build muscle without extreme dieting. I prioritize proper lifting form, injury prevention, and building lifelong gym confidence so clients can transform their bodies and boost their self-esteem.",
    img: "/abhishek.png",
    phone: "9528521770",
  },
  {
    name: "Anubhav Pradhan",
    role: "PERSONAL TRAINER",
    specialty: "Hypertrophy & Conditioning",
    credentials: "PT · 1 Year Experience",
    bio: "Specializes in hypertrophy basics, form mechanics, cardiovascular conditioning, and client accountability setups.",
    img: "/anubhav.jpg",
    phone: "8630608211",
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
                    margin: "0 0 16px 0",
                  }}
                >
                  {trainer.bio}
                </p>

                {trainer.phone && (
                  <div style={{ marginTop: "auto" }}>
                    <a
                      href={`https://wa.me/91${trainer.phone}?text=Hi%20${trainer.name.split(" ")[0]},%20I'm%20interested%20in%20your%20Personal%20Training%20program!`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 8,
                        background: "#000000",
                        color: "#ffffff",
                        border: "none",
                        borderRadius: 6,
                        padding: "10px 16px",
                        fontFamily: "var(--font-mono)",
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: "0.05em",
                        textDecoration: "none",
                        cursor: "pointer",
                        width: "100%",
                        textAlign: "center"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "rgba(45, 45, 45, 0.9)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "#000000";
                      }}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.335 4.978L2 22l5.197-1.363a9.923 9.923 0 0 0 4.814 1.246h.004c5.507 0 9.99-4.478 9.99-9.985 0-2.67-1.04-5.18-2.93-7.07A9.907 9.907 0 0 0 12.012 2zm6.068 14.225c-.278.78-1.619 1.488-2.235 1.558-.564.064-1.299.117-2.1-.144-4.83-1.57-7.91-6.48-8.15-6.8-.24-.32-1.92-2.55-1.92-4.86 0-2.31 1.2-3.44 1.63-3.9.37-.39.99-.48 1.44-.48.15 0 .28.01.39.01.33.01.55.03.79.6.3.72 1.03 2.52 1.12 2.7.09.18.15.39.03.63-.12.24-.27.39-.54.72-.27.3-.57.69-.81.93-.27.27-.56.57-.24 1.11.33.54 1.47 2.43 3.16 3.93 2.18 1.95 4.02 2.55 4.59 2.85.57.3 1.05.21 1.44-.24.39-.45 1.68-1.95 2.13-2.61.18-.27.36-.24.63-.15.27.09 1.71.81 2.01.96.3.15.51.24.57.36.09.12.09.72-.18 1.5z" />
                      </svg>
                      CONTACT VIA WHATSAPP
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

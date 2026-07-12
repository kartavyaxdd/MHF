import { motion } from "framer-motion";

interface Plan {
  name: string;
  tag?: string;
  price: string;
  period: string;
  pricePerMonth?: string;
  rating: string;
  img: string;
  features: string[];
  featured: boolean;
  defaultExp: string[];
  defaultGoal: string;
}

const plans: Plan[] = [
  {
    name: "Flexible Starter Pass",
    tag: "TEST THE WATERS",
    price: "₹1,500",
    period: "1 Month",
    pricePerMonth: "₹1,500 / mo",
    rating: "4.7",
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=800&fit=crop&auto=format",
    features: [
      "Full gym floor access (no peak-hour limits)",
      "Cancel anytime, no long-term contracts",
      "Locker room, shower & cardio suite access",
      "1-on-1 trainer orientation & form walkthrough",
    ],
    featured: false,
    defaultExp: ["Beginner", "Intermediate"],
    defaultGoal: "GAIN MUSCLE",
  },
  {
    name: "90-Day Transformation",
    tag: "RECOMMENDED · MOST POPULAR",
    price: "₹3,500",
    period: "3 Months",
    pricePerMonth: "₹1,166 / mo",
    rating: "4.9",
    img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=800&fit=crop&auto=format",
    features: [
      "Full gym floor & heavy iron zone access",
      "Free monthly guest pass (invite a friend)",
      "Weekly squat, bench & deadlift form workshops",
      "Mobile progressive overload logs & workout tracking",
      "Member-only WhatsApp circle for form reviews",
      "Premium locker & shower access",
    ],
    featured: true,
    defaultExp: ["Beginner", "Intermediate", "Advanced"],
    defaultGoal: "GAIN MUSCLE",
  },
];

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      style={{
        background: "var(--bg-card)",
        borderRadius: 12,
        overflow: "hidden",
        border: plan.featured ? "2px solid #000000" : "1px solid var(--border)",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        boxShadow: plan.featured ? "0 8px 32px rgba(0, 0, 0, 0.08)" : "0 4px 16px rgba(0, 0, 0, 0.03)",
        position: "relative",
      }}
    >
      {/* Image Container */}
      <div style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden", background: "#eaeaea" }}>
        <img
          src={plan.img}
          alt={plan.name}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        
        {/* Top-Left tag badge */}
        {plan.tag && (
          <div
            style={{
              position: "absolute",
              top: 12,
              left: 12,
              background: plan.featured ? "#000000" : "#ffffff",
              color: plan.featured ? "#ffffff" : "#000000",
              fontFamily: "var(--font-mono)",
              fontSize: 9,
              fontWeight: 700,
              padding: "4px 8px",
              borderRadius: 3,
              border: "1px solid rgba(0, 0, 0, 0.15)",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            {plan.tag}
          </div>
        )}

        {/* Bottom-Left Phase/Type Badge */}
        {plan.pricePerMonth && (
          <div
            style={{
              position: "absolute",
              bottom: 12,
              left: 12,
              background: "rgba(0, 0, 0, 0.8)",
              color: "#ffffff",
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              fontWeight: 700,
              padding: "4px 10px",
              borderRadius: 9999,
              letterSpacing: "0.02em",
            }}
          >
            {plan.pricePerMonth}
          </div>
        )}
      </div>

      {/* Content Container */}
      <div style={{ padding: "20px 16px 24px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
        {/* Title */}
        <h3
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 800,
            fontSize: 18,
            color: "var(--fg)",
            lineHeight: 1.3,
            margin: "0 0 8px 0",
            minHeight: 44,
          }}
        >
          {plan.name}
        </h3>

        {/* Price and Rating row */}
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 12 }}>
          <div style={{ display: "flex", gap: 6, alignItems: "baseline" }}>
            <span style={{ fontFamily: "var(--font-sans)", fontWeight: 800, fontSize: 24, color: "var(--fg)" }}>
              {plan.price}
            </span>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--fg-dim)", fontWeight: 500 }}>
              for {plan.period}
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 3, fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700, color: "var(--fg-dim)" }}>
            <span style={{ color: "#f59e0b" }}>★</span>
            <span>{plan.rating}</span>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "var(--border)", margin: "8px 0 16px" }} />

        {/* Features List */}
        <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px", display: "flex", flexDirection: "column", gap: 8 }}>
          {plan.features.map((feat) => (
            <li
              key={feat}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 13,
                color: "var(--fg-muted)",
                lineHeight: 1.4,
                display: "flex",
                alignItems: "flex-start",
                gap: 8,
              }}
            >
              <span style={{ color: "#000000", fontWeight: 700 }}>•</span>
              {feat}
            </li>
          ))}
        </ul>

        {/* Action Button */}
        <motion.a
          href={`https://wa.me/919675686868?text=Hi,%20I'm%20interested%20in%20joining%20the%20${encodeURIComponent(plan.period)}%20gym%20plan%20at%20Mahakal%20Fitness!`}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="pill-button"
          style={{ width: "100%", marginTop: "auto", padding: "10px 0", fontSize: 12, display: "block", textDecoration: "none", textAlign: "center" }}
        >
          Join Plan
        </motion.a>
      </div>
    </motion.div>
  );
}

interface PricingProps {
  onNavigateToPT: () => void;
}

export default function PricingSection({ onNavigateToPT }: PricingProps) {
  return (
    <section id="plans" className="section-pad" style={{ borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        
        {/* Custom header matching the layout */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 32 }}>
          <div>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: 700, letterSpacing: "0.15em", color: "var(--fg-dim)" }}>
              MEMBERSHIP FEES
            </span>
            <h2
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 800,
                fontSize: "clamp(32px, 5vw, 48px)",
                color: "var(--fg)",
                margin: "4px 0 0 0",
                letterSpacing: "-0.01em",
              }}
            >
              Gym Membership
            </h2>
          </div>
          <a
            href="#"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.05em",
              color: "var(--fg)",
              textDecoration: "underline",
              paddingBottom: 4,
            }}
          >
            VIEW DETAILS
          </a>
        </div>

        {/* Sub-banner button */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 48 }}>
          <button
            style={{
              background: "rgba(45, 45, 45, 0.88)",
              color: "#ffffff",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: 9999,
              padding: "10px 24px",
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.06em",
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            }}
          >
            NOT SURE WHICH MEMBERSHIP FIT YOUR TARGETS?
          </button>
        </div>

        {/* Cards Grid */}
        <div className="pricing-grid">
          {plans.map((p) => (
            <PlanCard key={p.name} plan={p} />
          ))}
        </div>

        {/* Bottom PT Callout banner */}
        <div
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: 12,
            padding: "28px 32px",
            marginTop: 48,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 20,
            boxShadow: "0 4px 16px rgba(0, 0, 0, 0.02)",
          }}
        >
          <div>
            <span className="mono-badge" style={{ background: "#000000", color: "#ffffff", border: "none", marginBottom: 8, fontSize: 9 }}>
              LOOKING FOR 1-ON-1 GUIDANCE?
            </span>
            <h4 style={{ fontFamily: "var(--font-sans)", fontWeight: 800, fontSize: 20, margin: 0, color: "var(--fg)" }}>
              Elite Personal Training & Coaching
            </h4>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--fg-dim)", margin: "6px 0 0 0", maxWidth: 640, lineHeight: 1.4 }}>
              Achieve guaranteed strength or body fat reduction goals with our dedicated coaching roster. Features customized biomechanical lifting blueprints and daily metabolic check-ins.
            </p>
          </div>
          
          <motion.button
            onClick={onNavigateToPT}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="pill-button"
            style={{ padding: "12px 28px", fontSize: 12 }}
          >
            EXPLORE ELITE PT
          </motion.button>
        </div>

      </div>
    </section>
  );
}

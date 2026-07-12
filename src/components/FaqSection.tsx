import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What are the gym timings?",
    answer: "We are open Monday to Saturday from 5:00 AM to 10:00 PM, and Sundays from 6:00 AM to 1:00 PM. You can train at any time; there are no peak-hour limits on any of our passes.",
  },
  {
    question: "Is steam bath access included in all plans?",
    answer: "Steam bath access is fully included in our 3-Month '90-Day Transformation' plan and all Elite Personal Training tiers at no extra charge. Starter passes can add it for a small drop-in fee.",
  },
  {
    question: "Can I freeze my membership if I travel or fall sick?",
    answer: "Yes! For our 3-Month and coaching plans, you can freeze your membership for up to 14 days. Just notify the front desk or drop us a WhatsApp message before your freeze period begins.",
  },
  {
    question: "Do you offer a trial period for new members in Meerut?",
    answer: "Absolutely. You can claim a free 3-day pass to test all our heavy equipment and experience the gym floor before committing to a membership. Scroll to the top and click 'Claim Your Free 3-Day Pass' to register.",
  },
  {
    question: "Is car and bike parking available at the gym?",
    answer: "Yes, we have a dedicated, secure parking zone for both cars and bikes directly in front of the gym premises. The area is monitored by CCTV 24/7 at no extra cost to members.",
  },
  {
    question: "How does the AI Meal Planner work?",
    answer: "The AI Meal Planner is a value-added feature built into our website. It computes your custom sports-nutrition daily targets (BMR/TDEE) and communicates directly with the Gemini API to output a structured 1-day Indian food menu fitting your exact macros.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-pad" style={{ borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        
        {/* Section Divider Line */}
        <div className="section-divider">
          <div className="section-divider-line" />
          <span className="section-divider-text">QUESTIONS</span>
          <div className="section-divider-line" />
        </div>

        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <span className="mono-badge" style={{ background: "#000000", color: "#ffffff", border: "none", marginBottom: 12 }}>
            GET CLARITY
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
            Frequently Asked
            <br />
            Questions
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: 12,
                  overflow: "hidden",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.01)",
                  transition: "border-color 0.2s ease",
                }}
              >
                {/* Header / Click trigger */}
                <button
                  onClick={() => toggleFaq(index)}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "20px 24px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    gap: 16,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontWeight: 700,
                      fontSize: 16,
                      color: "var(--fg)",
                    }}
                  >
                    {faq.question}
                  </span>
                  
                  {/* Expand/Collapse sign */}
                  <motion.div
                    animate={{ rotate: isOpen ? 135 : 0 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      color: "var(--fg)",
                      fontSize: 20,
                      fontWeight: 300,
                      lineHeight: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 24,
                      height: 24,
                    }}
                  >
                    +
                  </motion.div>
                </button>

                {/* Answer content (animated expand) */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div
                        style={{
                          padding: "0 24px 20px 24px",
                          fontFamily: "var(--font-sans)",
                          fontSize: 14,
                          color: "var(--fg-dim)",
                          lineHeight: 1.6,
                        }}
                      >
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

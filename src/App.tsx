import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "./components/Hero";
import PricingSection from "./components/PricingSection";
import FeaturesSection from "./components/FeaturesSection";
import StatsSection from "./components/StatsSection";
import NutritionCalculator from "./components/NutritionCalculator";
import LocationSection from "./components/LocationSection";
import Footer from "./components/Footer";
import TrainersSection from "./components/TrainersSection";
import PersonalTraining from "./components/PersonalTraining";

interface NavbarProps {
  view: "home" | "pt";
  setView: (v: "home" | "pt") => void;
}

function Navbar({ view, setView }: NavbarProps) {
  return (
    <div
      style={{
        position: "fixed",
        top: 24,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 12,
        zIndex: 100,
        padding: "0 16px",
      }}
    >
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          background: "rgba(45, 45, 45, 0.88)",
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          borderRadius: 8,
          padding: "6px 12px 6px 6px",
          display: "flex",
          alignItems: "center",
          gap: 16,
          boxShadow: "0 12px 32px rgba(0, 0, 0, 0.2)",
          height: 44,
        }}
      >
        <motion.a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setView("home");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            width: 32,
            height: 32,
            background: "#ffffff",
            borderRadius: 6,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontWeight: 700,
              fontSize: 15,
              color: "#000000",
              letterSpacing: "-0.05em",
            }}
          >
            MF
          </span>
        </motion.a>

        <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
          <a
            href="#plans"
            onClick={(e) => {
              if (view !== "home") {
                setView("home");
                setTimeout(() => {
                  document.getElementById("plans")?.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }
            }}
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 12,
              fontWeight: 600,
              color: view === "home" ? "#ffffff" : "rgba(255, 255, 255, 0.6)",
              textDecoration: "none",
              letterSpacing: "0.02em",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.opacity = "0.8")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = "1")}
          >
            Plans
          </a>
          <a
            href="#trainers"
            onClick={(e) => {
              if (view !== "home") {
                setView("home");
                setTimeout(() => {
                  document.getElementById("trainers")?.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }
            }}
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 12,
              fontWeight: 600,
              color: view === "home" ? "#ffffff" : "rgba(255, 255, 255, 0.6)",
              textDecoration: "none",
              letterSpacing: "0.02em",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.opacity = "0.8")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = "1")}
          >
            Coaches
          </a>
          <a
            href="#pt"
            onClick={(e) => {
              e.preventDefault();
              setView("pt");
            }}
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 12,
              fontWeight: 600,
              color: view === "pt" ? "#ffffff" : "rgba(255, 255, 255, 0.6)",
              textDecoration: "none",
              letterSpacing: "0.02em",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.opacity = "0.8")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = "1")}
          >
            Elite PT
          </a>
        </div>

        <motion.div
          whileHover={{ scale: 1.08 }}
          onClick={() => {
            setView("home");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          style={{
            color: "#ffffff",
            opacity: 0.7,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            paddingLeft: 4,
          }}
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
            <rect x="1" y="1" width="6" height="6" rx="1.5" />
            <rect x="9" y="1" width="6" height="6" rx="1.5" />
            <rect x="1" y="9" width="6" height="6" rx="1.5" />
            <rect x="9" y="9" width="6" height="6" rx="1.5" />
          </svg>
        </motion.div>
      </motion.nav>

      <motion.a
        href="#plans"
        onClick={(e) => {
          if (view !== "home") {
            setView("home");
            setTimeout(() => {
              document.getElementById("plans")?.scrollIntoView({ behavior: "smooth" });
            }, 100);
          }
        }}
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        whileHover={{ scale: 1.05, background: "rgba(60, 60, 62, 0.95)" }}
        whileTap={{ scale: 0.95 }}
        style={{
          width: 44,
          height: 44,
          background: "rgba(45, 45, 45, 0.88)",
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          borderRadius: 8,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#ffffff",
          boxShadow: "0 12px 32px rgba(0, 0, 0, 0.2)",
          cursor: "pointer",
          textDecoration: "none",
        }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
      </motion.a>
    </div>
  );
}

export default function App() {
  const [view, setView] = useState<"home" | "pt">("home");

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar view={view} setView={setView} />
      
      <div style={{ flexGrow: 1 }}>
        <AnimatePresence mode="wait">
          {view === "home" ? (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Hero />
              <StatsSection />
              <FeaturesSection />
              <PricingSection onNavigateToPT={() => setView("pt")} />
              <TrainersSection />
              <NutritionCalculator />
            </motion.div>
          ) : (
            <motion.div
              key="pt"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <PersonalTraining onBack={() => setView("home")} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <LocationSection />
      <Footer />
    </div>
  );
}

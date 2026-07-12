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
import FaqSection from "./components/FaqSection";
import EquipmentShowcase from "./components/EquipmentShowcase";

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
            href="#transformations"
            onClick={(e) => {
              if (view !== "home") {
                setView("home");
                setTimeout(() => {
                  document.getElementById("transformations")?.scrollIntoView({ behavior: "smooth" });
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
            Results
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
      </motion.nav>
    </div>
  );
}

export default function App() {
  const [view, setView] = useState<"home" | "pt">("home");
  const [isDark, setIsDark] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

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
              <FeaturesSection />
              <StatsSection />
              <TrainersSection />
              <EquipmentShowcase />
              <PricingSection onNavigateToPT={() => setView("pt")} />
              <FaqSection />
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

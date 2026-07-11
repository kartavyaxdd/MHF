import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Hero from "./components/Hero";
import PricingSection from "./components/PricingSection";
import FeaturesSection from "./components/FeaturesSection";
import StatsSection from "./components/StatsSection";
import NutritionCalculator from "./components/NutritionCalculator";
import LocationSection from "./components/LocationSection";
import Footer from "./components/Footer";

function Navbar() {
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
      {/* Main Pill Navbar */}
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
        {/* White Logo Square */}
        <motion.a
          href="#"
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

        {/* Links */}
        <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
          <a
            href="#plans"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 12,
              fontWeight: 600,
              color: "#ffffff",
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
            href="#transformations"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 12,
              fontWeight: 600,
              color: "#ffffff",
              textDecoration: "none",
              letterSpacing: "0.02em",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.opacity = "0.8")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = "1")}
          >
            Transformations
          </a>
        </div>

        {/* Grid Icon */}
        <motion.div
          whileHover={{ scale: 1.08 }}
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

      {/* Standalone Shopping Bag Pill */}
      <motion.a
        href="#plans"
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
  return (
    <div style={{ minHeight: "100vh" }}>
      <Navbar />
      <Hero />
      <StatsSection />
      <NutritionCalculator />
      <FeaturesSection />
      <PricingSection />
      <LocationSection />
      <Footer />
    </div>
  );
}

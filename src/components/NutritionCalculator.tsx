import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function NutritionCalculator() {
  // Input states
  const [gender, setGender] = useState<"male" | "female">("male");
  const [weight, setWeight] = useState(70); // in kg
  const [height, setHeight] = useState(170); // in cm
  const [age, setAge] = useState(25);
  const [activity, setActivity] = useState<"sedentary" | "light" | "moderate" | "active">("moderate");
  const [goal, setGoal] = useState<"lose" | "maintain" | "gain">("lose");
  const [diet, setDiet] = useState<"veg" | "non-veg" | "vegan" | "eggitarian">("non-veg");

  // API Key management
  const [apiKey, setApiKey] = useState(() => localStorage.getItem("gemini_api_key") || "");
  const [showKeyInput, setShowKeyInput] = useState(false);

  // Gemini state
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [mealPlan, setMealPlan] = useState("");

  // Target values
  const [calories, setCalories] = useState(2000);
  const [protein, setProtein] = useState(150);
  const [fats, setFats] = useState(55);
  const [carbs, setCarbs] = useState(200);

  // Recalculate daily targets on input change
  useEffect(() => {
    // 1. Calculate BMR (Mifflin-St Jeor)
    let bmr = 0;
    if (gender === "male") {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    // 2. Adjust for Activity Multiplier
    const multipliers = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
    };
    const tdee = bmr * multipliers[activity];

    // 3. Goal adjustment
    let targetCals = tdee;
    if (goal === "lose") targetCals = tdee - 500;
    else if (goal === "gain") targetCals = tdee + 300;

    targetCals = Math.max(1200, Math.round(targetCals));

    // 4. Science-Backed Macros
    // Protein: 2.2g per kg of bodyweight
    const targetProtein = Math.round(weight * 2.2);
    const proteinCals = targetProtein * 4;

    // Fats: 25% of total calories
    const fatCals = targetCals * 0.25;
    const targetFats = Math.round(fatCals / 9);

    // Carbs: Remainder
    const carbCals = Math.max(0, targetCals - (proteinCals + fatCals));
    const targetCarbs = Math.round(carbCals / 4);

    setCalories(targetCals);
    setProtein(targetProtein);
    setFats(targetFats);
    setCarbs(targetCarbs);
  }, [gender, weight, height, age, activity, goal]);

  // Save API key
  const saveApiKey = (key: string) => {
    setApiKey(key);
    localStorage.setItem("gemini_api_key", key.trim());
  };

  // Trigger Gemini API Meal Plan Generation
  const generateMealPlan = async () => {
    if (!apiKey) {
      setError("Please add a Gemini API Key under 'AI Settings' to generate custom meals.");
      return;
    }

    setLoading(true);
    setError("");
    setMealPlan("");

    const prompt = `You are an elite sports nutritionist and coach. Create a science-based 1-day meal plan for a client with the following daily targets:
- Goal: ${goal === "lose" ? "Fat Loss" : goal === "gain" ? "Muscle Gain" : "Maintenance"}
- Diet Preference: ${diet === "veg" ? "Pure Vegetarian" : diet === "non-veg" ? "Non-Vegetarian" : diet === "vegan" ? "Vegan" : "Eggitarian"}
- Calorie Target: ${calories} kcal
- Protein Target: ${protein}g
- Fat Target: ${fats}g
- Carb Target: ${carbs}g

Provide the meal plan divided into:
1. Breakfast
2. Lunch
3. Pre/Post Workout Fuel
4. Dinner

Rules:
- For each meal, specify local Indian food items/options (since the client is in India) and include precise portion sizes (e.g. "2 roti", "150g Paneer").
- Include a quick breakdown of calories & macros for EACH meal.
- Ensure the sum of macros is close to the daily targets.
- Format the response in clear, concise markdown text without wrapping in html tags or \`\`\`json.`;

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-goog-api-key": apiKey.trim(),
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: prompt,
                  },
                ],
              },
            ],
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`API returned status ${response.status}. Make sure your API key is valid.`);
      }

      const data = await response.json();
      const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!generatedText) {
        throw new Error("Empty response received from Gemini.");
      }

      setMealPlan(generatedText);
    } catch (err: any) {
      setError(err.message || "An error occurred while generating the meal plan.");
    } finally {
      setLoading(false);
    }
  };

  // Provide a sample plan if no key / as fallback
  const loadSamplePlan = () => {
    setError("");
    const sample = `### 🍳 Breakfast (Approx: 450 kcal | 35g P | 48g C | 12g F)
- **Oats & Whey Porridge**: 50g rolled oats cooked in water, mixed with 1 scoop of whey protein (30g) and topped with 10g almonds.
- **Banana**: 1 medium size banana.
- **Green Tea**: 1 cup (antioxidants).

### 🍛 Lunch (Approx: 620 kcal | 42g P | 70g C | 18g F)
- **High-Protein Soya/Paneer Bowl**: 120g low-fat Paneer or Soya chunks cooked with spices and tomatoes.
- **Boiled Basmati Rice**: 150g (cooked weight).
- **Mixed Dal**: 1 bowl (70g cooked).
- **Cucumber & Tomato Salad**: 1 plate.

### 🍌 Post-Workout Fuel (Approx: 320 kcal | 30g P | 45g C | 4g F)
- **Egg White Scramble**: 6 egg whites cooked in 1 tsp olive oil with onions.
- **Whole Wheat Toast**: 2 slices.
- **Isolate Protein Shake**: 1 scoop mixed in cold water.

### 🍗 Dinner (Approx: 610 kcal | 45g P | 37g C | 21g F)
- **Grilled Chicken Breast (or Tofu for Veg)**: 180g marinated in garlic-herb paste and grilled.
- **Roti**: 2 whole wheat rotis.
- **Steamed Broccoli & Carrot**: 100g.
- **Tablespoon of Seeds (Flax/Pumpkin)**: 10g (healthy fats).`;
    setMealPlan(sample);
  };

  return (
    <section id="calculator" className="section-pad" style={{ borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        
        {/* Custom Header Section */}
        <div className="section-divider">
          <div className="section-divider-line" />
          <span className="section-divider-text">AI NUTRITION LAB</span>
          <div className="section-divider-line" />
        </div>

        <div className="location-grid" style={{ gap: 40, alignItems: "start" }}>
          
          {/* Left Column: Calculator Parameters */}
          <div
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: 12,
              padding: "24px 32px",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.02)",
            }}
          >
            <span className="mono-badge" style={{ background: "#000000", color: "#ffffff", border: "none", marginBottom: 12 }}>
              SCIENCE-BACKED CALCULATOR
            </span>
            <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 800, fontSize: 24, margin: "8px 0 24px", color: "var(--fg)" }}>
              Calculate Your Daily Targets
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              
              {/* Gender selector */}
              <div>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: 700, color: "var(--fg-dim)", display: "block", marginBottom: 8 }}>
                  BIOLOGICAL GENDER:
                </span>
                <div style={{ display: "flex", gap: 8 }}>
                  <button
                    onClick={() => setGender("male")}
                    className={gender === "male" ? "pill-button" : "pill-button-secondary"}
                    style={{ padding: "6px 20px", fontSize: 11 }}
                  >
                    Male
                  </button>
                  <button
                    onClick={() => setGender("female")}
                    className={gender === "female" ? "pill-button" : "pill-button-secondary"}
                    style={{ padding: "6px 20px", fontSize: 11 }}
                  >
                    Female
                  </button>
                </div>
              </div>

              {/* Weight input slider */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: 700, color: "var(--fg-dim)" }}>
                    WEIGHT:
                  </span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700, color: "var(--fg)" }}>
                    {weight} KG
                  </span>
                </div>
                <input
                  type="range"
                  min="40"
                  max="160"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  style={{ width: "100%", accentColor: "#000000", cursor: "pointer" }}
                />
              </div>

              {/* Height input slider */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: 700, color: "var(--fg-dim)" }}>
                    HEIGHT:
                  </span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700, color: "var(--fg)" }}>
                    {height} CM
                  </span>
                </div>
                <input
                  type="range"
                  min="120"
                  max="220"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  style={{ width: "100%", accentColor: "#000000", cursor: "pointer" }}
                />
              </div>

              {/* Age input slider */}
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: 700, color: "var(--fg-dim)" }}>
                    AGE:
                  </span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700, color: "var(--fg)" }}>
                    {age} YEARS
                  </span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="80"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  style={{ width: "100%", accentColor: "#000000", cursor: "pointer" }}
                />
              </div>

              {/* Activity Level Selector */}
              <div>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: 700, color: "var(--fg-dim)", display: "block", marginBottom: 8 }}>
                  ACTIVITY PROFILE:
                </span>
                <select
                  value={activity}
                  onChange={(e) => setActivity(e.target.value as any)}
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: 6,
                    border: "1px solid var(--border)",
                    fontFamily: "var(--font-sans)",
                    fontSize: 13,
                    background: "#ffffff",
                    color: "var(--fg)",
                    outline: "none",
                  }}
                >
                  <option value="sedentary">Sedentary (Office job, minimal activity)</option>
                  <option value="light">Lightly Active (1-3 days gym workouts/week)</option>
                  <option value="moderate">Moderately Active (3-5 days heavy lifting/week)</option>
                  <option value="active">Very Active (6-7 days intense workouts/week)</option>
                </select>
              </div>

              {/* Target Goal Selector */}
              <div>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: 700, color: "var(--fg-dim)", display: "block", marginBottom: 8 }}>
                  PRIMARY FITNESS GOAL:
                </span>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  <button
                    onClick={() => setGoal("lose")}
                    className={goal === "lose" ? "pill-button" : "pill-button-secondary"}
                    style={{ padding: "6px 14px", fontSize: 11 }}
                  >
                    Lose Fat
                  </button>
                  <button
                    onClick={() => setGoal("maintain")}
                    className={goal === "maintain" ? "pill-button" : "pill-button-secondary"}
                    style={{ padding: "6px 14px", fontSize: 11 }}
                  >
                    Maintenance
                  </button>
                  <button
                    onClick={() => setGoal("gain")}
                    className={goal === "gain" ? "pill-button" : "pill-button-secondary"}
                    style={{ padding: "6px 14px", fontSize: 11 }}
                  >
                    Gain Muscle
                  </button>
                </div>
              </div>

              {/* Diet Preference Selector */}
              <div>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: 700, color: "var(--fg-dim)", display: "block", marginBottom: 8 }}>
                  DIETARY STYLE:
                </span>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  <button
                    onClick={() => setDiet("non-veg")}
                    className={diet === "non-veg" ? "pill-button" : "pill-button-secondary"}
                    style={{ padding: "6px 12px", fontSize: 11 }}
                  >
                    Non-Veg
                  </button>
                  <button
                    onClick={() => setDiet("veg")}
                    className={diet === "veg" ? "pill-button" : "pill-button-secondary"}
                    style={{ padding: "6px 12px", fontSize: 11 }}
                  >
                    Veg
                  </button>
                  <button
                    onClick={() => setDiet("eggitarian")}
                    className={diet === "eggitarian" ? "pill-button" : "pill-button-secondary"}
                    style={{ padding: "6px 12px", fontSize: 11 }}
                  >
                    Eggitarian
                  </button>
                  <button
                    onClick={() => setDiet("vegan")}
                    className={diet === "vegan" ? "pill-button" : "pill-button-secondary"}
                    style={{ padding: "6px 12px", fontSize: 11 }}
                  >
                    Vegan
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Calculations & AI Generator */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            
            {/* Target Card */}
            <div
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: 12,
                padding: "24px 32px",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.02)",
              }}
            >
              <span className="mono-badge" style={{ background: "#000000", color: "#ffffff", border: "none", marginBottom: 12 }}>
                BIOMETRIC TARGETS
              </span>
              <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 800, fontSize: 24, margin: "8px 0 16px", color: "var(--fg)" }}>
                Your Target Macro Profile
              </h3>

              {/* Calorie Readout */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", paddingBottom: 16, borderBottom: "1px solid var(--border)", marginBottom: 16 }}>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 700, color: "var(--fg-dim)" }}>
                  Daily Calories
                </span>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: 32, fontWeight: 900, color: "var(--fg)", letterSpacing: "-0.04em" }}>
                  {calories} <span style={{ fontSize: 15, fontWeight: 700, color: "var(--fg-dim)" }}>kcal</span>
                </span>
              </div>

              {/* Macro Bars */}
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {/* Protein */}
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: 700, marginBottom: 4 }}>
                    <span style={{ color: "var(--fg)" }}>PROTEIN (2.2g/kg)</span>
                    <span>{protein}G</span>
                  </div>
                  <div style={{ height: 6, background: "rgba(0,0,0,0.06)", borderRadius: 999 }}>
                    <div style={{ height: "100%", background: "#000000", borderRadius: 999, width: `${Math.min(100, (protein / 200) * 100)}%` }} />
                  </div>
                </div>

                {/* Carbs */}
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: 700, marginBottom: 4 }}>
                    <span style={{ color: "var(--fg)" }}>CARBOHYDRATES</span>
                    <span>{carbs}G</span>
                  </div>
                  <div style={{ height: 6, background: "rgba(0,0,0,0.06)", borderRadius: 999 }}>
                    <div style={{ height: "100%", background: "#666666", borderRadius: 999, width: `${Math.min(100, (carbs / 350) * 100)}%` }} />
                  </div>
                </div>

                {/* Fats */}
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: 700, marginBottom: 4 }}>
                    <span style={{ color: "var(--fg)" }}>FATS</span>
                    <span>{fats}G</span>
                  </div>
                  <div style={{ height: 6, background: "rgba(0,0,0,0.06)", borderRadius: 999 }}>
                    <div style={{ height: "100%", background: "#999999", borderRadius: 999, width: `${Math.min(100, (fats / 100) * 100)}%` }} />
                  </div>
                </div>
              </div>
            </div>

            {/* AI Generator Card */}
            <div
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: 12,
                padding: "24px 32px",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.02)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                <span className="mono-badge" style={{ background: "#000000", color: "#ffffff", border: "none" }}>
                  AI MEAL PLAN GENERATOR
                </span>
                <button
                  onClick={() => setShowKeyInput(!showKeyInput)}
                  style={{
                    background: "none",
                    border: "none",
                    fontFamily: "var(--font-mono)",
                    fontSize: 9,
                    fontWeight: 700,
                    color: "var(--fg-dim)",
                    cursor: "pointer",
                    textDecoration: "underline",
                  }}
                >
                  {showKeyInput ? "HIDE SETTINGS" : "AI SETTINGS"}
                </button>
              </div>

              <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 800, fontSize: 24, margin: "4px 0 16px", color: "var(--fg)" }}>
                Generate Custom Meal Blueprint
              </h3>

              {/* Collapsible Key input settings */}
              <AnimatePresence>
                {showKeyInput && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    style={{ overflow: "hidden", marginBottom: 16 }}
                  >
                    <div
                      style={{
                        background: "rgba(0,0,0,0.03)",
                        border: "1px solid var(--border)",
                        padding: 14,
                        borderRadius: 8,
                        display: "flex",
                        flexDirection: "column",
                        gap: 8,
                      }}
                    >
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, fontWeight: 700, color: "var(--fg-dim)" }}>
                          PASTE GEMINI API KEY:
                        </span>
                        <a
                          href="https://aistudio.google.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ fontFamily: "var(--font-mono)", fontSize: 9, fontWeight: 700, color: "#666" }}
                        >
                          Get Free Key ↗
                        </a>
                      </div>
                      <input
                        type="password"
                        placeholder="AIzaSy..."
                        value={apiKey}
                        onChange={(e) => saveApiKey(e.target.value)}
                        style={{
                          width: "100%",
                          padding: "8px",
                          borderRadius: 4,
                          border: "1px solid var(--border)",
                          fontSize: 12,
                          outline: "none",
                        }}
                      />
                      <span style={{ fontFamily: "var(--font-sans)", fontSize: 10, color: "var(--fg-dim)", lineHeight: 1.3 }}>
                        Your key is saved locally in your own browser storage. It is never sent to our servers.
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Action buttons */}
              <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
                <button
                  onClick={generateMealPlan}
                  disabled={loading}
                  className="pill-button"
                  style={{ padding: "10px 24px", fontSize: 12, cursor: loading ? "not-allowed" : "pointer" }}
                >
                  {loading ? "CONSULTING AI..." : "GENERATE AI PLAN"}
                </button>
                <button
                  onClick={loadSamplePlan}
                  className="pill-button-secondary"
                  style={{ padding: "10px 20px", fontSize: 12 }}
                >
                  VIEW SAMPLE PLAN
                </button>
              </div>

              {/* Error readout */}
              {error && (
                <div
                  style={{
                    background: "rgba(255, 59, 48, 0.05)",
                    border: "1px solid rgba(255, 59, 48, 0.2)",
                    borderRadius: 6,
                    padding: 12,
                    color: "#ff3b30",
                    fontFamily: "var(--font-sans)",
                    fontSize: 12,
                    marginBottom: 16,
                    lineHeight: 1.4,
                  }}
                >
                  <strong>API Error: </strong> {error}
                </div>
              )}

              {/* Generated text preview panel */}
              {mealPlan && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    background: "#0c0c0c",
                    border: "1px solid #1a1a1a",
                    borderRadius: 8,
                    padding: "20px 24px",
                    color: "#eaeaea",
                    maxHeight: 380,
                    overflowY: "auto",
                    boxShadow: "inset 0 4px 16px rgba(0,0,0,0.5)",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #222", paddingBottom: 10, marginBottom: 14 }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, fontWeight: 700, color: "rgba(255,255,255,0.4)" }}>
                      OUTPUT_DATA.MD
                    </span>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(mealPlan);
                        alert("Copied meal plan to clipboard!");
                      }}
                      style={{
                        background: "rgba(255,255,255,0.1)",
                        color: "#fff",
                        border: "none",
                        borderRadius: 4,
                        fontFamily: "var(--font-mono)",
                        fontSize: 9,
                        fontWeight: 700,
                        padding: "3px 8px",
                        cursor: "pointer",
                      }}
                    >
                      COPY TEXT
                    </button>
                  </div>

                  <div
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 13,
                      lineHeight: 1.6,
                      whiteSpace: "pre-line",
                    }}
                  >
                    {mealPlan}
                  </div>
                </motion.div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

# Mahakal Fitness 🏋️‍♂️

A premium, conversion-optimized, science-based gym landing page designed after the technical visual aesthetic of [jeffnippard.com](https://jeffnippard.com/). 

Built for **Mahakal Fitness** (located in Meerut, India) to drive new member acquisition, featuring a light-theme dot-grid layout, monospaced tech typography, and an interactive AI Nutrition planner.

---

## 🎨 Design & Aesthetic Features

*   **Floating Dark Navigation**: A glassmorphic dark pill navbar (`backdrop-filter: blur(16px)`) with a standalone floating shopping cart indicator.
*   **Blueprint Dot-Grid Background**: A clean, radial dot-grid matrix background pattern for a technical, scientific weightlifting vibe.
*   **CRO-Optimized Copywriting**: Employs industry-standard copywriting hooks (AIDA framework, risk reversal, friction reduction) to drive member registrations.
*   **Meerut Credibility Metrics**: Highlighting local gym achievements (1,200+ members, 98.4% success rate).
*   **Before/After Transformation Slider**: Interactive carousel displaying physical body transformations with detailed state transitions.
*   **Friction-Reducing Location & Directions**: Integrates the gym's official Google Maps location directly.

---

## 🧪 Interactive AI Nutrition Lab

Includes a built-in **Biometric Calorie & Macro Calculator** paired with a client-side **Gemini AI Meal Planner**:
*   **Biometric Targets**: Calculates custom BMR (using the **Mifflin-St Jeor** equation) and TDEE based on age, gender, weight, height, activity profile, and goals.
*   **Sports Nutrition Macro Splits**: Targets high-protein ratios ($2.2$g per kg of bodyweight) and calculates precise protein/carbohydrate/fat targets.
*   **Gemini Meal Plan Generator**: Prompts the `gemini-2.5-flash` model to return a structured 1-day meal plan with Indian dietary preferences (Veg, Non-Veg, Eggitarian, Vegan) matching the exact biometric macros.
*   **Local Storage Key Management**: Securely saves the user's Gemini API key in local browser storage, ensuring it never leaks to the public repository.

---

## 🛠️ Technology Stack

*   **Core Framework**: [React](https://react.dev/) + [Vite](https://vite.dev/)
*   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
*   **Animations**: [Framer Motion](https://www.framer.com/motion/)
*   **Model Queries**: Client-side Fetch request to the **Google Gemini API** (using the new `x-goog-api-key` header configuration).

---

## 🚀 Getting Started

### Prerequisites
Make sure you have Node.js installed on your machine.

### Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/kartavyaxdd/MHF.git
   cd MHF
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the local development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:8443](http://localhost:8443) in your browser.

---

## 🔑 Configure Gemini AI Meal Planner
1. Go to [Google AI Studio](https://aistudio.google.com/) and create a free Gemini API key.
2. In the landing page's **AI Nutrition Lab** card, click **AI Settings**.
3. Paste your key. The key will be saved locally inside your browser cache and is ready to generate custom meal blueprints instantly!

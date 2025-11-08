# Navigation

Perfect — let’s design the **MVP navigation layer for MindLoop**.

We’ll take the same disciplined approach we used for _Stretch_: small surface area, maximum engagement, clear habit loop.

---

# **🧭**

# **MindLoop MVP Navigation Overview**

> Goal:

So your MVP should have just **3 core tabs + 1 persistent header (HUD)**.

That’s it.

Everything else (social, search, discovery) can come later.

---

## **🧩**

## **Top-Level Navigation (3 Tabs)**

```
----------------------------------------
| Learn | Recall | Profile |
----------------------------------------
```

---

### **🧠**

### **1️⃣ Learn Tab (Home / Today)**

**Purpose:** Deliver daily learning content and quick wins.

**Contains:**

- **Today’s Insights:** 3 bite-sized ideas from user’s subscribed topics
- **“Start Session” CTA:** Begins interactive reading + micro-quiz
- **Progress Bar:** “3/3 insights completed today”
- **End of Session Reflection:** Quick question → “Where could you apply this?”

**User Flow:**

1. Opens app → sees today’s lessons.
2. Reads / interacts with each insight.
3. Completes 1–2 recall questions.
4. Gains XP, streak, and gems.

🎯 _Goal:_ Deliver the “aha” + dopamine moment within 60 seconds.

**Design Feel:**

Calm but focused — like a Duolingo + Calm hybrid.

Subtle progress animations (not noisy).

---

### **🔁**

### **2️⃣ Recall Tab (Memory Practice)**

**Purpose:** Reinforce retention using **spaced repetition** and **active recall.**

**Contains:**

- **Smart Review Queue:** Algorithmically resurfaced cards based on forgetting curve.
- **Flashcard or Quiz Mode:** “What’s the key idea behind [concept]?”
- **Feedback:** Immediate reinforcement → “Nice recall!” or “Here’s a quick refresh.”
- **Streak XP Bar:** Reflects recall accuracy, not just completion.

**User Flow:**

1. Enters Recall mode.
2. Answers 5–10 resurfaced questions.
3. Earns XP + Gems for high accuracy.

🧩 _Behavioral Design:_

This is where retention _sticks._

The recall session should be short, gamified, and frictionless — 2 minutes max.

---

### **👤**

### **3️⃣ Profile Tab (Progress & Upgrade)**

**Purpose:** Reinforce identity, show growth, and softly monetize.

**Contains:**

- **Level, XP, Streak stats**
- **“Knowledge Vault” view:** shows all topics + retention %
- **Upgrade card:** “Unlock advanced recall and analytics with MindLoop+”
- **Settings & account management**

**User Flow:**

- Check memory stats → feel progress.
- Tap a locked feature (e.g., retention analytics) → upgrade prompt.

💎 _Conversion moment:_ You’re not selling _more content_, you’re selling _deeper mastery_.

---

## **🧱**

## **Persistent Header (HUD)**

Across all tabs, display a **compact feedback bar:**

```
Lvl 5   🔥 6d   💎 120   🧩 87%
```

| **Icon**        | **Meaning**                                       |
| --------------- | ------------------------------------------------- |
| **Lvl**         | Current knowledge mastery level                   |
| **🔥 Streak**   | Consecutive learning days                         |
| **💎 Gems**     | Soft currency for themes or boosts                |
| **🧩 Accuracy** | Recall accuracy (keeps focus on learning quality) |

💡 _Design tip:_ Animate level-up subtly; don’t distract from reading.

---

## **🔄**

## **4. Core MVP Flow**

```
Launch App
   ↓
Learn Tab → Complete Insight + Quiz → Earn XP
   ↓
Recall Tab → Review resurfaced items → Strengthen memory
   ↓
Profile Tab → See stats + progress → Motivated to upgrade
   ↺ (Repeat Daily)
```

🎯 _Outcome:_ User sees tangible memory growth → increased attachment → higher upgrade rate.

---

## **⚙️**

## **5. MVP Feature Scope**

| **Feature**        | **Tab** | **MVP Version**          | **Later Version**        |
| ------------------ | ------- | ------------------------ | ------------------------ |
| Daily Insights     | Learn   | Curated static set       | Personalized feed        |
| Recall Sessions    | Recall  | Simple spaced repetition | Adaptive algorithm       |
| Progress Stats     | Profile | Level + streak           | Topic-level analytics    |
| Gems               | HUD     | Earn from recall streaks | Cosmetic store           |
| Reflection Prompts | Learn   | Short text               | Journaling expansion     |
| Upgrade Flow       | Profile | Manual paywall card      | Smart contextual upsells |

---

## **🧭**

## **6. Design Principles for MindLoop MVP**

| **Principle**                    | **Description**                                            |
| -------------------------------- | ---------------------------------------------------------- |
| **Action-first learning**        | Users should experience recall _before_ signup or payment. |
| **Short, satisfying sessions**   | Each loop < 2 minutes. Cognitive fluency = retention.      |
| **Visible progress**             | XP + streak + accuracy must be always visible.             |
| **Gentle, aspirational paywall** | Upgrade = “Master your memory,” not “Buy access.”          |
| **Clean & modern**               | Minimal text walls. Bold typography, calm colors.          |

---

## **💰**

## **7. Monetization Hooks (Freemium-Friendly)**

| **Trigger**                | **Context**                                     | **Upgrade Copy**       |
| -------------------------- | ----------------------------------------------- | ---------------------- |
| After finishing 3 insights | “Unlock more daily insights with MindLoop+”     | Curiosity-based        |
| After high recall streak   | “Keep your momentum with advanced recall mode.” | Competence-based       |
| When viewing stats         | “Access detailed memory analytics.”             | Self-improvement-based |

🎯 Conversion happens when users already _feel smart and accomplished._

---

## **🧠**

## **8. MVP Architecture Summary**

| **Layer**       | **Screen**                             | **Core Function**         |
| --------------- | -------------------------------------- | ------------------------- |
| **Learn Tab**   | Daily feed of micro-insights + quizzes | Hook & engagement         |
| **Recall Tab**  | Spaced repetition review               | Retention engine          |
| **Profile Tab** | Stats, streak, paywall                 | Motivation & monetization |
| **HUD**         | Level, streak, accuracy, gems          | Continuous feedback loop  |

---

### **TL;DR —**

### **MindLoop MVP Navigation**

> 3 Tabs + 1 HUD + 1 Core Loop

>

> Learn → Recall → Reflect → Progress

✅ _Feels simple like Duolingo_

✅ _Acts smart like Anki_

✅ _Feels inspiring like Notion or Headspace_

---

Would you like me to design a **visual wireframe of this navigation** — showing tab layout, header HUD, and main content flow?

It’ll give you (and a designer) a clear blueprint for your MVP prototype.

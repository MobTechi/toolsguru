# ToolsGuru

## Overview
ToolsGuru is a cross-platform mobile app built with Ionic and Capacitor, offering a set of handy tools for time management and calculations. Visualize time elegantly, track it accurately, and simplify various calculations effortlessly.

<a href='https://play.google.com/store/apps/details?id=com.mobtechi.toolsguru&pcampaignid=web_share&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/></a>

## Features
1. **Time Tools:**
   - Analog Clock: Elegant time visualization.
   - Digital Clock: Precise digital time readings.
   - Stopwatch: Accurate on-the-fly time tracking.
   - Calendar with 3 Notes per Day (Local): Organize your schedule with personal notes.

2. **Calculation Tools:**
   - Calculator with History (Local): Crunch numbers and save calculations.
   - BMI Calculator: Easily monitor your health.
   - Age Calculator: Instant age calculations.
   - Discount Calculator: Quickly determine discounts.
   - Interest Calculator: Effortless interest calculations.
   - Fuel Calculator: Plan trips by calculating fuel requirements.

## Getting Started
Follow these steps to get ToolsGuru up and running on your local machine.

### Prerequisites
- Node.js
- npm or yarn
- Ionic CLI
- Capacitor CLI

### Installation
1. Clone the repository.
   ```
   git clone https://github.com/MobTechi/ToolsGuru.git
   cd ToolsGuru
   ```

2. Install dependencies.
   ```
   npm install
   ```

3. Add the desired platforms (iOS/Android).
   ```
   npx cap add ios
   npx cap add android
   ```

4. Build the app.
   ```
   ionic build
   ```

5. Copy the built assets to the platforms.
   ```
   npx cap copy
   ```

6. Open the app in your preferred IDE.
   - For iOS: `npx cap open ios`
   - For Android: `npx cap open android`

### Running the App
- Use the standard Ionic commands to run the app on your preferred platform.
  ```
  ionic capacitor run ios
  # or
  ionic capacitor run android
  ```

## Acknowledgments
- Special thanks to the Ionic and Capacitor teams for their incredible frameworks.

Happy coding with ToolsGuru!

# BMI Web App

A modern, responsive Body Mass Index (BMI) calculator built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- **BMI Calculation**: Calculate your BMI based on weight (kg) and height (cm)
- **Color-Coded Results**: Visual feedback with color-coded categories
- **BMI Scale Visualization**: Interactive visual scale showing your BMI position
- **Validation**: Input validation with helpful error messages
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Gradient background, smooth animations, and polished card layout

## BMI Categories

- **Underweight**: BMI < 18.5 (Blue)
- **Normal**: BMI 18.5 - 24.9 (Green)
- **Overweight**: BMI 25.0 - 29.9 (Amber)
- **Obese**: BMI >= 30.0 (Red)

## Tech Stack

- **React 18**: UI library
- **TypeScript**: Type safety
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **Vitest**: Unit testing framework

## Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn/pnpm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will open at `http://localhost:5173`

### Build

```bash
npm run build
```

### Testing

```bash
npm test
```

## Project Structure

```
src/
├── components/
│   ├── BmiForm.tsx       # Input form with validation
│   ├── BmiResult.tsx     # Result display with visualization
│   └── BmiInfo.tsx       # BMI category reference table
├── utils/
│   ├── calculateBmi.ts   # BMI calculation logic
│   ├── validateInput.ts  # Input validation
│   └── __tests__/        # Unit tests
├── types/
│   └── bmi.ts            # TypeScript types and enums
├── App.tsx               # Main app component
├── main.tsx              # Entry point
└── index.css             # Global styles
```

## Notes

BMI is a screening tool and not a diagnostic measure of body fatness or health. Consult a healthcare professional for personalized advice.

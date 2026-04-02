import { BmiCategory, BmiResult } from '../types/bmi';

export function calculateBmi(weightKg: number, heightCm: number): BmiResult {
  const heightM = heightCm / 100;
  const bmiValue = weightKg / (heightM * heightM);

  let category: BmiCategory;
  let color: string;
  let description: string;

  if (bmiValue < 18.5) {
    category = BmiCategory.Underweight;
    color = 'blue';
    description = 'You may need to gain weight';
  } else if (bmiValue < 25) {
    category = BmiCategory.Normal;
    color = 'green';
    description = 'You have a healthy weight';
  } else if (bmiValue < 30) {
    category = BmiCategory.Overweight;
    color = 'amber';
    description = 'You may need to lose weight';
  } else {
    category = BmiCategory.Obese;
    color = 'red';
    description = 'Consult a healthcare professional';
  }

  return {
    value: Math.round(bmiValue * 10) / 10,
    category,
    color,
    description,
  };
}

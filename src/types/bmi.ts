export enum BmiCategory {
  Underweight = 'Underweight',
  Normal = 'Normal',
  Overweight = 'Overweight',
  Obese = 'Obese',
}

export interface BmiResult {
  value: number;
  category: BmiCategory;
  color: string;
  description: string;
}

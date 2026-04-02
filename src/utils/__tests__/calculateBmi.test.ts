import { describe, it, expect } from 'vitest';
import { calculateBmi } from '../calculateBmi';
import { BmiCategory } from '../../types/bmi';

describe('calculateBmi', () => {
  it('should calculate underweight category (BMI < 18.5)', () => {
    const result = calculateBmi(50, 180);
    expect(result.category).toBe(BmiCategory.Underweight);
    expect(result.color).toBe('blue');
    expect(result.value).toBeLessThan(18.5);
  });

  it('should calculate normal category (18.5 <= BMI < 25)', () => {
    const result = calculateBmi(70, 180);
    expect(result.category).toBe(BmiCategory.Normal);
    expect(result.color).toBe('green');
    expect(result.value).toBeGreaterThanOrEqual(18.5);
    expect(result.value).toBeLessThan(25);
  });

  it('should calculate overweight category (25 <= BMI < 30)', () => {
    const result = calculateBmi(85, 180);
    expect(result.category).toBe(BmiCategory.Overweight);
    expect(result.color).toBe('amber');
    expect(result.value).toBeGreaterThanOrEqual(25);
    expect(result.value).toBeLessThan(30);
  });

  it('should calculate obese category (BMI >= 30)', () => {
    const result = calculateBmi(100, 180);
    expect(result.category).toBe(BmiCategory.Obese);
    expect(result.color).toBe('red');
    expect(result.value).toBeGreaterThanOrEqual(30);
  });

  it('should handle boundary value 18.5 (normal category)', () => {
    const result = calculateBmi(53.4, 170);
    expect(result.value).toBeGreaterThanOrEqual(18.4);
    expect(result.value).toBeLessThan(18.6);
    expect(result.category).toBe(BmiCategory.Normal);
  });

  it('should handle boundary value 25 (overweight category)', () => {
    const result = calculateBmi(72.25, 170);
    expect(result.value).toBeGreaterThanOrEqual(24.9);
    expect(result.value).toBeLessThanOrEqual(25.1);
    expect(result.category).toBe(BmiCategory.Overweight);
  });

  it('should handle boundary value 30 (obese category)', () => {
    const result = calculateBmi(86.7, 170);
    expect(result.value).toBeGreaterThanOrEqual(29.9);
    expect(result.value).toBeLessThanOrEqual(30.1);
    expect(result.category).toBe(BmiCategory.Obese);
  });

  it('should round BMI to one decimal place', () => {
    const result = calculateBmi(75.555, 180.5);
    expect(result.value % 1).toBeLessThanOrEqual(0.1);
    expect(String(result.value).split('.')[1]?.length || 0).toBeLessThanOrEqual(1);
  });

  it('should handle very low weight', () => {
    const result = calculateBmi(1, 180);
    expect(result.category).toBe(BmiCategory.Underweight);
  });

  it('should handle very high weight', () => {
    const result = calculateBmi(500, 180);
    expect(result.category).toBe(BmiCategory.Obese);
  });

  it('should handle very tall height', () => {
    const result = calculateBmi(70, 300);
    expect(result.category).toBe(BmiCategory.Underweight);
  });

  it('should handle very short height', () => {
    const result = calculateBmi(70, 30);
    expect(result.category).toBe(BmiCategory.Obese);
  });

  it('should have appropriate descriptions for each category', () => {
    const underweight = calculateBmi(50, 180);
    expect(underweight.description).toBeTruthy();

    const normal = calculateBmi(70, 180);
    expect(normal.description).toBeTruthy();

    const overweight = calculateBmi(85, 180);
    expect(overweight.description).toBeTruthy();

    const obese = calculateBmi(100, 180);
    expect(obese.description).toBeTruthy();
  });
});

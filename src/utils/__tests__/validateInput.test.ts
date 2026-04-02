import { describe, it, expect } from 'vitest';
import { validateWeight, validateHeight, validateInputs } from '../validateInput';

describe('validateWeight', () => {
  it('should return error for empty weight', () => {
    const error = validateWeight('');
    expect(error).toBe('Weight is required');
  });

  it('should return error for non-numeric weight', () => {
    const error = validateWeight('abc');
    expect(error).toBe('Weight is required');
  });

  it('should return error for weight below 1 kg', () => {
    const error = validateWeight('0.5');
    expect(error).toBe('Weight must be between 1 and 500 kg');
  });

  it('should return error for weight above 500 kg', () => {
    const error = validateWeight('501');
    expect(error).toBe('Weight must be between 1 and 500 kg');
  });

  it('should accept valid weight at lower boundary', () => {
    const error = validateWeight('1');
    expect(error).toBeNull();
  });

  it('should accept valid weight at upper boundary', () => {
    const error = validateWeight('500');
    expect(error).toBeNull();
  });

  it('should accept valid weight in middle range', () => {
    const error = validateWeight('70');
    expect(error).toBeNull();
  });

  it('should accept decimal weight values', () => {
    const error = validateWeight('70.5');
    expect(error).toBeNull();
  });
});

describe('validateHeight', () => {
  it('should return error for empty height', () => {
    const error = validateHeight('');
    expect(error).toBe('Height is required');
  });

  it('should return error for non-numeric height', () => {
    const error = validateHeight('xyz');
    expect(error).toBe('Height is required');
  });

  it('should return error for height below 30 cm', () => {
    const error = validateHeight('29');
    expect(error).toBe('Height must be between 30 and 300 cm');
  });

  it('should return error for height above 300 cm', () => {
    const error = validateHeight('301');
    expect(error).toBe('Height must be between 30 and 300 cm');
  });

  it('should accept valid height at lower boundary', () => {
    const error = validateHeight('30');
    expect(error).toBeNull();
  });

  it('should accept valid height at upper boundary', () => {
    const error = validateHeight('300');
    expect(error).toBeNull();
  });

  it('should accept valid height in middle range', () => {
    const error = validateHeight('170');
    expect(error).toBeNull();
  });

  it('should accept decimal height values', () => {
    const error = validateHeight('175.5');
    expect(error).toBeNull();
  });
});

describe('validateInputs', () => {
  it('should return no errors for valid inputs', () => {
    const errors = validateInputs('70', '180');
    expect(errors.weight).toBeNull();
    expect(errors.height).toBeNull();
  });

  it('should return weight error for invalid weight', () => {
    const errors = validateInputs('abc', '180');
    expect(errors.weight).toBeTruthy();
    expect(errors.height).toBeNull();
  });

  it('should return height error for invalid height', () => {
    const errors = validateInputs('70', '999');
    expect(errors.weight).toBeNull();
    expect(errors.height).toBeTruthy();
  });

  it('should return both errors for invalid inputs', () => {
    const errors = validateInputs('abc', '999');
    expect(errors.weight).toBeTruthy();
    expect(errors.height).toBeTruthy();
  });

  it('should return weight error for weight out of range', () => {
    const errors = validateInputs('0.5', '180');
    expect(errors.weight).toBeTruthy();
    expect(errors.height).toBeNull();
  });

  it('should return height error for height out of range', () => {
    const errors = validateInputs('70', '10');
    expect(errors.weight).toBeNull();
    expect(errors.height).toBeTruthy();
  });
});

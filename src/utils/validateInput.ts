export function validateWeight(weight: string): string | null {
  const num = parseFloat(weight);

  if (!weight || isNaN(num)) {
    return 'Weight is required';
  }

  if (num < 1 || num > 500) {
    return 'Weight must be between 1 and 500 kg';
  }

  return null;
}

export function validateHeight(height: string): string | null {
  const num = parseFloat(height);

  if (!height || isNaN(num)) {
    return 'Height is required';
  }

  if (num < 30 || num > 300) {
    return 'Height must be between 30 and 300 cm';
  }

  return null;
}

export function validateInputs(weight: string, height: string): { weight: string | null; height: string | null } {
  return {
    weight: validateWeight(weight),
    height: validateHeight(height),
  };
}

import { useState } from 'react';
import { validateInputs } from '../utils/validateInput';

interface BmiFormProps {
  onSubmit: (weight: number, height: number) => void;
}

export function BmiForm({ onSubmit }: BmiFormProps) {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [errors, setErrors] = useState<{ weight: string | null; height: string | null }>({
    weight: null,
    height: null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateInputs(weight, height);
    setErrors(validationErrors);

    if (!validationErrors.weight && !validationErrors.height) {
      onSubmit(parseFloat(weight), parseFloat(height));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-2">
          Weight (kg)
        </label>
        <input
          id="weight"
          type="number"
          step="0.1"
          value={weight}
          onChange={(e) => {
            setWeight(e.target.value);
            setErrors((prev) => ({ ...prev, weight: null }));
          }}
          placeholder="Enter weight in kilograms"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
        />
        {errors.weight && <p className="text-red-500 text-sm mt-1">{errors.weight}</p>}
      </div>

      <div>
        <label htmlFor="height" className="block text-sm font-medium text-gray-700 mb-2">
          Height (cm)
        </label>
        <input
          id="height"
          type="number"
          step="0.1"
          value={height}
          onChange={(e) => {
            setHeight(e.target.value);
            setErrors((prev) => ({ ...prev, height: null }));
          }}
          placeholder="Enter height in centimeters"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
        />
        {errors.height && <p className="text-red-500 text-sm mt-1">{errors.height}</p>}
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 transition duration-200 shadow-md hover:shadow-lg"
      >
        Calculate BMI
      </button>
    </form>
  );
}

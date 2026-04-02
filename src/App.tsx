import { useState } from 'react';
import { BmiForm } from './components/BmiForm';
import { BmiResult } from './components/BmiResult';
import { BmiInfo } from './components/BmiInfo';
import { calculateBmi } from './utils/calculateBmi';
import { BmiResult as BmiResultType } from './types/bmi';

export default function App() {
  const [result, setResult] = useState<BmiResultType | null>(null);

  const handleCalculate = (weight: number, height: number) => {
    const bmiResult = calculateBmi(weight, height);
    setResult(bmiResult);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4 py-12">
      <div className="w-full max-w-2xl">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">BMI Calculator</h1>
            <p className="text-gray-600">Calculate your Body Mass Index</p>
          </div>

          <BmiForm onSubmit={handleCalculate} />

          {result && (
            <div className="mt-8 animate-fade-in">
              <BmiResult result={result} />
            </div>
          )}

          <BmiInfo />
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

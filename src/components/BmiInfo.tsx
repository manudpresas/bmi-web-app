import { BmiCategory } from '../types/bmi';

const categoryInfo = [
  {
    category: BmiCategory.Underweight,
    range: '< 18.5',
    color: 'bg-blue-50',
    borderColor: 'border-blue-200',
    textColor: 'text-blue-700',
  },
  {
    category: BmiCategory.Normal,
    range: '18.5 - 24.9',
    color: 'bg-green-50',
    borderColor: 'border-green-200',
    textColor: 'text-green-700',
  },
  {
    category: BmiCategory.Overweight,
    range: '25.0 - 29.9',
    color: 'bg-amber-50',
    borderColor: 'border-amber-200',
    textColor: 'text-amber-700',
  },
  {
    category: BmiCategory.Obese,
    range: '>= 30.0',
    color: 'bg-red-50',
    borderColor: 'border-red-200',
    textColor: 'text-red-700',
  },
];

export function BmiInfo() {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">BMI Categories</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {categoryInfo.map((info) => (
          <div key={info.category} className={`${info.color} border ${info.borderColor} rounded-lg p-4`}>
            <p className={`font-semibold ${info.textColor}`}>{info.category}</p>
            <p className="text-gray-600 text-sm">BMI: {info.range}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm text-gray-700">
          <span className="font-semibold text-blue-700">Note:</span> BMI is a screening tool and not a diagnostic measure of
          body fatness or health. Consult a healthcare professional for personalized advice.
        </p>
      </div>
    </div>
  );
}

import { BmiResult as BmiResultType } from '../types/bmi';
import { BmiCategory } from '../types/bmi';

interface BmiResultProps {
  result: BmiResultType;
}

const categoryRanges: Record<BmiCategory, string> = {
  [BmiCategory.Underweight]: '< 18.5',
  [BmiCategory.Normal]: '18.5 - 24.9',
  [BmiCategory.Overweight]: '25.0 - 29.9',
  [BmiCategory.Obese]: '>= 30.0',
};

const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
  blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200' },
  green: { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-200' },
  amber: { bg: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-200' },
  red: { bg: 'bg-red-50', text: 'text-red-600', border: 'border-red-200' },
};

const badgeColorClasses: Record<string, { bg: string; text: string }> = {
  blue: { bg: 'bg-blue-100', text: 'text-blue-800' },
  green: { bg: 'bg-green-100', text: 'text-green-800' },
  amber: { bg: 'bg-amber-100', text: 'text-amber-800' },
  red: { bg: 'bg-red-100', text: 'text-red-800' },
};

const scaleBarColors: Record<string, string> = {
  blue: 'bg-blue-500',
  green: 'bg-green-500',
  amber: 'bg-amber-500',
  red: 'bg-red-500',
};

export function BmiResult({ result }: BmiResultProps) {
  const colorClass = colorClasses[result.color] || colorClasses.blue;
  const badgeColor = badgeColorClasses[result.color] || badgeColorClasses.blue;
  const barColor = scaleBarColors[result.color] || scaleBarColors.blue;

  const getCategoryPosition = (): number => {
    switch (result.category) {
      case BmiCategory.Underweight:
        return 12.5;
      case BmiCategory.Normal:
        return 37.5;
      case BmiCategory.Overweight:
        return 62.5;
      case BmiCategory.Obese:
        return 87.5;
    }
  };

  return (
    <div
      className={`rounded-lg p-6 border ${colorClass.bg} ${colorClass.border} border-2 transition-all duration-300 animate-fade-in`}
    >
      <div className="text-center">
        <h2 className="text-gray-600 text-sm font-medium mb-2">Your BMI</h2>
        <div className={`text-6xl font-bold ${colorClass.text} mb-4`}>{result.value}</div>

        <div className={`inline-block px-4 py-2 rounded-full font-semibold ${badgeColor.bg} ${badgeColor.text} mb-6`}>
          {result.category} ({categoryRanges[result.category]})
        </div>

        <p className="text-gray-700 text-lg mb-6">{result.description}</p>

        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <p className="text-gray-600 text-xs font-medium mb-3 uppercase tracking-wide">BMI Scale</p>
          <div className="relative bg-gray-200 h-3 rounded-full overflow-hidden mb-3">
            <div className="absolute h-full flex pointer-events-none w-full">
              <div className="flex-1 bg-blue-500"></div>
              <div className="flex-1 bg-green-500"></div>
              <div className="flex-1 bg-amber-500"></div>
              <div className="flex-1 bg-red-500"></div>
            </div>
            <div
              className={`absolute top-1/2 -translate-y-1/2 w-0.5 h-6 ${barColor} -translate-x-px`}
              style={{ left: `${getCategoryPosition()}%` }}
            ></div>
          </div>

          <div className="flex justify-between text-xs text-gray-600 font-medium">
            <span>Underweight</span>
            <span>Normal</span>
            <span>Overweight</span>
            <span>Obese</span>
          </div>
        </div>
      </div>
    </div>
  );
}

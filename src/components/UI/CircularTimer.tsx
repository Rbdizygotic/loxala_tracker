import { useEffect, useState } from 'react';

const radius = 70;
const stroke = 12;
const normalizedRadius = radius - stroke / 2;
const circumference = normalizedRadius * 2 * Math.PI;

export default function CircularTimer({ duration = 60 }) {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [percent, setPercent] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        const newTime = prev - 1;
        setPercent((newTime / duration) * 100);
        return newTime;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [duration]);

  const formattedTime = new Date(timeLeft * 1000).toISOString().substr(11, 8);
  const strokeDashoffset =
    timeLeft === duration ? 0 : circumference - (percent / 100) * circumference;

  // Calculate the head circle position
  const angle = (2 * Math.PI * percent) / 100;
  const cx = radius + normalizedRadius * Math.cos(angle - Math.PI / 2);
  const cy = radius + normalizedRadius * Math.sin(angle - Math.PI / 2);

  return (
    <div className="relative w-[140px] h-[140px] flex items-center justify-center">
      <svg
        height={radius * 2}
        width={radius * 2}
        className="absolute top-0 left-0 transform -rotate-90"
      >
        {/* Background track */}
        <circle
          stroke="rgba(255,255,255,0.1)"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />

        <circle
          stroke="url(#gradient)"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />

        <circle cx={cx} cy={cy} r="6" fill="white" />

        <defs>
          <linearGradient id="gradient" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#d16ba5" />
            <stop offset="100%" stopColor="#86a8e7" />
          </linearGradient>
        </defs>
      </svg>

      {/* Timer text */}
      <div className="text-white text-2xl font-semibold z-10">{formattedTime}</div>
    </div>
  );
}

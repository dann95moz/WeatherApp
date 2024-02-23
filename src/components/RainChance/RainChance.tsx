import styles from './RainChange.module.css'

interface CircleProps{
    percentage: number;
}

const Humidity = ({percentage}:CircleProps) => {
    const radius = 52.5;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;
    const showValue= percentage < 30? 'low': percentage<60?'medium':'high'

    return (
        <div className={styles.graph_container}>
            <span className={styles.graph}>{showValue}</span>
            <svg width="80" height="80" viewBox="0 0 140 140">
                <circle
                  stroke="#D9D9D9"
                  fill="none"
                  strokeWidth="10"
                  strokeLinecap="round" 
                  r={radius}
                  cx="70"
                  cy="70"
                />
                <circle
                  stroke="url(#gradient)"
                  fill="none"
                  strokeWidth="10"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round" 
                  r={radius}
                  cx="70"
                  cy="70"
                  transform="rotate(-90 70 70)" 
                />
                <defs>
                  <linearGradient id="gradient" gradientTransform="rotate(90)">
                    <stop offset="0%" stopColor="#3159F1" />
                    <stop offset="100%" stopColor="#9863EB" />
                  </linearGradient>
                </defs>
            </svg>
        </div>
    );
}

export default Humidity

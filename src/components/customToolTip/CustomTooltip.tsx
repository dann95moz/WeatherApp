import { TooltipProps } from "recharts";
import { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent";

export const CustomTooltip: React.FC<TooltipProps<ValueType, NameType>> = ({ active, payload, label }) => {
    const formatHour = (hour: number) => {
        const period = hour < 12 || hour === 24 ? 'AM' : 'PM';
        const hour12 = hour % 12 || 12;
        return `${hour12}:00 ${period}`;
    };

    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{formatHour(Number(label))}</p>
          <p className="intro">{`Temp: ${payload[0].value}°C`}</p>
        </div>
      );
    }
  
    return null;
  };
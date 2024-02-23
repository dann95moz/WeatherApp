import { WindDir } from "../../interfaces/Api/windir";
import styles from './Compass.module.css'

interface Props {
 
    size: number;
    direction: WindDir
}

const Compass = ({size, direction}: Props) => {
    const rotations = {
        'N': 0,
        'NNE': 22.5,
        'NE': 45,
        'ENE': 67.5,
        'E': 90,
        'ESE': 112.5,
        'SE': 135,
        'SSE': 157.5,
        'S': 180,
        'SSW': 202.5,
        'SW': 225,
        'WSW': 247.5,
        'W': 270,
        'WNW': 292.5,
        'NW': 315,
        'NNW': 337.5
    };
    const rotation = rotations[direction] || 0;

    return (
        <div className={styles.compass_container}>
            
            <h6>N</h6>
            <div className={styles.horizontal_container}>
                <h6>W</h6>
        <svg className={styles.circle} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 131 131" fill="none">
            <path d="M131 65.5C131 101.675 101.675 131 65.5 131C29.3253 131 0 101.675 0 65.5C0 29.3253 29.3253 0 65.5 0C101.675 0 131 29.3253 131 65.5ZM10.1525 65.5C10.1525 96.0676 34.9324 120.848 65.5 120.848C96.0676 120.848 120.848 96.0676 120.848 65.5C120.848 34.9324 96.0676 10.1525 65.5 10.1525C34.9324 10.1525 10.1525 34.9324 10.1525 65.5Z" fill="url(#paint0_linear_161_2000)" fillOpacity="0.3"/>
            <defs>
                <linearGradient id="paint0_linear_161_2000" x1="65.5" y1="0" x2="7.77118" y2="87.1483" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#3159F1"/>
                    <stop offset="1" stopColor="#9863EB"/>
                </linearGradient>
            </defs>
            <path transform={`translate(58, 13.5) rotate(${rotation}, 7.5, 51.625)`} d="M6.25 102.412C6.25 103.102 6.80964 103.662 7.5 103.662C8.19036 103.662 8.75 103.102 8.75 102.412H6.25ZM7.5 0.588229L0.283121 13.0882H14.7169L7.5 0.588229ZM8.75 102.412L8.75 11.8382H6.25L6.25 102.412H8.75Z" fill="#6E24F3"/>
        </svg>
        <h6>E</h6>
        </div>
        <h6>S</h6>
        
        </div>
    );
}

export default Compass;

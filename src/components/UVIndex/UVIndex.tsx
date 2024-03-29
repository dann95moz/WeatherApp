import styles from './UVIndex.module.css'
interface UVProps{
  index:number
}
const UVIndex = ({index}:UVProps) => {
  const indexLevels = [
    { max: 2, value: 'very low' },
    { max: 6, value: 'low' },
    { max: 8, value: 'moderate' },
    { max: 11, value: 'high' },
    { max: Infinity, value: 'very high' }
  ];
  
  function getIndexLevel(index:number) {
    for (let i = 0; i < indexLevels.length; i++) {
      if (index < indexLevels[i].max) {
        return indexLevels[i].value;
      }
    }
  }
  const text = getIndexLevel(index);
  const radius = 43; // El radio del semicírculo
  const angle = (1 - index / 11) * Math.PI; // Convierte el valor a un ángulo en radianes
  const leftPosition = `${39 + radius * Math.cos(angle)}%`; // Calcula la posición left
  const topPosition = `${55 - radius * Math.sin(angle)}%`; // Calcula la posición top
  return (
    <div style={{position:'relative'}}>
      <span className={styles.whiteIndicator} style={{left: leftPosition, top: topPosition}}></span>
    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="90" viewBox="0 0 140 96" fill="none">
<path d="M129.668 95.1911C132.437 96.3367 135.631 95.0261 136.559 92.1773C139.551 82.9919 140.615 73.2669 139.661 63.6147C138.528 52.1589 134.588 41.1592 128.189 31.5899C121.791 22.0206 113.131 14.1771 102.976 8.75407C92.8222 3.33108 81.4873 0.496012 69.9757 0.500004C58.4642 0.503996 47.1312 3.34692 36.9808 8.77696C26.8304 14.207 18.1758 22.0565 11.7836 31.6303C5.39148 41.204 1.45905 52.2064 0.334693 63.663C-0.612657 73.3159 0.458151 83.0402 3.45607 92.2234C4.38588 95.0716 7.58138 96.38 10.3491 95.2325C13.1167 94.0849 14.4043 90.9163 13.5151 88.0551C11.177 80.5321 10.3598 72.5993 11.1328 64.7227C12.0829 55.0419 15.4058 45.7449 20.8072 37.6551C26.2086 29.5653 33.5217 22.9324 42.0988 18.344C50.6759 13.7556 60.2522 11.3534 69.9795 11.35C79.7068 11.3466 89.2847 13.7423 97.865 18.3247C106.445 22.9071 113.763 29.5349 119.17 37.621C124.577 45.707 127.906 55.0018 128.863 64.6819C129.642 72.5579 128.83 80.4912 126.497 88.0159C125.61 90.8777 126.9 94.0455 129.668 95.1911Z" fill="url(#paint0_linear_161_2185)"/>
<defs>
<linearGradient id="paint0_linear_161_2185" x1="7.5" y1="95.5" x2="136" y2="95.5" gradientUnits="userSpaceOnUse">
<stop stopColor="#3EAD75"/>
<stop offset="0.263792" stopColor="#B8C47A"/>
<stop offset="0.517751" stopColor="#F6FD68"/>
<stop offset="0.730629" stopColor="#FF9F44"/>
<stop offset="1" stopColor="#FF5A2C"/>
</linearGradient>
</defs>
</svg>
<span className={styles.label}>{text}</span>
</div>
  )
}

export default UVIndex
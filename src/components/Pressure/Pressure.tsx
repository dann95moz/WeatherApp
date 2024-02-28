interface PressureProps{
    pressure:number
}
const Pressure = ({ pressure }:PressureProps) => {
  // Calcula el ángulo de rotación basado en la presión
  const minPressure = 870;
  const maxPressure = 1085;
  const minAngle = -45; // ángulo para la presión mínima
  const maxAngle = 45; // ángulo para la presión máxima

  // Asegura que la presión esté dentro del rango permitido
  const clampedPressure = Math.max(minPressure, Math.min(maxPressure, pressure));

  // Calcula el ángulo de rotación
  const rotation = ((clampedPressure - minPressure) / (maxPressure - minPressure)) * (maxAngle - minAngle) + minAngle;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 140 141" fill="none">
      <path d="M129.668 95.1911C132.437 96.3367 135.631 95.0261 136.559 92.1773C139.551 82.9919 140.615 73.2669 139.661 63.6147C138.528 52.1589 134.588 41.1592 128.189 31.5899C121.791 22.0206 113.131 14.1771 102.976 8.75407C92.8222 3.33108 81.4873 0.496012 69.9757 0.500004C58.4642 0.503996 47.1312 3.34692 36.9808 8.77696C26.8304 14.207 18.1758 22.0565 11.7836 31.6303C5.39148 41.204 1.45905 52.2064 0.334693 63.663C-0.612657 73.3159 0.458151 83.0402 3.45607 92.2234C4.38588 95.0716 7.58138 96.38 10.3491 95.2325C13.1167 94.0849 14.4043 90.9163 13.5151 88.0551C11.177 80.5321 10.3598 72.5993 11.1328 64.7227C12.0829 55.0419 15.4058 45.7449 20.8072 37.6551C26.2086 29.5653 33.5217 22.9324 42.0988 18.344C50.6759 13.7556 60.2522 11.3534 69.9795 11.35C79.7068 11.3466 89.2847 13.7423 97.865 18.3247C106.445 22.9071 113.763 29.5349 119.17 37.621C124.577 45.707 127.906 55.0018 128.863 64.6819C129.642 72.5579 128.83 80.4912 126.497 88.0159C125.61 90.8777 126.9 94.0455 129.668 95.1911Z" fill="#DBD7F2"/>
      <g transform={`rotate(${rotation}, 71, 70)`}>
        <path d="M72.5 94.7964C72.5 95.6248 71.8284 96.2964 71 96.2964C70.1716 96.2964 69.5 95.6248 69.5 94.7964H72.5ZM71 9.00011L79.6603 24.0001H62.3397L71 9.00011ZM69.5 94.7964L69.5 22.5001H72.5L72.5 94.7964H69.5Z" fill="#6E24F3"/>
      </g>
      <g filter="url(#filter0_d_161_2194)">
        <circle cx="8.5" cy="7.5" r="7.5" transform="matrix(-1 0 0 1 78 70)" fill="white"/>
        <circle cx="8.5" cy="7.5" r="7" transform="matrix(-1 0 0 1 78 70)" stroke="#D8D8D8"/>
      </g>
      <defs>
        <filter id="filter0_d_161_2194" x="59" y="66" width="23" height="23" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_161_2194"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_161_2194" result="shape"/>
        </filter>
      </defs>
    </svg>
  )
}

export default Pressure

import { SVGAttributes } from "react";

interface Props extends SVGAttributes<SVGElement> {}

const ChargeIcon = (props: Props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.55563 13.3232L9.43584 13.3123C7.90803 13.1735 7.14412 13.104 6.90146 12.5814C6.65881 12.0588 7.09869 11.4304 7.97846 10.1736L11.5612 5.05544C12.1424 4.22517 12.433 3.81003 12.6836 3.89831C12.9342 3.98658 12.9005 4.4922 12.8331 5.50343L12.6299 8.55194C12.5685 9.47214 12.5379 9.93224 12.8023 10.2419C13.0667 10.5515 13.5259 10.5933 14.4444 10.6768L14.5642 10.6877C16.092 10.8265 16.8559 10.896 17.0985 11.4186C17.3412 11.9412 16.9013 12.5696 16.0215 13.8264L12.4388 18.9446C11.8576 19.7748 11.567 20.19 11.3164 20.1017C11.0658 20.0134 11.0995 19.5078 11.1669 18.4966L11.3701 15.4481C11.4315 14.5279 11.4621 14.0678 11.1977 13.7581C10.9333 13.4485 10.4741 13.4067 9.55563 13.3232Z"
        stroke="#222222"
      />
      <path
        d="M18.5 4L17 6H19L17.5 8"
        stroke="#2A4157"
        stroke-opacity="0.24"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.5 16L5 18H7L5.5 20"
        stroke="#2A4157"
        stroke-opacity="0.24"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ChargeIcon;

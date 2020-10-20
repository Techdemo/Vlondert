import React from "react";

const TimelineIcon =  () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="9"
      height="199"
      viewBox="0 0 9 199"
    >
      <defs>
        <linearGradient
          id="linearGradient-1"
          x1="50%"
          x2="50%"
          y1="0%"
          y2="147.376%"
        >
          <stop offset="0%" stopColor="#FFF"></stop>
          <stop offset="36.508%" stopColor="#FFF" stopOpacity="0.924"></stop>
          <stop offset="100%" stopColor="#FFF" stopOpacity="0.361"></stop>
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g transform="translate(-23 -309)">
          <path fill="#FFF" stroke="#000" d="M0.5 0.5H319.5V567.5H0.5z"></path>
          <path fill="#FFF" d="M0 0H320V568H0z"></path>
          <g transform="translate(0 236)">
            <g fill="#FFF">
              <path d="M0 0H320V255H0z"></path>
            </g>
            <g stroke="#083" transform="translate(23 73)">
              <path strokeLinecap="square" d="M4.5 0.5L4.5 198.5"></path>
              <circle cx="4.5" cy="26.5" r="4" fill="#00C349"></circle>
              <circle cx="4.5" cy="86.5" r="4" fill="#083"></circle>
              <circle cx="4.5" cy="146.5" r="4" fill="#083"></circle>
            </g>
          </g>
          <path
            fill="url(#linearGradient-1)"
            d="M0 270L320 270 320 320 233.040163 320 0 320z"
          ></path>
          <path
            fill="url(#linearGradient-1)"
            d="M-1 470L319 470 319 520 232.040163 520 -1 520z"
            transform="rotate(180 159 495)"
          ></path>
        </g>
      </g>
    </svg>
  );
}

export default TimelineIcon;

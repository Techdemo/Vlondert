import React from "react";

const BackArrowIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="19"
      viewBox="0 0 28 19"
    >
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g transform="translate(-19 -26)">
          <path fill="#FFF" stroke="#000" d="M0.5 0.5H319.5V567.5H0.5z"></path>
          <path fill="#FFF" d="M0 0H320V568H0z"></path>
          <g fill="#083">
            <path d="M0 0H320V151H0z"></path>
          </g>
          <text
            fill="#FFF"
            fontFamily="Lato-Bold, Lato"
            fontSize="20"
            fontWeight="bold"
          >
            <tspan x="84.75" y="20">
              Mathenesserdijk
            </tspan>
          </text>
          <text
            fill="#FFF"
            fontFamily="ArialMT, Arial"
            fontSize="12"
            fontWeight="normal"
          >
            <tspan x="86.277" y="45">
              aangemaakt op 09-09-2020
            </tspan>
          </text>
          <g fill="#FFF" fillRule="nonzero" transform="rotate(-90 32 12.5)">
            <path d="M16.934 7.033L10.09.433a1.588 1.588 0 00-2.18 0l-6.844 6.6a1.438 1.438 0 00.008 2.093 1.588 1.588 0 002.18 0l4.213-4.062v20.453c0 .816.692 1.483 1.538 1.483.846 0 1.538-.667 1.538-1.483V5.064l4.222 4.07a1.564 1.564 0 002.17 0 1.455 1.455 0 000-2.1z"></path>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default BackArrowIcon;
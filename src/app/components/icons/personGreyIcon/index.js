import React from "react";

const PersonGreyIcon = () =>  {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="30"
      height="20"
      viewBox="0 0 10 15"
    >
      <defs>
        <path id="path-1" d="M14 9H266V53H14z"></path>
        <filter
          id="filter-2"
          width="143.7%"
          height="350%"
          x="-21.8%"
          y="-86.4%"
          filterUnits="objectBoundingBox"
        >
          <feMorphology
            in="SourceAlpha"
            operator="dilate"
            radius="2.5"
            result="shadowSpreadOuter1"
          ></feMorphology>
          <feOffset
            dy="17"
            in="shadowSpreadOuter1"
            result="shadowOffsetOuter1"
          ></feOffset>
          <feGaussianBlur
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
            stdDeviation="13"
          ></feGaussianBlur>
          <feColorMatrix
            in="shadowBlurOuter1"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          ></feColorMatrix>
        </filter>
      </defs>
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g transform="translate(-274 -166)">
          <g transform="translate(18 120)">
            <g>
              <use
                fill="#000"
                filter="url(#filter-2)"
                xlinkHref="#path-1"
              ></use>
              <use fill="#FFF" xlinkHref="#path-1"></use>
            </g>
            <rect width="283" height="80" x="0" y="0" fill="#FFF" rx="3"></rect>
            <g fill="#A2A2A2" fillRule="nonzero" transform="translate(193 46)">
              <g transform="translate(63)">
                <path d="M8.66 7.653a.539.539 0 00-.793.727 3.895 3.895 0 011.027 2.638v2.314a.2.2 0 01-.198.198H1.298a.2.2 0 01-.198-.198v-2.314a3.9 3.9 0 013.896-3.895A3.568 3.568 0 008.558 3.56 3.562 3.562 0 004.998 0a3.568 3.568 0 00-3.14 5.249.538.538 0 10.949-.512 2.487 2.487 0 012.192-3.659 2.487 2.487 0 012.485 2.485 2.487 2.487 0 01-2.485 2.485A4.978 4.978 0 00.025 11.02v2.314c0 .704.572 1.276 1.276 1.276h7.398c.704 0 1.276-.572 1.276-1.276v-2.314A4.964 4.964 0 008.66 7.653z"></path>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default PersonGreyIcon;

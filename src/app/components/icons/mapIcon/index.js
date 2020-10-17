import React from "react";

const MapIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 26 27"
    >
      <defs>
        <path id="path-1" d="M13 9H297V34H13z"></path>
        <filter
          id="filter-2"
          width="135.6%"
          height="504%"
          x="-17.8%"
          y="-182%"
          filterUnits="objectBoundingBox"
        >
          <feMorphology
            in="SourceAlpha"
            operator="dilate"
            radius="2.5"
            result="shadowSpreadOuter1"
          ></feMorphology>
          <feOffset
            dy="5"
            in="shadowSpreadOuter1"
            result="shadowOffsetOuter1"
          ></feOffset>
          <feGaussianBlur
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
            stdDeviation="13.5"
          ></feGaussianBlur>
          <feColorMatrix
            in="shadowBlurOuter1"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          ></feColorMatrix>
        </filter>
      </defs>
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g transform="translate(-147 -6)">
          <g>
            <use fill="#000" filter="url(#filter-2)" xlinkHref="#path-1"></use>
            <use fill="#D8D8D8" xlinkHref="#path-1"></use>
          </g>
          <path fill="#FFF" d="M0 0.697H320V51.697H0z"></path>
          <g fill="#083" fillRule="nonzero" transform="translate(148.684 7)">
            <path
              stroke="#008928"
              d="M11.816 15c3.033 0 5.5-2.467 5.5-5.5S14.85 4 11.816 4a5.506 5.506 0 00-5.5 5.5c0 3.032 2.468 5.5 5.5 5.5zm0-10c2.482 0 4.5 2.019 4.5 4.5s-2.018 4.5-4.5 4.5a4.505 4.505 0 01-4.5-4.5c0-2.481 2.019-4.5 4.5-4.5z"
            ></path>
            <path
              stroke="#008926"
              d="M23.275 24.274l-3.137-7.291a.523.523 0 00-.48-.316H17.8l.641-.637a9.295 9.295 0 002.784-6.655c0-5.17-4.221-9.375-9.41-9.375-5.188 0-9.409 4.206-9.409 9.375 0 2.517.989 4.88 2.783 6.654l.643.638H3.975a.523.523 0 00-.48.316L.358 24.274A.52.52 0 00.84 25h21.955a.522.522 0 00.48-.726zM3.453 9.375c0-4.595 3.752-8.333 8.363-8.333 4.612 0 8.364 3.738 8.364 8.333 0 2.237-.879 4.338-2.475 5.916l-5.889 5.849-5.889-5.85a8.262 8.262 0 01-2.474-5.915zM1.63 23.958l2.69-6.25h2.56l4.567 4.536a.52.52 0 00.737 0l4.567-4.536h2.56l2.69 6.25H1.632z"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default MapIcon;
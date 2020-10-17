import React from "react";

const ApplicationIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 21 24"
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
        <g transform="translate(-242 -7)">
          <g>
            <use fill="#000" filter="url(#filter-2)" xlinkHref="#path-1"></use>
            <use fill="#D8D8D8" xlinkHref="#path-1"></use>
          </g>
          <path fill="#FFF" d="M0 0.697H320V51.697H0z"></path>
          <g fill="#008926" fillRule="nonzero" transform="translate(242 7)">
            <path d="M20.094 2.558H15.21V.878c0-.483-.407-.878-.905-.878H6.696c-.498 0-.905.395-.905.879v4.643c0 .483.407.878.905.878h5.62c.498 0 .906-.395.906-.878 0-.484-.408-.88-.906-.88H7.602V1.759h5.79v1.684c0 .483.408.879.907.879h4.885v17.926H1.81V4.316h1.394c.498 0 .905-.396.905-.88 0-.482-.407-.878-.905-.878h-2.3c-.497 0-.905.396-.905.879V23.12c0 .484.408.879.906.879h19.188c.498 0 .906-.395.906-.879V3.437c0-.483-.408-.879-.906-.879z"></path>
            <path d="M15.087 14H7.913C7.41 14 7 14.45 7 15s.41 1 .913 1h7.174c.502 0 .913-.45.913-1s-.41-1-.913-1zM15.087 10H7.913C7.41 10 7 10.45 7 11s.41 1 .913 1h7.174c.502 0 .913-.45.913-1s-.41-1-.913-1z"></path>
            <circle cx="5" cy="11" r="1"></circle>
            <circle cx="5" cy="15" r="1"></circle>
            <path d="M15.087 18H7.913C7.41 18 7 18.45 7 19s.41 1 .913 1h7.174c.502 0 .913-.45.913-1s-.41-1-.913-1z"></path>
            <circle cx="5" cy="19" r="1"></circle>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default ApplicationIcon;
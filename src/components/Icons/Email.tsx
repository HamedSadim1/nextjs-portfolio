import React from 'react';

// Dit is een SVG-icoon component. Het is aangepast om props (zoals className) te accepteren,
// zodat de styling (grootte, kleur, etc.) flexibel kan worden aangepast met Tailwind CSS.
const Email: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      {...props} // Spreid alle doorgegeven props naar het svg-element
      viewBox="0 0 24 24"
      fill="currentColor" // Gebruik de huidige tekstkleur voor de vulling
      stroke="currentColor" // Gebruik de huidige tekstkleur voor de lijn
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z"
          fill="currentColor"
        ></path>
      </g>
    </svg>
  );
};

export default Email;

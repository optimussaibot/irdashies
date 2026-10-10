import { SVGProps } from "react";
// @ts-ignore
import mozaScreenImg from "../../../../assets/img/moza-display.png"; 

export const MozaFsr2B = (props: SVGProps<SVGSVGElement>) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 500 500" 
    width="100%" 
    height="100%" 
    {...props}
  >
    {/* Centers the graphics directly on the rotation axis */}
    <g transform="translate(250, 250)">
      <image
        href={mozaScreenImg}
        x="-150"
        y="-150"
        width="300"
        height="300"
        preserveAspectRatio="xMidYMid meet"
      />
    </g>
  </svg>
);

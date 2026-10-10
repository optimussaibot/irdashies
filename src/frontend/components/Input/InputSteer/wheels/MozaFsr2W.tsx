import { SVGProps } from "react";
// @ts-ignore
import mozaScreenImg from "../../../../assets/img/moza-display.png"; 

export const MozaFsr2W = (props: SVGProps<SVGSVGElement>) => (
  <svg 
    xmlns="http://w3.org" 
    viewBox="0 0 500 380" 
    width="100%" 
    height="100%" 
    {...props}
  >
    {/* Centers and scales the light graphic to perfectly fill the wider frame layout */}
    <g transform="translate(250, 190)">
      <image
        href={mozaScreenImg}
        x="-250"
        y="-250"
        width="500"
        height="500"
        preserveAspectRatio="xMidYMid meet"
      />
    </g>
  </svg>
);

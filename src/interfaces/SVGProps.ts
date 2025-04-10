import { SVGProps } from 'react';

export interface ISvgProps extends SVGProps<SVGSVGElement> {
  color?: string;
  color2?: string;
  fill?: string;
  height?: number;
  strokeWidth?: number;
  width?: number;
}

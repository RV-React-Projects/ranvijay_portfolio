import { SVGProps } from 'react';

export interface ISvgProps extends SVGProps<SVGSVGElement> {
  height?: number;
  width?: number;
  fill?: string;
  color?: string;
  color2?: string;
  strokeWidth?: number;
}

import clsx from 'clsx';
import { ISvgProps } from '@interfaces/SVGProps';

export default function CssSvg(props: ISvgProps) {
  const {
    height = 24,
    width = 24,
    fill = 'none',
    color = '#2299f8',
    color2 = '#fcfcfc',
    className,
    ...rest
  } = props;
  return (
    <svg
      className={clsx(color, color2, className)}
      height={height}
      width={width}
      fill={fill}
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}>
      <path
        d="M47.575 16.379L85.6 447.023l170.751 47.852 170.686-47.822 38.092-430.674H47.575zm0 0"
        fill={color}
      />
      <path
        d="M383.824 157.206l-4.801 54.098-14.5 162.185-108.172 29.994-.094.027-108.119-30.021-7.541-84.817h52.968l3.938 43.992 58.785 15.908.029-.027 58.875-15.912 8.023-73.3-185.154.512-5.251-50.125 194.844-2.306 3.943-53.648-204.005.572-3.43-49.913h264.369l-4.707 52.781zm0 0"
        fill={color2}
      />
    </svg>
  );
}

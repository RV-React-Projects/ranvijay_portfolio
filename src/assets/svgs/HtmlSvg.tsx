import clsx from 'clsx';
import { ISvgProps } from '@interfaces/SVGProps';

export default function HtmlSvg(props: ISvgProps) {
  const {
    height = 24,
    width = 24,
    fill = 'none',
    color = '#E44D26',
    color2 = '#FFF',
    className,
    ...rest
  } = props;
  return (
    <svg
      className={clsx(color, color2, className)}
      height={height}
      width={width}
      fill={fill}
      viewBox="0 0 32 32"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}>
      <path
        fill={color}
        d="M27.377 28.889L16.001 32 4.625 28.889 2 0 30.002 0z"
      />
      <path fill="#FF6C39" d="M16 2L16 29.75 25.232 27.008 27.688 2z" />
      <path
        fill={color2}
        d="M24.363 6L7.607 6 8 10 8.619 17 19.503 17 19.148 20.984 16 21.99 12.857 20.984 12.648 19 8.803 19 9.262 23.987 16 25.99 22.728 23.986 23.718 13 12.252 13 12.002 10 24 10z"
      />
    </svg>
  );
}

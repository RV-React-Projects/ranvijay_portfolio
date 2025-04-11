import clsx from 'clsx';
import { ISvgProps } from '@interfaces/SVGProps';

export default function ToolSvg(props: ISvgProps) {
  const {
    height = 24,
    width = 24,
    fill = 'none',
    color = '#0077b5',
    color2,
    className,
    ...rest
  } = props;
  return (
    <svg
      className={clsx(color, color2, className)}
      height={height}
      width={width}
      fill={fill}
      aria-labelledby="toolIconTitle"
      color={color}
      stroke={color}
      strokeLinecap="square"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}>
      <path d="M9.743 13.743a6 6 0 01-7.158-8.33L6.95 9.778 9.778 6.95 5.413 2.585a6 6 0 018.057 7.885l7.116 7.116a2 2 0 010 2.828l-.672.672a2 2 0 01-2.828 0l-7.343-7.343z" />
    </svg>
  );
}

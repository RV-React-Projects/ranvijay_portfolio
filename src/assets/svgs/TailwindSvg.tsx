import clsx from 'clsx';
import { ISvgProps } from '@interfaces/SVGProps';

export default function TailwindSvg(props: ISvgProps) {
  const {
    height = 24,
    width = 24,
    fill = 'none',
    color = '#06b6d4',
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
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}>
      <path
        fill={color}
        d="M18.5 9.51a4.22 4.22 0 01-1.91-1.34A5.77 5.77 0 0012 6a4.72 4.72 0 00-5 4 3.23 3.23 0 013.5-1.49 4.32 4.32 0 011.91 1.35A5.77 5.77 0 0017 12a4.72 4.72 0 005-4 3.2 3.2 0 01-3.5 1.51zm-13 4.98a4.22 4.22 0 011.91 1.34A5.77 5.77 0 0012 18a4.72 4.72 0 005-4 3.23 3.23 0 01-3.5 1.49 4.32 4.32 0 01-1.91-1.35A5.8 5.8 0 007 12a4.72 4.72 0 00-5 4 3.2 3.2 0 013.5-1.51z"
      />
    </svg>
  );
}

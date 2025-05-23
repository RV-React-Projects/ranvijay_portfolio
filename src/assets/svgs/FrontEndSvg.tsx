import clsx from 'clsx';
import { ISvgProps } from '@interfaces/SVGProps';

export default function FrontEndSvg(props: ISvgProps) {
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
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}>
      <path
        d="M1.5 20a.5.5 0 01-.5-.5v-16C1 2.673 1.673 2 2.5 2h27c.827 0 1.5.673 1.5 1.5V5a.5.5 0 01-1 0V3.5c0-.275-.225-.5-.5-.5h-27c-.275 0-.5.225-.5.5v16a.5.5 0 01-.5.5zM16 31h-5.5a.5.5 0 010-1h1c.827 0 1.5-.673 1.5-1.5V26a.5.5 0 011 0v2.5c0 .563-.187 1.082-.501 1.5H16a.5.5 0 010 1z"
        fill={color}
      />
      <path
        d="M15.5 26h-13c-.827 0-1.5-.673-1.5-1.5v-3a.5.5 0 01.5-.5h14a.5.5 0 010 1H2v2.5c0 .275.225.5.5.5h13a.5.5 0 010 1z"
        fill={color}
      />
      <g>
        <path
          d="M21.5 9h5a.5.5 0 000-1h-5a.5.5 0 000 1zM23.5 29h1a.5.5 0 000-1h-1a.5.5 0 000 1z"
          fill={color}
        />
        <path
          d="M28.5 31h-9a2.502 2.502 0 01-2.5-2.5v-20C17 7.121 18.121 6 19.5 6h9C29.879 6 31 7.121 31 8.5v20c0 1.379-1.121 2.5-2.5 2.5zm-9-24c-.827 0-1.5.673-1.5 1.5v20c0 .827.673 1.5 1.5 1.5h9c.827 0 1.5-.673 1.5-1.5v-20c0-.827-.673-1.5-1.5-1.5h-9z"
          fill={color}
        />
      </g>
    </svg>
  );
}

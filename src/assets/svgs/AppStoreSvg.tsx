import clsx from 'clsx';
import { ISvgProps } from '@interfaces/SVGProps';

export default function AppStoreSvg(props: ISvgProps) {
  const {
    height = 24,
    width = 24,
    fill = 'none',
    color = '#fff',
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
      viewBox="0 0 69.45 69.45"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}>
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="AppStoreA"
          x1={34.72}
          x2={34.72}
          y2={69.45}>
          <stop offset={0} stopColor="#78d2f9" />
          <stop offset={1} stopColor="#3458e9" />
        </linearGradient>
      </defs>
      <g data-name="Layer 2">
        <g data-name="Layer 1">
          <circle cx={34.72} cy={34.72} r={34.72} fill="url(#AppStoreA)" />
          <path
            d="M34.65 20.16l1.12-1.93a2.52 2.52 0 014.37 2.51L29.35 39.41h7.8a3.45 3.45 0 012.85 5H17.13a2.52 2.52 0 110-5h6.41l8.21-14.23-2.56-4.45a2.52 2.52 0 114.36-2.51l1.1 1.94zM25 47l-2.42 4.2a2.52 2.52 0 01-4.37-2.52L20 45.6a4.32 4.32 0 015 1.4zm20.83-7.6h6.54a2.52 2.52 0 010 5h-3.69l2.46 4.25a2.52 2.52 0 01-4.37 2.52q-6.19-10.75-9.29-16.1a7 7 0 01.88-8.52q2.47 4.25 7.42 12.82z"
            fill={color}
          />
        </g>
      </g>
    </svg>
  );
}

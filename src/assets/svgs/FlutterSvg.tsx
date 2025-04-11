import clsx from 'clsx';
import { ISvgProps } from '@interfaces/SVGProps';

export default function FlutterSvg(props: ISvgProps) {
  const {
    height = 24,
    width = 24,
    fill = 'none',
    color = '#02539a',
    color2 = '#45d1fd',
    className,
    ...rest
  } = props;

  return (
    <svg
      className={clsx(color, color2, className)}
      height={height}
      width={width}
      fill={fill}
      viewBox=".29 .22 77.26 95.75"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}>
      <g fill="none" fillRule="evenodd">
        <path
          d="M48.75 95.97L22.84 70.23l14.32-14.57 40.39 40.31z"
          fill={color}
        />
        <g fill={color2}>
          <path
            d="M22.52 70.25L48.2 44.57h28.87L37.12 84.52z"
            fillOpacity={0.85}
          />
          <path d="M.29 47.85l14.58 14.57L77.07.22H48.05z" />
        </g>
      </g>
    </svg>
  );
}

import clsx from 'clsx';
import { ISvgProps } from '@interfaces/SVGProps';

export default function XdSvg(props: ISvgProps) {
  const {
    height = 32,
    width = 32,
    fill = 'none',
    color = '#FF26BE',
    color2 = '#2e001f',
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
      <path fill={color} d="M1.207 0.712H511.783V511.287H1.207z" />
      <path fill={color2} d="M23.669 23.179H489.315V488.825H23.669z" />
      <path
        d="M266.262 137.396h-39.884l-42.813 89.544-43.388-89.544H99.091l58.146 116.27-60.221 119.055h40.6l43.58-91.24 44.086 91.24h43.945l-62.07-120.454 59.105-114.871zm110.257 0v59.837h-11.493c-39.22 0-86.634 25.292-86.634 89.894 0 49.941 25.304 87.479 79.201 87.479 39.685 0 58.381-13.728 58.381-13.728V137.396h-39.455zm-.039 202.835s-4.543 1.998-15.261 1.998-43.601-4.722-43.601-56.863c0-52.136 37.788-56.317 46.869-56.317 9.086 0 11.992 2.545 11.992 2.545v108.637z"
        fill="#ffd9f2"
      />
    </svg>
  );
}

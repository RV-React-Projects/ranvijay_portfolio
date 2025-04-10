import clsx from 'clsx';
import { ISvgProps } from '@interfaces/SVGProps';

export default function FireBaseSvg(props: ISvgProps) {
  const {
    height = 32,
    width = 32,
    fill = 'none',
    color = '#FFA000',
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
      baseProfile="tiny"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}>
      <path
        d="M297.036 205.578l-36.334 33.809-33.716-68.005 17.446-39.108c4.416-7.84 11.621-7.855 16.037 0l36.567 73.304z"
        fill="#FFA000"
      />
      <path
        fill="#F57F17"
        d="M260.702 239.386L124.924 365.697 226.986 171.381z"
      />
      <path
        d="M336.776 153.901c6.491-6.239 13.202-4.111 14.912 4.729l35.342 205.375-117.157 70.215c-4.1 2.264-14.957 3.246-14.957 3.246s-9.91-1.185-13.687-3.281L124.92 365.69l211.856-211.789z"
        fill="#FFCA28"
      />
      <path
        d="M226.986 171.381L124.924 365.697l45.46-283.998c1.674-8.847 6.71-9.699 11.203-1.89l45.399 91.572z"
        fill="#FFA000"
      />
    </svg>
  );
}

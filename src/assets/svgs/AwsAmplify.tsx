import clsx from 'clsx';
import { ISvgProps } from '@interfaces/SVGProps';

export default function AwsAmplify(props: ISvgProps) {
  const {
    height = 24,
    width = 24,
    fill = 'none',
    color = '#F90',
    color2 = '#FFC300',
    className,
    ...rest
  } = props;

  return (
    <svg
      className={clsx(color, color2, className)}
      height={height}
      width={width}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 191"
      {...rest}>
      <defs>
        <linearGradient
          id="logosAwsAmplify0"
          x1="100%"
          x2="0%"
          y1="22.172%"
          y2="77.828%">
          <stop offset="0%" stopColor={color}></stop>
          <stop offset="100%" stopColor={color2}></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#logosAwsAmplify0)"
        d="M55.71 158.476h72.106l18.47 32.508H0l51.364-89.006L72.89 64.706l18.48 32.022zM82.6 47.85l17.744-30.746l100.42 173.88h-35.562zM110.221 0h35.516L256 190.984h-35.56z"></path>
    </svg>
  );
}

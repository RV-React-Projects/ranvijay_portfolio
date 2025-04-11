import clsx from 'clsx';
import { ISvgProps } from '@interfaces/SVGProps';

export default function AndroidSvg(props: ISvgProps) {
  const {
    height = 24,
    width = 24,
    fill = 'none',
    color = '#85C808',
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
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}>
      <g fill={color}>
        <path d="M5 8.978a2 2 0 00-2 2v8a2 2 0 004 0v-8a2 2 0 00-2-2zM27 8.978a2 2 0 00-2 2v8a2 2 0 004 0v-8a2 2 0 00-2-2zM8 24.978h2v5a2 2 0 004 0v-5h4v5a2 2 0 004 0v-5h2v-15H8v15zM20.723 2.53L21.75.751a.5.5 0 00-.184-.684.498.498 0 00-.683.184l-1.001 1.734A7.955 7.955 0 0016 .978a7.951 7.951 0 00-3.882 1.008L11.116.25a.501.501 0 00-.867.5l1.028 1.78A7.984 7.984 0 008 8.978h16a7.984 7.984 0 00-3.277-6.448zM13 5.978a1 1 0 110-2 1 1 0 110 2zm6 0a1 1 0 110-2 1 1 0 110 2z" />
      </g>
    </svg>
  );
}

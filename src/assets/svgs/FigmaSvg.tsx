import clsx from 'clsx';
import { ISvgProps } from '@interfaces/SVGProps';

export default function FigmaSvg(props: ISvgProps) {
  const {
    height = 40,
    width = 40,
    fill = 'none',
    color = '#000',
    className,
    color2,
    ...rest
  } = props;

  return (
    <svg
      className={clsx(color, color2, className)}
      height={height}
      width={width}
      fill={fill}
      viewBox="0 0 3000 3000"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}>
      <path
        d="M1083.333 2750c230 0 416.667-186.667 416.667-416.667v-416.666h-416.667c-230 0-416.666 186.666-416.666 416.666S853.333 2750 1083.333 2750z"
        fill="#0acf83"
      />
      <path
        d="M666.667 1500c0-230 186.666-416.667 416.666-416.667H1500v833.334h-416.667c-230 0-416.666-186.667-416.666-416.667z"
        fill="#a259ff"
      />
      <path
        d="M666.667 666.667c0-230 186.666-416.667 416.666-416.667H1500v833.333h-416.667c-230 0-416.666-186.666-416.666-416.666z"
        fill="#f24e1e"
      />
      <path
        d="M1500 250h416.667c230 0 416.666 186.667 416.666 416.667s-186.666 416.666-416.666 416.666H1500V250z"
        fill="#ff7262"
      />
      <path
        d="M2333.333 1500c0 230-186.666 416.667-416.666 416.667S1500 1730 1500 1500s186.667-416.667 416.667-416.667S2333.333 1270 2333.333 1500z"
        fill="#1abcfe"
      />
    </svg>
  );
}

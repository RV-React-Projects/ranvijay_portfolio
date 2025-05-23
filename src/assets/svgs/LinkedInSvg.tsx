import clsx from 'clsx';
import { ISvgProps } from '@interfaces/SVGProps';

export default function LinkedInSvg(props: ISvgProps) {
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
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}>
      <style />
      <path
        d="M2 6v52c0 2.2 1.8 4 4 4h52c2.2 0 4-1.8 4-4V6c0-2.2-1.8-4-4-4H6C3.8 2 2 3.8 2 6zm17.1 46H12V24.4h7.1V52zm-3.5-33.1c-2 0-3.6-1.5-3.6-3.4s1.6-3.4 3.6-3.4 3.6 1.5 3.6 3.4c-.1 1.9-1.7 3.4-3.6 3.4zM52 52h-7.1V38.2c0-2.9-.1-4.8-.4-5.7-.3-.9-.8-1.5-1.4-2-.7-.5-1.5-.7-2.4-.7-1.2 0-2.3.3-3.2 1-1 .7-1.6 1.6-2 2.7-.4 1.1-.5 3.2-.5 6.2V52h-8.6V24.4h7.1v4.1c2.4-3.1 5.5-4.7 9.2-4.7 1.6 0 3.1.3 4.5.9 1.3.6 2.4 1.3 3.1 2.2.7.9 1.2 1.9 1.4 3.1.3 1.1.4 2.8.4 4.9V52z"
        fill={color}
        // fill="currentColor"
        id="Layer_9"
      />
    </svg>
  );
}

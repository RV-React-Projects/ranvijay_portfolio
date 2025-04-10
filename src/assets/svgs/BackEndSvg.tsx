import clsx from 'clsx';
import { ISvgProps } from '@interfaces/SVGProps';

export default function BackEndSvg(props: ISvgProps) {
  const {
    height = 32,
    width = 32,
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
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}>
      <path
        d="M58 50H38v1H26v-1H6c-.553 0-1 .447-1 1s.438 1.097.977 1.217l6.07 1.35c1.078.239 2.848.433 3.953.433h32c1.104 0 2.873-.194 3.951-.434l6.072-1.35c.54-.119.977-.663.977-1.216s-.447-1-1-1zm-.193 1.24l-6.072 1.35c-1.001.223-2.712.41-3.735.41H16c-1.023 0-2.734-.188-3.736-.41l-6.07-1.35C6.111 51.223 6 51.083 6 51h19v1h14v-1h19c0 .083-.113.223-.193.24zM53 16H11a1 1 0 00-1 1v30h44V17a1 1 0 00-1-1zm0 30H11V17h42v29z"
        fill={color}
      />
      <path
        d="M56 17c0-1.65-1.35-3-3-3H11c-1.65 0-3 1.35-3 3v32h48V17zm-1 31H9V17a2 2 0 012-2h42a2 2 0 012 2v31z"
        fill={color}
      />
      <path fill={color} d="M14 43H16V44H14z" />
      <path fill={color} d="M14 40H16V41H14z" />
      <path fill={color} d="M14 37H16V38H14z" />
      <path fill={color} d="M14 34H16V35H14z" />
      <path fill={color} d="M14 31H16V32H14z" />
      <path fill={color} d="M14 28H16V29H14z" />
      <path fill={color} d="M14 25H16V26H14z" />
      <path fill={color} d="M14 22H16V23H14z" />
      <path fill={color} d="M14 19H16V20H14z" />
      <path fill={color} d="M18 37H26V38H18z" />
      <path fill={color} d="M27 37H29V38H27z" />
      <path fill={color} d="M28 43H38V44H28z" />
      <path fill={color} d="M25 43H27V44H25z" />
      <path fill={color} d="M18 43H24V44H18z" />
      <path fill={color} d="M22 40H30V41H22z" />
      <path fill={color} d="M39 37H47V38H39z" />
      <path fill={color} d="M30 37H38V38H30z" />
      <path fill={color} d="M36 31H44V32H36z" />
      <path fill={color} d="M33 31H35V32H33z" />
      <path fill={color} d="M18 28H20V29H18z" />
      <path fill={color} d="M24 31H28V32H24z" />
      <path fill={color} d="M18 25H22V26H18z" />
      <path fill={color} d="M23 25H27V26H23z" />
      <path fill={color} d="M28 25H41V26H28z" />
      <path fill={color} d="M32 22H36V23H32z" />
      <path fill={color} d="M27 22H31V23H27z" />
      <path fill={color} d="M37 22H39V23H37z" />
      <path fill={color} d="M37 34H42V35H37z" />
      <path fill={color} d="M32 34H36V35H32z" />
      <path fill={color} d="M18 34H29V35H18z" />
      <path fill={color} d="M18 22H26V23H18z" />
      <path fill={color} d="M18 19H20V20H18z" />
    </svg>
  );
}

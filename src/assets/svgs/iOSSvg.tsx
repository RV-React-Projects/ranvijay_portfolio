import clsx from 'clsx';
import { ISvgProps } from '@interfaces/SVGProps';

export default function iOSSvg(props: ISvgProps) {
  const {
    height = 24,
    width = 24,
    fill = 'none',
    color = '#000',
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
      viewBox="0 0 24 24"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}>
      <path
        d="M18.003 12.5a5.495 5.495 0 013.039-4.913C19.435 6.082 17.37 6 17.002 6c-.974 0-1.67.264-2.343.52-.651.247-1.267.48-2.157.48s-1.506-.233-2.157-.48C9.672 6.264 8.976 6 8 6 7.387 6 2 6.196 2 13c0 5.564 3.797 11 6.001 11 1.35 0 2.126-.315 2.81-.594.536-.217.999-.405 1.691-.405.692 0 1.155.188 1.69.406.686.278 1.462.593 2.81.593 1.545 0 3.743-2.671 4.998-6.182-2.368-.613-3.997-2.758-3.997-5.318zM12.002 6c2.93-.6 5.03-3.015 5-6-2.929.6-5.029 3.015-5 6z"
        fill="#1A1A1A"
      />
      <path
        d="M8.001 6.25c.975 0 1.671.264 2.344.52.651.247 1.267.48 2.157.48s1.506-.233 2.157-.48c.673-.256 1.369-.52 2.344-.52.354 0 2.282.089 3.86 1.442.06-.033.117-.074.179-.105C19.435 6.082 17.37 6 17.002 6c-.974 0-1.67.264-2.343.52-.651.247-1.267.48-2.157.48s-1.506-.233-2.157-.48C9.672 6.264 8.976 6 8 6 7.387 6 2 6.196 2 13c0 .046.005.092.006.138C2.068 6.45 7.39 6.25 8 6.25z"
        fill="#FFF"
        opacity={0.1}
      />
      <path
        d="M17.002 23.75c-1.348 0-2.124-.315-2.81-.593-.535-.218-.998-.406-1.69-.406s-1.155.188-1.69.405c-.685.279-1.461.594-2.81.594-2.187 0-5.935-5.347-5.996-10.862 0 .04-.006.073-.006.112 0 5.564 3.797 11 6.001 11 1.35 0 2.126-.315 2.81-.594.536-.217.999-.405 1.691-.405.692 0 1.155.188 1.69.406.686.278 1.462.593 2.81.593 1.545 0 3.743-2.671 4.998-6.182-.03-.007-.055-.021-.084-.03-1.272 3.401-3.402 5.962-4.914 5.962zM16.98.442c-.207 2.731-2.231 4.734-4.975 5.305a5.912 5.912 0 00-.003.253C14.844 5.418 16.906 3.122 17 .26c-.009.047-.006.126-.02.182z"
        opacity={0.2}
      />
      <path
        d="M12.005 5.734c.012-.065.026-.246.04-.356.011-.138.026-.273.045-.406.366-2.506 2.304-4.17 4.91-4.711.003-.087.003-.173.003-.261-2.843.582-4.905 2.871-4.998 5.734z"
        fill="#FFF"
        opacity={0.1}
      />
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="a"
        x1={3.3999658}
        x2={22.5684128}
        y1={7.8420377}
        y2={16.7804317}>
        <stop offset={0} stopColor="#fff" stopOpacity={0.2} />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
      <path
        d="M18.003 12.5a5.495 5.495 0 013.039-4.913C19.435 6.082 17.37 6 17.002 6c-.974 0-1.67.264-2.343.52-.651.247-1.267.48-2.157.48s-1.506-.233-2.157-.48C9.672 6.264 8.976 6 8 6 7.387 6 2 6.196 2 13c0 5.564 3.797 11 6.001 11 1.35 0 2.126-.315 2.81-.594.536-.217.999-.405 1.691-.405.692 0 1.155.188 1.69.406.686.278 1.462.593 2.81.593 1.545 0 3.743-2.671 4.998-6.182-2.368-.613-3.997-2.758-3.997-5.318zm-1-12.5c-2.93.6-5.03 3.015-5 6 2.929-.6 5.029-3.015 5-6z"
        fill="url(#a)"
      />
    </svg>
  );
}

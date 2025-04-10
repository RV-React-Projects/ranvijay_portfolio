import clsx from 'clsx';
import { ISvgProps } from '@interfaces/SVGProps';

export default function PlayStoreSvg(props: ISvgProps) {
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
        d="M1.41.212A.985.985 0 001 .995V23c0 .327.168.604.411.786L13.75 12 1.41.212z"
        fill="#29B6F6"
      />
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="a"
        x1={7.3745422}
        x2={7.3745422}
        y1={2.0928607}
        y2={18.0032349}>
        <stop offset={0} stopColor="#00b8d4" stopOpacity={0} />
        <stop offset={1} stopColor="#fff" stopOpacity={0.3} />
      </linearGradient>
      <path
        d="M1.41.212A.985.985 0 001 .995V23c0 .327.168.604.411.786L13.75 12 1.41.212z"
        fill="url(#a)"
      />
      <path
        d="M17.55 8.37C12.492 5.56 6.21 2.12 2.462.115 2.098-.08 1.7-.006 1.41.212L13.75 12l3.8-3.63z"
        fill="#00E676"
      />
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="b"
        x1={0.3668386}
        x2={16.7487888}
        y1={2.4476056}
        y2={10.0866346}>
        <stop offset={0} stopColor="#fff" stopOpacity={0.2} />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
      <path
        d="M17.55 8.37C12.492 5.56 6.21 2.12 2.462.115 2.098-.08 1.7-.006 1.41.212L13.75 12l3.8-3.63z"
        fill="url(#b)"
      />
      <path
        d="M1.411 23.786A.976.976 0 002 24c.158 0 .314-.04.463-.12 3.747-2.005 10.027-5.445 15.083-8.253L13.749 12 1.411 23.786z"
        fill="#F44336"
      />
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="c"
        x1={7.4846344}
        x2={11.4725189}
        y1={17.7127533}
        y2={21.7006378}>
        <stop offset={0} stopOpacity={0.1} />
        <stop offset={1} stopOpacity={0} />
      </linearGradient>
      <path
        d="M1.411 23.786A.976.976 0 002 24c.158 0 .314-.04.463-.12 3.747-2.005 10.027-5.445 15.083-8.253L13.749 12 1.411 23.786z"
        fill="url(#c)"
      />
      <path
        d="M22.491 11.135A730.108 730.108 0 0017.55 8.37L13.75 12l3.797 3.627a732.397 732.397 0 004.945-2.767c.314-.178.509-.508.509-.863s-.195-.684-.509-.862z"
        fill="#FFEA00"
      />
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="d"
        x1={16.1639004}
        x2={20.9908886}
        y1={9.5851831}
        y2={14.4121704}>
        <stop offset={0} stopOpacity={0.05} />
        <stop offset={1} stopOpacity={0} />
      </linearGradient>
      <path
        d="M22.491 11.135A730.108 730.108 0 0017.55 8.37L13.75 12l3.797 3.627a732.397 732.397 0 004.945-2.767c.314-.178.509-.508.509-.863s-.195-.684-.509-.862z"
        fill="url(#d)"
      />
      <path
        d="M2.392.365c5.18 2.75 15.174 8.209 20.178 11.02a1 1 0 01.406.439.992.992 0 00-.485-.689C17.525 8.324 7.604 2.865 2.463.115c-.614-.328-1.326.092-1.44.712.235-.473.838-.744 1.369-.462z"
        fill="#FFF"
        opacity={0.2}
      />
      <path
        d="M2.392 23.635c5.18-2.75 15.174-8.209 20.178-11.02a1 1 0 00.406-.439.992.992 0 01-.485.689c-4.966 2.811-14.887 8.27-20.028 11.02-.614.328-1.326-.092-1.44-.712.235.473.838.744 1.369.462z"
        opacity={0.1}
      />
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="e"
        x1={-3.1124771}
        x2={19.3332195}
        y1={9.6086521}
        y2={20.0752525}>
        <stop offset={0} stopColor="#fff" stopOpacity={0.2} />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
      <path
        d="M22.491 11.134C21.145 10.372 6.211 2.118 2.463.113 2.098-.082 1.7-.008 1.41.21A.985.985 0 001 .993V23c0 .326.168.604.411.786A.976.976 0 002 24c.158 0 .314-.04.463-.12C6.21 21.875 21.144 13.62 22.49 12.859a.995.995 0 00.509-.863.994.994 0 00-.509-.862z"
        fill="url(#e)"
      />
    </svg>
  );
}

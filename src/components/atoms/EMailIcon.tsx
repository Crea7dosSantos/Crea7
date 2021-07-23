export interface EMailIconProps {
  width: number
  height: number
}

export const EMailIcon: React.VFC<EMailIconProps> = ({ width, height }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    className="inline pl-0.5 pb-0.5"
  >
    <path
      fill="currentColor"
      d="M17.187 19.181L24 4.755 0 12.386l9.196 1.963.043 4.896 2.759-2.617-2.147-2.076 7.336 4.63z"
    />
  </svg>
)

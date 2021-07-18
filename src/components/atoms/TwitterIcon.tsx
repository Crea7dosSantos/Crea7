export interface TwitterIconProps {
  width: number
  height: number
}

export const TwitterIcon: React.VFC<TwitterIconProps> = ({ width, height }) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 27 27"
    xmlSpace="preserve"
    width={width}
    height={height}
    className="inline pl-0.5 pb-0.5"
  >
    <path
      fill="currentColor"
      d="M23.1,8.7c0,0.2,0,0.5,0,0.7c0,8-6.4,14.5-14.4,14.6c-0.1,0-0.1,0-0.2,0c-2.8,0-5.5-0.8-7.9-2.3c0.4,0,0.8,0.1,1.2,0.1
	      c2.3,0,4.6-0.8,6.3-2.1C6,19.6,4,18.2,3.3,16c0.3,0.1,0.7,0.1,1,0.1c0.5,0,0.9-0.1,1.4-0.2c-2.4-0.5-4.1-2.6-4.1-5.1v-0.1
	      c0.7,0.4,1.5,0.6,2.3,0.7c-1.5-1-2.2-2.5-2.2-4.3c0-0.9,0.2-1.8,0.7-2.6C5,7.8,8.8,9.7,13,9.9c-0.1-0.4-0.1-0.8-0.1-1.2
	      c0-2.8,2.2-5.2,5.2-5.2c1.5,0,2.8,0.6,3.8,1.7C23,5,24,4.6,25,4.1c-0.4,1.2-1.2,2.1-2.2,2.8c1-0.1,2-0.4,2.9-0.8
	      C24.9,7.1,24,7.9,23.1,8.7L23.1,8.7z"
    />
  </svg>
)

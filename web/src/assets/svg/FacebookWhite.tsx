import * as React from "react"

const SvgComponent = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24.193}
    height={24.192}
    {...props}
  >
    <path
      data-name="Icon awesome-facebook-square"
      d="M21.6 0H2.592A2.592 2.592 0 0 0 0 2.592V21.6a2.592 2.592 0 0 0 2.592 2.592H10v-8.224H6.6v-3.872H10V9.15c0-3.356 2-5.21 5.058-5.21a20.61 20.61 0 0 1 3 .261v3.29h-1.686a1.936 1.936 0 0 0-2.183 2.091v2.514H17.9l-.594 3.871h-3.12v8.225H21.6a2.592 2.592 0 0 0 2.592-2.592V2.592A2.592 2.592 0 0 0 21.6 0Z"
      fill="#fff"
    />
  </svg>
)

export default SvgComponent

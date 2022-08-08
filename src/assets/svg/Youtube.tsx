import * as React from "react"

const SvgComponent = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={50} height={51} {...props}>
    <g data-name="Grupo 4" transform="translate(127 -633)">
      <ellipse
        data-name="Elipse 4"
        cx={25}
        cy={25.5}
        rx={25}
        ry={25.5}
        transform="translate(-127 633)"
        fill="#fff"
      />
      <path
        data-name="Icon ionic-logo-youtube"
        d="M-89.5 653.2a3.846 3.846 0 0 0-3.664-4.022 178.715 178.715 0 0 0-8.391-.178h-.891c-2.85 0-5.65.049-8.391.178a3.854 3.854 0 0 0-3.654 4.027c-.124 1.762-.178 3.523-.173 5.285s.049 3.523.168 5.289a3.859 3.859 0 0 0 3.656 4.032c2.88.134 5.833.193 8.836.188s5.952-.049 8.836-.188a3.86 3.86 0 0 0 3.661-4.032c.119-1.766.173-3.528.168-5.294s-.043-3.523-.161-5.285Zm-14.923 10.143v-9.722l7.174 4.859Z"
        fill="red"
      />
    </g>
  </svg>
)

export default SvgComponent

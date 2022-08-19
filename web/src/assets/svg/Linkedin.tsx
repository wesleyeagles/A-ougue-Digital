import * as React from "react"

const SvgComponent = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={50} height={51} {...props}>
    <g data-name="Grupo 3" transform="translate(127 -561)">
      <ellipse
        data-name="Elipse 3"
        cx={25}
        cy={25.5}
        rx={25}
        ry={25.5}
        transform="translate(-127 561)"
        fill="#fff"
      />
      <path
        data-name="Icon awesome-linkedin-in"
        d="M-107.828 596.808h-5.08v-16.346h5.08Zm-2.54-18.576a2.954 2.954 0 1 1 2.939-2.968 2.964 2.964 0 0 1-2.939 2.968Zm21.538 18.576h-5.065v-7.957c0-1.9-.038-4.328-2.639-4.328-2.639 0-3.044 2.06-3.044 4.192v8.094h-5.07v-16.347h4.868v2.23h.072a5.334 5.334 0 0 1 4.8-2.64c5.137 0 6.082 3.383 6.082 7.777v8.979Z"
        fill="red"
      />
    </g>
  </svg>
)

export default SvgComponent

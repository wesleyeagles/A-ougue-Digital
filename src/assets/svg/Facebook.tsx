import * as React from "react"

const SvgComponent = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={50} height={51} {...props}>
    <g data-name="Grupo 2" transform="translate(127 -489)">
      <ellipse
        data-name="Elipse 2"
        cx={25}
        cy={25.5}
        rx={25}
        ry={25.5}
        transform="translate(-127 489)"
        fill="#fff"
      />
      <path
        data-name="Icon awesome-facebook-f"
        d="m-95.336 516.29.8-5.183h-4.978v-3.363a2.591 2.591 0 0 1 2.922-2.8h2.261v-4.413a27.571 27.571 0 0 0-4.013-.35c-4.1 0-6.773 2.482-6.773 6.976v3.95h-4.553v5.183h4.553v12.53h5.6v-12.53Z"
        fill="red"
      />
    </g>
  </svg>
)

export default SvgComponent

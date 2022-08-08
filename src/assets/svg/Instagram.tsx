import * as React from "react"

const SvgComponent = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={50} height={51} {...props}>
    <g data-name="Grupo 1" transform="translate(127 -423)">
      <ellipse
        data-name="Elipse 1"
        cx={25}
        cy={25.5}
        rx={25}
        ry={25.5}
        transform="translate(-127 423)"
        fill="#fff"
      />
      <path
        data-name="Icon awesome-instagram"
        d="M-101.997 440.421a8.079 8.079 0 1 0 8.079 8.079 8.066 8.066 0 0 0-8.079-8.079Zm0 13.331a5.252 5.252 0 1 1 5.252-5.252 5.262 5.262 0 0 1-5.252 5.252Zm10.294-13.661a1.884 1.884 0 1 1-1.885-1.884 1.88 1.88 0 0 1 1.885 1.884Zm5.349 1.916a9.325 9.325 0 0 0-2.545-6.6 9.387 9.387 0 0 0-6.6-2.545c-2.6-.148-10.4-.148-13 0a9.373 9.373 0 0 0-6.6 2.538 9.356 9.356 0 0 0-2.545 6.6c-.148 2.6-.148 10.4 0 13a9.325 9.325 0 0 0 2.545 6.6 9.4 9.4 0 0 0 6.6 2.545c2.6.148 10.4.148 13 0a9.325 9.325 0 0 0 6.6-2.545 9.387 9.387 0 0 0 2.545-6.6c.148-2.6.148-10.392 0-12.994Zm-3.359 15.781a5.318 5.318 0 0 1-3 3c-2.074.823-7 .633-9.288.633s-7.221.183-9.288-.633a5.318 5.318 0 0 1-3-3c-.823-2.074-.633-7-.633-9.288s-.183-7.221.633-9.288a5.318 5.318 0 0 1 3-3c2.074-.823 7-.633 9.288-.633s7.221-.183 9.288.633a5.318 5.318 0 0 1 3 3c.823 2.074.633 7 .633 9.288s.189 7.221-.633 9.288Z"
        fill="red"
      />
    </g>
  </svg>
)

export default SvgComponent
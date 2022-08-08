import * as React from "react"

const SvgComponent = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={25} {...props}>
    <path
      data-name="Icon awesome-google"
      d="M24 12.792C24 19.924 19.234 25 12.2 25A12.336 12.336 0 0 1 0 12.5 12.336 12.336 0 0 1 12.2 0a11.576 11.576 0 0 1 8.179 3.271l-3.323 3.266C12.713 2.247 4.638 5.473 4.638 12.5a7.74 7.74 0 0 0 7.562 7.893 6.641 6.641 0 0 0 6.925-5.388H12.2v-4.3h11.608A11.222 11.222 0 0 1 24 12.792Z"
      fill="#fff"
    />
  </svg>
)

export default SvgComponent

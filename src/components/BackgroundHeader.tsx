import { ReactNode } from "react"

type BackgroundProps = {
    imageSource?: string
    heightSize?: number
    children: ReactNode
}


export function BackgroundHeader({imageSource, heightSize, children}: BackgroundProps) {

    return (
        <div 
        style={{
            "backgroundImage": `url("${imageSource}")`,
            "height": `${heightSize}` + "vh",
            "backgroundSize": "cover",
            "width": "100%",
            "backgroundRepeat": "no-repeat",
            "display": "flex",
            "alignItems": "center",

        }}>
        {children}

        </div>
    )
}
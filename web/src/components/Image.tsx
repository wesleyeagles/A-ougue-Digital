type ImageProps = {

    source?: string;
    alt?: string;
}


export function Image({source, alt}: ImageProps) {
    return (
        <img src={source} alt={alt}></img>
    )
}
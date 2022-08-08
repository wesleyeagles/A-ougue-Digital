
interface IContainer {

    children: React.ReactNode
}

export function Container({children}: IContainer) {



    return (
        <div className="2xl:max-w-[1536px] mx-auto w-full">
            {children}
        </div>
    )
}
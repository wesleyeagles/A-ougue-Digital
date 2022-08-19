
interface IContainer {

    children: React.ReactNode
}

export function Container({children}: IContainer) {



    return (
        <div className="lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px] mx-auto w-full">
            {children}
        </div>
    )
}
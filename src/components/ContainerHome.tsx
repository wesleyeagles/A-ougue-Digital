
interface IContainer {

    children: React.ReactNode
}

export function ContainerHome({children}: IContainer) {



    return (
        <div className="xl:max-w-full mx-auto w-full">
            {children}
        </div>
    )
}
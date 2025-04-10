import { FullHeightBackgroundImg, RoofPageBreak } from '../backgroundLayer'

interface ServiceDescriptionProps {
    header: string
    description: string
    services: JSX.Element[]
    img: string
    imgAlt: string
}

export const ServiceDescription = ({
    header,
    description,
    services,
    img,
    imgAlt
}: ServiceDescriptionProps) => {
    return (
        <section className="relative h-fit">
            <FullHeightBackgroundImg />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-custom mx-auto p-6">
                <div className="text-white flex flex-col gap-8">
                    <h2 className="max-w-3xl mb-4">{header}</h2>
                    <p>{description}</p>
                    <ul className="flex flex-col gap-6">
                        {services.map(service => (
                            <li className="grid grid-cols-[2rem_1fr] gap-4">
                                <img
                                    className="h-8 w-8"
                                    src="/media/icons/RoofTop_Icon.svg"
                                    alt="roof-top icon"
                                />
                                <span>{service}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <img className="mx-auto rounded-xl" src={img} alt={imgAlt} />
            </div>
            <RoofPageBreak />
        </section>
    )
}

export const AltServiceDescription = ({
    header,
    description,
    services,
    img,
    imgAlt
}: ServiceDescriptionProps) => {
    return (
        <section className="relative h-fit bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-custom mx-auto p-6">
                <img className="mx-auto rounded-xl" src={img} alt={imgAlt} />
                <div className="text-primary flex flex-col gap-8">
                    <h2 className="max-w-3xl mb-4">{header}</h2>
                    <p>{description}</p>
                    <ul className="flex flex-col gap-6">
                        {services.map(service => (
                            <li className="grid grid-cols-[2rem_1fr] gap-4">
                                <img
                                    className="h-8 w-8"
                                    src="/media/icons/RoofTop_Icon.svg"
                                    alt="roof-top icon"
                                />
                                <span>{service}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

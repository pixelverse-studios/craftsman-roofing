import CallToAction from '@/components/CallToAction'
import ServiceStatistics from '../ServiceStatistics'
import ItemList from '@/components/ItemList'

const items = [
    <>
        <em>Enhance Protection</em>
        <br />
        New roofs improve home security, preventing leaks and damage.
    </>,
    <>
        <em>Energy Efficiency</em>
        <br />
        Up to 25% savings on energy bills with proper insulation and
        ventilation.
    </>,
    <>
        <em>Increased Property Value</em>
        <br />A new roof can increase your home’s resale value by up to 10%.
    </>,
    <>
        <em>Lasting Durability</em>
        <br />A well-installed roof can last 20–30 years, offering long-term
        protection.
    </>
]

export default function RoofReplacementStatistics() {
    return (
        <ServiceStatistics>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
                <div className="flex flex-col gap-6 items-start">
                    <h2>Expert Roof Replacement</h2>
                    <p>
                        Your roof is essential to the safety and protection of
                        your home. Over time, wear and tear can lead to leaks,
                        energy loss, and costly repairs. Our roof replacement
                        services offer peace of mind, ensuring your home stays
                        protected with high-quality, durable roofing solutions.
                        We guide you through the entire process, from selecting
                        the right materials to expert installation, providing
                        long-lasting value and reliability.
                    </p>
                    <CallToAction
                        buttonVariant
                        label="Let's Get Your Roof Replaced"
                        buttonClass="text-lg h-10"
                    />
                </div>
                <ItemList
                    items={items}
                    itemClass="grid-cols-[4rem_1fr]"
                    imgClass="bg-white h-10 w-10 p-2 rounded-full"
                />
            </div>
            <img
                className="mt-8 w-auto h-fit max-h-[40rem] mx-auto rounded-xl"
                src="/media/home/GrayHouseFront.png"
                alt=""
            />
        </ServiceStatistics>
    )
}

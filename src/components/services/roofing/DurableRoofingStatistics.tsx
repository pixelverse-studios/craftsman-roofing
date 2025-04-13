import ServiceStatistics from '../ServiceStatistics'
import CallToAction from '@/components/CallToAction'

export default function DurableRoofingStatistics() {
    return (
        <ServiceStatistics>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
                <div>
                    <h4>Durable Roofing for Long-Term Protection</h4>
                    <h2>Long-Lasting Roofs for Peace of Mind</h2>
                </div>
                <div className="flex flex-col gap-6 items-start">
                    <p>
                        With proper maintenance, your roof can last up to 30
                        years, boost energy efficiency, and add value to your
                        home. Regular inspections and timely repairs can extend
                        its lifespan by 50%.
                    </p>
                    <CallToAction
                        buttonVariant
                        buttonClass="text-lg h-10"
                        label="Your Free Roofing Estimate"
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                <div className="bg-white p-6 rounded-xl text-center flex flex-col gap-6">
                    <img
                        src="/media/icons/RoofTop_Icon.svg"
                        alt="rooftop-icon"
                        className="h-12 w-12 bg-primary p-2 rounded-full mx-auto"
                    />
                    <p className="text-4xl font-bold">15-30 yrs</p>
                    <p className="text-sm text-gray-500">Average Roof Life</p>
                </div>
                <div className="bg-white p-6 rounded-xl text-center flex flex-col gap-6">
                    <img
                        src="/media/icons/RoofTop_Icon.svg"
                        alt="rooftop-icon"
                        className="h-12 w-12 bg-primary p-2 rounded-full mx-auto"
                    />
                    <p className="text-4xl font-bold">Up to 25%</p>
                    <p className="text-sm text-gray-500">
                        Average Energy Savings
                    </p>
                </div>
                <div className="bg-white p-6 rounded-xl text-center flex flex-col gap-6">
                    <img
                        src="/media/icons/RoofTop_Icon.svg"
                        alt="rooftop-icon"
                        className="h-12 w-12 bg-primary p-2 rounded-full mx-auto"
                    />
                    <p className="text-4xl font-bold">5-10 yrs</p>
                    <p className="text-sm text-gray-500">Repair Frequency</p>
                </div>
                <div className="bg-white p-6 rounded-xl text-center flex flex-col gap-6">
                    <img
                        src="/media/icons/RoofTop_Icon.svg"
                        alt="rooftop-icon"
                        className="h-12 w-12 bg-primary p-2 rounded-full mx-auto"
                    />
                    <p className="text-4xl font-bold">+50% life</p>
                    <p className="text-sm text-gray-500">Maintenance Impact</p>
                </div>
            </div>
        </ServiceStatistics>
    )
}

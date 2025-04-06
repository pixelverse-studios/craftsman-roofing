import CallToAction from '../CallToAction'
import { FullHeightBackgroundImg, RoofPageBreak } from '../backgroundLayer'

export default function OurCompany() {
    return (
        <section className="relative pt-24">
            <FullHeightBackgroundImg />
            <div className="max-w-custom mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center relative">
                    <div className="text-white space-y-8">
                        <h2 className="text-4xl font-bold">Our Company</h2>
                        <div className="space-y-6">
                            <p>
                                Welcome to{' '}
                                <span className="font-bold">
                                    Craftsman Roofing
                                </span>
                                , where quality craftsmanship meets exceptional
                                customer service. With years of experience in
                                the roofing, siding, gutter, and masonry
                                industries, we have built a reputation for
                                providing reliable and long-lasting exterior
                                solutions that homeowners can trust.
                            </p>
                            <p>
                                Our mission is simple: to deliver superior
                                results with every project, ensuring that your
                                home remains protected and visually appealing
                                for years to come. Whether you're in need of a
                                new roof, durable siding, efficient gutter
                                systems, or expert masonry work, Craftsman
                                Roofing is here to exceed your expectations.
                            </p>
                            <ul className="flex flex-col gap-4 pb-8">
                                <li className="grid grid-cols-[2rem_1fr] gap-4">
                                    <img
                                        className="h-8 w-8"
                                        src="/media/icons/RoofTop_Icon.svg"
                                        alt="roof-top icon"
                                    />
                                    <p>
                                        <span className="font-bold">
                                            Expert Craftsmanship
                                        </span>
                                        :<br /> Our skilled professionals ensure
                                        every roofing project is completed with
                                        precision and attention to detail.
                                    </p>
                                </li>
                                <li className="grid grid-cols-[2rem_1fr] gap-4">
                                    <img
                                        className="h-8 w-8"
                                        src="/media/icons/RoofTop_Icon.svg"
                                        alt="roof-top icon"
                                    />
                                    <p>
                                        <span className="font-bold">
                                            High-Quality Materials
                                        </span>
                                        :
                                        <br /> We use only the best materials to
                                        provide long-lasting and durable roofing
                                        solutions.
                                    </p>
                                </li>
                                <li className="grid grid-cols-[2rem_1fr] gap-4">
                                    <img
                                        className="h-8 w-8"
                                        src="/media/icons/RoofTop_Icon.svg"
                                        alt="roof-top icon"
                                    />
                                    <p>
                                        <span className="font-bold">
                                            Customer Satisfaction
                                        </span>
                                        :
                                        <br /> Your satisfaction is our top
                                        priority, with reliable services backed
                                        by warranties for peace of mind.
                                    </p>
                                </li>
                                <li className="grid grid-cols-[2rem_1fr] gap-4">
                                    <img
                                        className="h-8 w-8"
                                        src="/media/icons/RoofTop_Icon.svg"
                                        alt="roof-top icon"
                                    />
                                    <p>
                                        <span className="font-bold">
                                            Comprehensive Services
                                        </span>
                                        :
                                        <br />
                                        From repairs to new installations, we
                                        cover all your roofing needs with
                                        guaranteed reliability.
                                    </p>
                                </li>
                            </ul>
                            <CallToAction
                                label="Get In Touch With Us Today"
                                buttonClass="mt-8"
                            />
                        </div>
                    </div>
                    {/* <div className="grid grid-cols-6 grid-rows-6 gap-3 h-[500px] w-full px-4 py-4"> */}
                    <div className="relative h-[520px] w-full bg-pattern px-6 py-6 rounded-xl overflow-hidden">
                        {/* Logo */}
                        <div className="absolute top-0 left-0 w-16 h-16 bg-white rounded-md p-2 shadow-lg z-30">
                            <img
                                src="/media/roofing-badge.png"
                                alt="Logo"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Top Roof Image with angled bottom */}
                        <div className="absolute top-0 left-20 right-0 h-[200px] rounded-xl overflow-hidden shadow-lg z-20 clip-bottom-angle">
                            <img
                                src="/media/home/RoofHouse.png"
                                alt="Roof Close-up"
                                className="w-full h-full object-cover clip-2"
                            />
                        </div>

                        {/* Left House Image */}
                        <div className="absolute bottom-0 left-0 w-[260px] h-[300px] rounded-xl overflow-hidden shadow-lg z-10">
                            <img
                                src="/media/home/BrickHouseFront.png"
                                alt="Left house"
                                className="w-full h-full object-cover clip-3"
                            />
                        </div>

                        {/* Right House Image */}
                        <div className="absolute top-[85%] right-0 w-[320px] h-[200px] rounded-xl overflow-hidden shadow-lg transform -translate-y-1/2 z-10">
                            <img
                                src="/media/home/GrayHouseFront.png"
                                alt="Right house"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>
            <RoofPageBreak />
        </section>
    )
}

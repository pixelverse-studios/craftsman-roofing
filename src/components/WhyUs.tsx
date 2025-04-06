import React from 'react'
import { Button } from '@/components/ui/button'
import FullHeightBackgroundImg from './backgroundLayer/FullHeightBackgroundImg'
import { RoofPageBreak } from './backgroundLayer'

const WhyUs = () => {
    return (
        <section className="relative pt-24">
            <FullHeightBackgroundImg />
            <div className="max-w-[var(--max-width)] mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center relative">
                    {/* Left Column - Text Content */}
                    <div className="text-white space-y-8">
                        <div className="space-y-2">
                            <h3 className="text-lg text-gray-300">
                                Why choose us?
                            </h3>
                            <h2 className="text-4xl font-bold">Our Company</h2>
                        </div>

                        <div className="space-y-6">
                            <p className="text-gray-300 leading-relaxed">
                                At Craftsman Roofing, we are committed to
                                providing homeowners with reliable, high-quality
                                exterior solutions that stand the test of time.
                                With years of experience in roofing, siding,
                                gutters, and masonry, our team combines industry
                                expertise with a customer-focused approach. We
                                take pride in delivering exceptional results on
                                every project, big or small.
                            </p>

                            <p className="text-gray-300 leading-relaxed">
                                Why choose us? Because we believe in doing
                                things right the first time. Our skilled
                                professionals use top-tier materials and
                                advanced techniques to ensure your home stays
                                protected and looks its best. From our
                                transparent communication to our unwavering
                                dedication to excellence, we aim to exceed your
                                expectations at every turn.
                            </p>

                            <Button
                                variant="default"
                                className="bg-red-700 hover:bg-red-800 text-white px-8"
                            >
                                Learn More
                            </Button>
                        </div>
                    </div>

                    <div className="relative hidden lg:block h-[500px] w-full p-4">
                        {/* Background pattern - optional */}
                        <div className="absolute inset-0 bg-navy-800 -z-10">
                            {/* You could add a pattern here if desired */}
                        </div>

                        {/* Logo (top left) */}
                        <div className="absolute top-4 left-4 w-16 h-16 shadow-lg p-1 z-30">
                            <img
                                src="/media/roofing-badge.png"
                                alt="Logo"
                                className="w-full h-full object-contain rounded-xl"
                            />
                        </div>

                        {/* Top Roof Image (Main angled piece) */}
                        <div className="absolute top-4 left-24 right-4 h-[250px] rounded-lg overflow-hidden shadow-lg z-10">
                            <img
                                src="/media/home/RoofHouse.png"
                                alt="Roof Close-up"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Left House Image */}
                        <div className="absolute bottom-4 left-4 w-[280px] h-[220px] rounded-lg overflow-hidden shadow-lg z-20">
                            <img
                                src="/media/home/BrickHouseFront.png"
                                alt="Left house"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Bottom Right House with Garage */}
                        <div className="absolute bottom-4 right-4 w-[400px] h-[220px] rounded-lg overflow-hidden shadow-lg z-10">
                            <img
                                src="/media/home/GrayHouseFront.png"
                                alt="Right house"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Mobile Image Stack */}
                    <div className="lg:hidden space-y-4">
                        <div className="w-full aspect-video rounded-lg overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1739641375724-dfea74e0df69?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Modern house exterior"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="w-full aspect-video rounded-lg overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1739641375724-dfea74e0df69?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="House with garage"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <RoofPageBreak />
        </section>
    )
}

export default WhyUs

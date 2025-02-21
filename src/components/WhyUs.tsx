import React from 'react'
import { Button } from '@/components/ui/button'

const WhyUs = () => {
    return (
        <section className="relative bg-[#0A0F29] py-24">
            {/* Background Pattern */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0A30 30 0 0 1 30 60A30 30 0 0 1 30 0' fill='%23ffffff' fill-opacity='0.4'/%3E%3C/svg%3E")`,
                    backgroundSize: '60px 60px'
                }}
            />

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

                    {/* Right Column - Image Grid */}
                    <div className="relative h-[500px] hidden lg:block">
                        {/* Top small square image */}
                        <div className="absolute top-0 right-0 w-32 h-32 rounded-lg overflow-hidden shadow-lg">
                            <img
                                src="https://images.unsplash.com/photo-1739641375724-dfea74e0df69?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Company icon"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Main center image */}
                        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-[400px] h-[300px] rounded-lg overflow-hidden shadow-lg z-10">
                            <img
                                src="https://images.unsplash.com/photo-1739641375724-dfea74e0df69?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Modern house exterior"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Bottom right image */}
                        <div className="absolute bottom-0 right-0 w-[350px] h-[200px] rounded-lg overflow-hidden shadow-lg">
                            <img
                                src="https://images.unsplash.com/photo-1739641375724-dfea74e0df69?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="House with garage"
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
        </section>
    )
}

export default WhyUs

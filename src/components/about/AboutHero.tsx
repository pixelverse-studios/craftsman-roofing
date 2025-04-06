import CallToAction from '../CallToAction'

export default function AboutHeroSection() {
    return (
        <section className="relative h-fit p-6">
            <div
                style={{
                    backgroundImage: 'url("/media/home/Hero_BG.png")'
                }}
                className={`absolute inset-0 bg-cover bg-center z-0`}
            >
                <div className="absolute inset-0" />
            </div>
            <div className="relative max-w-custom mx-auto py-24 px-4 text-center flex flex-col gap-4">
                <h1 className="text-white font-bold text-center">
                    About Craftsman Roofing — Trusted Roofing Experts
                </h1>
                <p className="text-white text-center mb-6">
                    Specializing in roofing, siding, masonry, and gutter
                    services. We provide expert solutions to protect and enhance
                    your home. Our team delivers reliable craftsmanship and
                    lasting results for a secure, beautiful property.
                </p>
                <CallToAction
                    label="Book Your Free Estimate"
                    buttonClass="mx-auto h-14 text-2xl"
                />
            </div>
        </section>
    )
}

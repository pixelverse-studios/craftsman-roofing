import HeroBg from '../HeroBg'
import CallToAction from '../CallToAction'

export default function ServicesHero() {
    return (
        <section className="relative h-fit p-6">
            <HeroBg />
            <div className="relative max-w-custom mx-auto py-24 px-4">
                <div className="text-center text-white space-y-6">
                    <h1 className="mx-auto">
                        Professional Exterior Home Services: Roofing, Siding,
                        Masonry & Gutters
                    </h1>
                    <p className="text-xl md:text-xl max-w-3xl mx-auto">
                        We provide expert roof installation, repair, and
                        replacement solutions to protect your home with lasting
                        quality and performance.
                    </p>
                    <CallToAction
                        label="Book Your Free Estimate"
                        buttonClass="h-[4rem] text-2xl"
                    />
                </div>
            </div>
        </section>
    )
}

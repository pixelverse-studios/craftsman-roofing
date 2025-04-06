import CallToAction from '../../CallToAction'

export default function RoofServicesHero() {
    return (
        <section className="relative h-fit p-6">
            <div
                style={{
                    backgroundImage: 'url("/media/home/Hero_BG.png")'
                }}
                className={`absolute inset-0 bg-cover bg-center`}
            >
                <div className="absolute inset-0" />
            </div>
            <div className="relative max-w-custom mx-auto py-24 px-4">
                <div className="text-center text-white space-y-6">
                    <h1 className="text-5xl md:text-5xl font-bold max-w-4xl mx-auto">
                        Professional Roofing Services You Can Count On
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

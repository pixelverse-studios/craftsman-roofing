import CallToAction from '../CallToAction'

const ContactBanner = () => {
    return (
        <section className="bg-white py-6 border-b border-red-700">
            <div className="max-w-[var(--max-width)] mx-auto px-6">
                <div className="flex flex-row justify-between items-center gap-4">
                    <h2 className="text-2xl text-red-700 font-semibold">
                        Contact Us
                    </h2>
                    <CallToAction label="Get Started" />
                </div>
            </div>
        </section>
    )
}

export default ContactBanner

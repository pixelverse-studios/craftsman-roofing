import CallToAction from '../CallToAction'

interface ContactBannerProps {
    message: string
    button: string
}

const ContactBanner = ({ message, button }: ContactBannerProps) => {
    return (
        <section className="bg-white py-6 border-b border-red-700">
            <div className="max-w-custom mx-auto px-6">
                <div className="flex flex-row justify-between items-center gap-4">
                    <h2 className="text-2xl text-red-700 font-semibold">
                        {message}
                    </h2>
                    <CallToAction label={button} />
                </div>
            </div>
        </section>
    )
}

export default ContactBanner

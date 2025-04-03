import { Card, CardContent } from '@/components/ui/card'
import FullHeightBackgroundImg from '../backgroundLayer/FullHeightBackgroundImg'
import CallToAction from '../CallToAction'

const CTASection = () => {
    return (
        <section className="relative w-full py-16">
            <FullHeightBackgroundImg />
            <Card className="relative max-w-4xl mx-auto bg-transparent border-0 shadow-none">
                <CardContent className="p-6 text-center text-white space-y-8">
                    <img
                        src="/media/icons/RoofTop_Icon.svg"
                        alt="rooftop icon"
                        className="mx-auto "
                    />
                    <div className="space-y-4">
                        <h2 className="text-4xl font-bold">
                            Talk to us about your next investment
                        </h2>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                            Let's discuss your investment goals and find the
                            perfect opportunity for you. Our team of experts is
                            ready to help you make informed decisions.
                        </p>
                    </div>
                    <CallToAction label="Contact Us" />
                </CardContent>
            </Card>
        </section>
    )
}

export default CTASection

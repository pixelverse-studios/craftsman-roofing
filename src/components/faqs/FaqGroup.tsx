import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from '@/components/ui/accordion'
import { cn } from '@/lib/utils'

interface FAQItem {
    question: string
    answer: string
}
interface FAQSectionProps {
    faqs: FAQItem[]
    title?: string
}

export default function FaqGroup({ faqs, title }: FAQSectionProps) {
    return (
        <section className="p-8">
            <h2
                className={`mx-auto text-center mb-6 ${title == undefined ? 'hidden' : ''}`}
            >
                {title}
            </h2>
            <Accordion
                type="multiple"
                className={cn('w-full max-w-4xl mx-auto space-y-2')}
            >
                {faqs.map(faq => (
                    <AccordionItem
                        value={faq.question}
                        key={faq.question}
                        className="border border-gray-200 rounded-lg bg-white-bright shadow-xl"
                    >
                        <AccordionTrigger className="px-4 py-3 pb-1 text-xl font-semibold text-gray-800 hover:text-black transition-all duration-300 hover:no-underline">
                            {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="px-4 py-3 text-gray-600 text-lg">
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    )
}

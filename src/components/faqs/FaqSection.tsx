import React, { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

interface FAQItem {
    question: string
    answer: string
    isOpen: boolean
}

const FAQSection = () => {
    const [faqs, setFaqs] = useState<FAQItem[]>([
        {
            question: 'What types of roofing materials do you work with?',
            answer: 'We work with a variety of materials, including asphalt shingles, metal, slate, and more. Our team can help you choose the best option for your home and budget.',
            isOpen: true
        },
        {
            question: 'How do I know if my siding needs to be replaced?',
            answer: "Common signs include cracking, warping, fading, high energy bills, or visible damage. Our experts can perform a thorough inspection to assess your siding's condition and recommend appropriate solutions.",
            isOpen: false
        },
        {
            question: 'Do you offer gutter cleaning services?',
            answer: "Yes, we provide comprehensive gutter cleaning services to ensure proper water drainage and prevent damage to your home's foundation. We recommend regular maintenance to keep your gutters functioning efficiently.",
            isOpen: false
        },
        {
            question: 'Can you match new masonry to my existing design?',
            answer: 'Yes, our skilled masons are experienced in matching new work to existing masonry. We carefully select materials and techniques to ensure seamless integration with your current design.',
            isOpen: false
        },
        {
            question: 'Are your services covered by a warranty?',
            answer: "Yes, all our services come with comprehensive warranties. The specific coverage varies by service type and materials used. We'll provide detailed warranty information before beginning any work.",
            isOpen: false
        },
        {
            question: 'How long does a typical roofing project take?',
            answer: "Project duration varies depending on the size and complexity of the job. Most residential roofing projects are completed within 1-3 days. We'll provide a detailed timeline during your consultation.",
            isOpen: false
        }
    ])

    const toggleFAQ = (index: number) => {
        setFaqs(
            faqs.map((faq, i) => ({
                ...faq,
                isOpen: i === index ? !faq.isOpen : false
            }))
        )
    }

    return (
        <section className="py-16 bg-white">
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">
                    Frequently asked questions
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-gray-200">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full py-4 flex justify-between items-center text-left"
                            >
                                <span className="text-lg font-medium">
                                    {faq.question}
                                </span>
                                <span className="ml-6 flex-shrink-0 text-red-600">
                                    {faq.isOpen ? (
                                        <Minus className="h-6 w-6" />
                                    ) : (
                                        <Plus className="h-6 w-6" />
                                    )}
                                </span>
                            </button>

                            <div
                                className={`grid transition-[grid-template-rows,opacity] duration-200 ease-in-out ${
                                    faq.isOpen
                                        ? 'grid-rows-[1fr] opacity-100'
                                        : 'grid-rows-[0fr] opacity-0'
                                }`}
                            >
                                <div className="overflow-hidden">
                                    <p className="text-gray-600 pb-4">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FAQSection

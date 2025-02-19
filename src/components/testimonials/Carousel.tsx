import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from '@/components/ui/carousel'

interface Testimonial {
    id: number
    content: string
    author: string
    image: string
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        content:
            "I had my roof done by them 2 years ago. It was a great experience. I just discovered a minor leak. I called them this morning, they came right out and fixed it. They even checked for other potential problem areas... Very quick, easy, and professional. Great company to work with! It's great to know they honor their work. Highly recommend!",
        author: 'Joshua Bray',
        image: '/api/placeholder/40/40'
    },
    {
        id: 2,
        content:
            'Excellent service from start to finish. The team was professional, courteous, and completed the work ahead of schedule. Our new roof looks fantastic!',
        author: 'Sarah Johnson',
        image: '/api/placeholder/40/40'
    },
    {
        id: 3,
        content:
            'The quality of work is outstanding. They took the time to explain everything and answer all our questions. Would definitely recommend to anyone needing roofing work.',
        author: 'Michael Chen',
        image: '/api/placeholder/40/40'
    },
    {
        id: 4,
        content:
            'Very impressed with their attention to detail and customer service. They went above and beyond to ensure we were satisfied with the final result.',
        author: 'Emily Rodriguez',
        image: '/api/placeholder/40/40'
    },
    {
        id: 5,
        content:
            'Professional, reliable, and thorough. They handled our complex roofing project with expertise and kept us informed throughout the entire process.',
        author: 'David Thompson',
        image: '/api/placeholder/40/40'
    }
]

const TestimonialsCarousel = () => {
    return (
        <section className="bg-[#0A0F29] py-16 relative overflow-hidden">
            {/* Red accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent" />

            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Customer testimonials
                    </h2>
                </div>

                <Carousel
                    opts={{
                        align: 'center',
                        loop: true
                    }}
                    className="w-full"
                >
                    <CarouselContent>
                        {testimonials.map(testimonial => (
                            <CarouselItem key={testimonial.id}>
                                <div className="p-4">
                                    <div className="bg-white rounded-2xl p-8 text-center">
                                        <div className="flex justify-center mb-6">
                                            <img
                                                src="/api/placeholder/40/40"
                                                alt={`${testimonial.author}'s Google review`}
                                                className="rounded-full"
                                                width={40}
                                                height={40}
                                            />
                                        </div>
                                        <p className="text-gray-700 mb-6">
                                            {testimonial.content}
                                        </p>
                                        <p className="font-semibold">
                                            {testimonial.author}
                                        </p>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <div className="hidden md:block">
                        <CarouselPrevious className="h-12 w-12 border-2" />
                        <CarouselNext className="h-12 w-12 border-2" />
                    </div>
                </Carousel>

                {/* Dots */}
                <div className="flex justify-center gap-2 mt-6">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`h-2 w-2 rounded-full ${
                                index === 0 ? 'bg-red-600' : 'bg-gray-400'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TestimonialsCarousel

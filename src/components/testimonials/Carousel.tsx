import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from '@/components/ui/carousel'
import FullHeightBackgroundImg from '../backgroundLayer/FullHeightBackgroundImg'
import PageBreakImg from '../../../public/media/PageBreakSlice.svg'
// import PageBreakImg from '../../../public/media/PageBreakDesign.png'
import GoogleIcon from '../../../public/media/icons/Google_Icon.svg'

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
        image: GoogleIcon.src
    },
    {
        id: 2,
        content:
            'Excellent service from start to finish. The team was professional, courteous, and completed the work ahead of schedule. Our new roof looks fantastic!',
        author: 'Sarah Johnson',
        image: GoogleIcon.src
    },
    {
        id: 3,
        content:
            'The quality of work is outstanding. They took the time to explain everything and answer all our questions. Would definitely recommend to anyone needing roofing work.',
        author: 'Michael Chen',
        image: GoogleIcon.src
    },
    {
        id: 4,
        content:
            'Very impressed with their attention to detail and customer service. They went above and beyond to ensure we were satisfied with the final result.',
        author: 'Emily Rodriguez',
        image: GoogleIcon.src
    },
    {
        id: 5,
        content:
            'Professional, reliable, and thorough. They handled our complex roofing project with expertise and kept us informed throughout the entire process.',
        author: 'David Thompson',
        image: GoogleIcon.src
    }
]

const TestimonialsCarousel = () => {
    return (
        <section className="py-16 bg-[hsl(var(--off-white))] relative overflow-hidden">
            <div className="py-8">
                <div className="max-w-7xl mx-auto px-4  flex flex-col gap-2">
                    <img
                        src={GoogleIcon.src}
                        alt="google logo"
                        className="mx-auto mb-4"
                    />
                    <div className="text-center">
                        <h2 className="text-4xl font-bold text-[hsl(var(--primary))] mb-6">
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
                                        <div className="rounded-2xl p-8 text-center">
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
                            <CarouselPrevious className="h-14 w-14 border-2 border-[hsl(var(--secondary))]" />
                            <CarouselNext className="h-14 w-14 border-2 border-[hsl(var(--secondary))]" />
                        </div>
                    </Carousel>

                    {/* Dots */}
                    <div className="flex justify-center gap-4 mt-6">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                className={`h-4 w-4 rounded-full ${
                                    index === 0
                                        ? 'bg-red-600'
                                        : 'bg-[hsl(var(--nav))]'
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TestimonialsCarousel

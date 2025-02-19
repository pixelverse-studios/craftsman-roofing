import React from 'react'

const projects = [
    {
        id: 1,
        image: '/api/placeholder/400/300',
        aspectShort: true
    },
    {
        id: 2,
        image: '/api/placeholder/400/500',
        aspectShort: false
    },
    {
        id: 3,
        image: '/api/placeholder/400/300',
        aspectShort: true
    },
    {
        id: 4,
        image: '/api/placeholder/400/500',
        aspectShort: false
    }
]

const ProjectsSection = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">Our Projects</h2>
                    <p className="text-gray-600">
                        We are proud to present some of our latest projects
                    </p>
                </div>

                {/* Grid Container */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {/* Column 1 */}
                    <div className="space-y-4">
                        <div className="aspect-[4/3]">
                            <img
                                src="https://images.unsplash.com/photo-1739641375724-dfea74e0df69?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Project 1"
                                className="w-full h-full object-cover rounded-lg hover:opacity-90 transition-all duration-300"
                            />
                        </div>
                        <div className="aspect-[4/5]">
                            <img
                                src="https://images.unsplash.com/photo-1739641375724-dfea74e0df69?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Project 2"
                                className="w-full h-full object-cover rounded-lg hover:opacity-90 transition-all duration-300"
                            />
                        </div>
                        <div className="aspect-[4/3]">
                            <img
                                src="https://images.unsplash.com/photo-1739641375724-dfea74e0df69?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Project 3"
                                className="w-full h-full object-cover rounded-lg hover:opacity-90 transition-all duration-300"
                            />
                        </div>
                        <div className="aspect-[4/5]">
                            <img
                                src="https://images.unsplash.com/photo-1739641375724-dfea74e0df69?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Project 4"
                                className="w-full h-full object-cover rounded-lg hover:opacity-90 transition-all duration-300"
                            />
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="space-y-4">
                        <div className="aspect-[4/5]">
                            <img
                                src="https://images.unsplash.com/photo-1739641375724-dfea74e0df69?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Project 5"
                                className="w-full h-full object-cover rounded-lg hover:opacity-90 transition-all duration-300"
                            />
                        </div>
                        <div className="aspect-[4/3]">
                            <img
                                src="https://images.unsplash.com/photo-1739641375724-dfea74e0df69?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Project 6"
                                className="w-full h-full object-cover rounded-lg hover:opacity-90 transition-all duration-300"
                            />
                        </div>
                        <div className="aspect-[4/5]">
                            <img
                                src="https://images.unsplash.com/photo-1739641375724-dfea74e0df69?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Project 7"
                                className="w-full h-full object-cover rounded-lg hover:opacity-90 transition-all duration-300"
                            />
                        </div>
                        <div className="aspect-[4/3]">
                            <img
                                src="https://images.unsplash.com/photo-1739641375724-dfea74e0df69?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Project 8"
                                className="w-full h-full object-cover rounded-lg hover:opacity-90 transition-all duration-300"
                            />
                        </div>
                    </div>

                    {/* Column 3 */}
                    <div className="space-y-4">
                        <div className="aspect-[4/3]">
                            <img
                                src="https://images.unsplash.com/photo-1739641375724-dfea74e0df69?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Project 9"
                                className="w-full h-full object-cover rounded-lg hover:opacity-90 transition-all duration-300"
                            />
                        </div>
                        <div className="aspect-[4/5]">
                            <img
                                src="https://images.unsplash.com/photo-1739641375724-dfea74e0df69?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Project 10"
                                className="w-full h-full object-cover rounded-lg hover:opacity-90 transition-all duration-300"
                            />
                        </div>
                        <div className="aspect-[4/3]">
                            <img
                                src="https://images.unsplash.com/photo-1739641375724-dfea74e0df69?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Project 11"
                                className="w-full h-full object-cover rounded-lg hover:opacity-90 transition-all duration-300"
                            />
                        </div>
                        <div className="aspect-[4/5]">
                            <img
                                src="https://images.unsplash.com/photo-1739641375724-dfea74e0df69?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Project 12"
                                className="w-full h-full object-cover rounded-lg hover:opacity-90 transition-all duration-300"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection

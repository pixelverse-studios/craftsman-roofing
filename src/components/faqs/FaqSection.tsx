const FAQSection = ({ children }: { children: any }) => {
    return (
        <section className="py-16">
            <div className="max-w-custom mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-4">
                    Frequently asked questions
                </h2>
                {children}
            </div>
        </section>
    )
}

export default FAQSection

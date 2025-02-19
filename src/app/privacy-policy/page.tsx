'use client'

import { Card, CardContent } from '@/components/ui/card'

export default function PrivacyPolicyPage() {
    return (
        <main>
            <div className="max-w-4xl mx-auto px-4 py-16">
                <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

                <div className="space-y-8">
                    <section className="prose prose-gray max-w-none">
                        <p className="text-gray-600 leading-relaxed">
                            This Privacy Policy describes how your personal
                            information is collected, used, and shared when you
                            visit craftsman-roofing.ch (the "Site").
                        </p>

                        <p className="text-gray-600 leading-relaxed">
                            Protecting your private information is our priority.
                            This Statement of Privacy applies to
                            craftsman-roofing.ch and governs data collection and
                            usage. We have developed this policy in order for
                            you to understand how we collect, use, communicate
                            and make use of personal information.
                        </p>
                    </section>

                    <Card className="bg-gray-50">
                        <CardContent className="p-6">
                            <h2 className="text-2xl font-semibold mb-4">
                                Introduction
                            </h2>
                            <div className="space-y-4">
                                <p className="text-gray-600">
                                    This Policy sets out the conditions under
                                    which we may process any information that we
                                    collect from you, or that you provide to us.
                                    It covers information that could identify
                                    you ("personal information") and information
                                    that could not.
                                </p>
                                <ol className="list-decimal list-inside space-y-2 text-gray-600">
                                    <li>
                                        We take seriously the protection of your
                                        privacy and confidentiality. We
                                        understand that all visitors to our
                                        website are entitled to know that their
                                        personal data will not be used for any
                                        purpose unintended by them.
                                    </li>
                                    <li>
                                        Craftsman Roofing undertakes to preserve
                                        the confidentiality of all information
                                        you provide to us.
                                    </li>
                                    <li>
                                        The law requires us to tell you about
                                        your rights and our obligations to you
                                        regarding the processing and control of
                                        your personal data.
                                    </li>
                                </ol>
                            </div>
                        </CardContent>
                    </Card>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">
                            Collection of Your Personal Information
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            Craftsman Roofing may collect personally
                            identifiable information such as:
                        </p>
                        <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600">
                            <li>Name</li>
                            <li>Phone Number</li>
                            <li>E-mail Address</li>
                        </ul>
                    </section>

                    <Card className="bg-gray-50">
                        <CardContent className="p-6">
                            <h2 className="text-2xl font-semibold mb-4">
                                What Information Do We Collect and Why?
                            </h2>
                            <div className="space-y-4">
                                <p className="text-gray-600">
                                    We may collect information about you
                                    directly from you, as well as automatically
                                    through your use of our Site or Services.
                                </p>
                                <div className="space-y-2">
                                    <p className="font-medium">
                                        Information We Collect Directly from
                                        You:
                                    </p>
                                    <p className="text-gray-600">
                                        Certain areas and features of our Site
                                        and Services require your Name, email
                                        address, and contact details.
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <p className="font-medium">
                                        Information We Collect Automatically:
                                    </p>
                                    <p className="text-gray-600">
                                        We may automatically collect information
                                        about your use of our Site including the
                                        length of time you visit our Site and
                                        your movement through our Site.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">
                            GDPR Compliance
                        </h2>
                        <p className="text-gray-600 mb-4">
                            If you are a resident of the European Economic Area
                            (EEA), you have certain data protection rights:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                            <li>The right to access your personal data</li>
                            <li>
                                The right to rectification of inaccurate data
                            </li>
                            <li>The right to erasure of your data</li>
                            <li>
                                The right to object to certain processing
                                activities
                            </li>
                            <li>The right to data portability</li>
                        </ul>
                    </section>

                    <Card className="bg-gray-50">
                        <CardContent className="p-6">
                            <h2 className="text-2xl font-semibold mb-4">
                                Contact Information
                            </h2>
                            <p className="text-gray-600">
                                If you would like to: access, correct, register
                                a complaint, or simply want more information
                                please contact us at:
                            </p>
                            <p className="mt-2 text-gray-800 font-medium">
                                Email: info@craftsman.ch
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </main>
    )
}

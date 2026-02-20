import React from 'react'
import AddProductForm from '../AddProductForm'

const HeroSection = ({ products , FEATURES , user}) => {
    return (
        <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-6 py-2 rounded-full text-sm font-medium mb-6">
                    Made with ❤️ by Hamza Janzaib
                </div>

                <h2 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">
                    Never Miss a Price Drop
                </h2>
                <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                    Track prices from any e-commerce site. Get instant alerts when
                    prices drop. Save money effortlessly.
                </p>

                <AddProductForm user={user} />

                {/* Features */}
                {products.length === 0 && (
                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
                        {FEATURES.map(({ icon: Icon, title, description }) => (
                            <div
                                key={title}
                                className="bg-white p-6 rounded-xl border border-gray-200"
                            >
                                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                                    <Icon className="w-6 h-6 text-orange-500" />
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                                <p className="text-sm text-gray-600">{description}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}

export default HeroSection
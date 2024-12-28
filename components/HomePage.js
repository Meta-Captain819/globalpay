"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";





const HomePage = () => {
    const { data: session } = useSession();
    return (
        <div className="w-full min-h-screen bg-gray-900 text-white">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-gray-800 to-gray-900 py-20 px-6 lg:px-20">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
                    <div className="lg:w-1/2">
                        <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Simplify Global Payments
                        </h1>
                        <p className="text-lg lg:text-xl mb-8 text-gray-400">
                            Experience seamless transactions worldwide with our secure, user-friendly platform.
                        </p>
                        <Link href={session ? "/payment" : "/login"}>
                        <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg shadow-lg font-semibold">
                            Make a Payment
                        </button>
                        </Link>
                        
                    </div>
                    <div className="lg:w-1/2 mt-10 lg:mt-0 ">
                    <Image
                                src="/pay.svg"
                                alt="pay"
                                width={350}
                                height={350}
                                className=" mb-4 ml-0 lg:ml-32"
                            />
                    </div>
                </div>
                <div className="absolute top-0 left-0 w-full h-full  pointer-events-none"></div>
            </section>

            {/* Features Section */}
            <section className="py-16 px-6 lg:px-20">
                <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us?</h2>
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                        {
                            title: "Global Access",
                            description: "Connect to users across the globe with just a few clicks.",
                            icon: "/globe.svg",
                        },
                        {
                            title: "Secure Transactions",
                            description: "Your payments are encrypted and highly secure.",
                            icon: "/lock.svg",
                        },
                        {
                            title: "Real-Time Updates",
                            description: "Track your payments instantly and stay updated.",
                            icon: "/clock.svg",
                        },
                        {
                            title: "User-Friendly Design",
                            description: "Enjoy a clean and modern interface.",
                            icon: "/interface.svg",
                        },
                        {
                            title: "Multi-Currency Support",
                            description: "Send and receive payments in multiple currencies. Including Cryptocurrecies.",
                            icon: "/currency.svg",
                            
                        },
                        {
                            title: "24/7 Support",
                            description: "Our team is always available to help you.",
                            icon: "/support.svg",
                        },
                    ].map((feature, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
                        >
                            <Image
                                src={feature.icon}
                                alt={feature.title}
                                width={50}
                                height={50}
                                className="mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-400">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-16 bg-gray-800 px-6 lg:px-20">
                <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
                <div className="grid gap-8 lg:grid-cols-3 text-center">
                    {[
                        {
                            step: "1",
                            title: "Log In",
                            description: "Log In with your account.",
                        },
                        {
                            step: "2",
                            title: "Set up your profile",
                            description: "Set up your profile and payment methods.",
                        },
                        {
                            step: "3",
                            title: "Send Payments",
                            description: "Send money seamlessly anywhere in the world.",
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
                        >
                            <div className="text-4xl font-bold text-white mb-4">{item.step}</div>
                            <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-gray-400">{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-16 px-6 lg:px-20">
                <h2 className="text-4xl font-bold text-center mb-12">What Our Users Say</h2>
                <div className="grid gap-8 lg:grid-cols-2">
                    {[
                        {
                            name: "Alice W.",
                            feedback:
                                "This platform has completely changed how I manage international payments. Highly recommend it!",
                            avatar: "/user1.svg",
                        },
                        {
                            name: "John D.",
                            feedback:
                                "Fast, secure, and so easy to use. The best global payment service I've ever tried.",
                            avatar: "/user1.svg",
                        },
                    ].map((testimonial, index) => (
                        <div
                            key={index}
                            className="flex bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
                        >
                            <Image
                                src={testimonial.avatar}
                                alt={testimonial.name}
                                width={40}
                                height={40}
                                className="rounded-full mr-6"
                            />
                            <div>
                                <p className="text-lg text-gray-300">{testimonial.feedback}</p>
                                <p className="text-gray-400 mt-4">- {testimonial.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            {!session && (
                <>
                    {/* Call to Action */}
                    <section className="py-20 bg-gradient-to-r from-gray-900 bg-gray-800 px-6 lg:px-20">
                        <h2 className="text-4xl font-bold text-center mb-6">Ready to Get Started?</h2>
                        <p className="text-lg text-center mb-8 text-gray-200">
                            Join thousands of users already using our platform for global payments.
                        </p>

                        <Link href="/login" className="flex justify-center" >
                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                                <span className="relative px-14 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">Log In</span></button>
                        </Link>
                    </section>
                </>
            )}
        </div>
    );
};

export default HomePage;

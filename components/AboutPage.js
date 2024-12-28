"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const AboutPage = () => {
    const { data: session } = useSession();
    return (
    <section className="bg-gray-900 text-gray-300">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-16 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 flex justify-center gap-3">
          About <span className="text-white flex gap-2"><img src="/pay.svg" alt="" width={25} height={25} />GlobalPay</span>
        </h1>
        <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
          Revolutionizing the way the world sends payments. At GlobalPay, we
          simplify the complexities of global transactions, enabling seamless,
          secure, and fast payments across borders.
        </p>
      </div>

      {/* Mission Section */}
      <div className="bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-white mb-4">
              Our Mission
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Our mission is to provide a user-friendly platform that bridges
              gaps in international payments. We aim to empower individuals and
              businesses to transact confidently without barriers.
            </p>
          </div>
          <div>
            <img
              src="/mission.jpg"
              alt="Mission Image"
              className="rounded-full shadow-md w-full"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-3xl font-semibold text-white mb-6">
            Why Choose <span className="text-blue-500">GlobalPay?</span>
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto mb-12">
            We stand out in the world of international payments. Here's why
            GlobalPay is the best choice for you.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Global Reach",
                description:
                  "Send payments anywhere in the world with a single click.",
                icon: "🌍",
              },
              {
                title: "Secure Transactions",
                description:
                  "Top-tier security ensures your money reaches safely.",
                icon: "🔒",
              },
              {
                title: "Friendly UI",
                description:
                  "Experience a clean, user-friendly interface designed for everyone.",
                icon: "👍",
              },
              {
                title: "Fast Transfers",
                description:
                  "Enjoy lightning-fast transactions without delays.",
                icon: "⚡",
              },
              {
                title: "24/7 Support",
                description:
                  "We’re here to assist you anytime, anywhere.",
                icon: "📞",
              },
              {
                title: "Low Fees",
                description: "Competitive pricing with no hidden charges.",
                icon: "💰",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-md text-left hover:shadow-lg transition duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-3xl font-semibold text-white mb-6">Meet Our Team</h2>
          <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto mb-12">
            Behind GlobalPay is a team of passionate professionals dedicated to
            making global payments simple and efficient.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Alice Johnson", role: "CEO", image: "/images/team1.jpg" },
              { name: "John Smith", role: "CTO", image: "/images/team2.jpg" },
              { name: "Emily Brown", role: "Lead Designer", image: "/images/team3.jpg" },
              { name: "Michael Lee", role: "Operations Manager", image: "/images/team4.jpg" },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-full mx-auto w-32 h-32 mb-4 border-4 border-gray-700"
                />
                <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                <p className="text-sm text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      { !session &&
      <div className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 text-center">
          <h2 className="text-3xl font-semibold text-white mb-6">
            Ready to Join <span className="text-blue-500">GlobalPay?</span>
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto mb-8">
            Sign up today and start sending payments across the globe effortlessly.
          </p>
          <button className="bg-blue-500 text-white py-3 px-6 rounded-lg shadow hover:bg-blue-600 transition duration-300">
            Get Started Now
          </button>
        </div>
      </div>
}
    </section>
  );
};

export default AboutPage;

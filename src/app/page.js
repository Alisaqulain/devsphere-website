// src/components/LandingPage.jsx
import React from "react";

export default function LandingPage() {
  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <header className="w-full py-4 px-6 flex justify-between items-center shadow-sm bg-white">
        <h1 className="text-2xl font-bold text-blue-600">DevSphere Solutions</h1>
        <nav className="hidden md:flex gap-6 text-gray-700">
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#" className="hover:text-blue-600">About</a>
          <a href="#" className="hover:text-blue-600">Services</a>
          <a href="#" className="hover:text-blue-600">Process</a>
          <a href="#" className="hover:text-blue-600">Contact</a>
        </nav>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Get Started</button>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-16 grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Your Business Deserves Expert-<span className="text-blue-600">Led Growth</span>
          </h2>
          <p className="mt-4 text-gray-600">
            Customized consulting solutions that help your business grow smarter and faster.
          </p>
          <div className="mt-6 flex gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">Schedule a Call</button>
            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg">Learn More</button>
          </div>
          <div className="mt-6 flex gap-6 text-sm text-gray-500">
            <span>✔ Trusted by 150+ clients</span>
            <span>✔ Proven Results</span>
          </div>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
            alt="Business Meeting"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-3xl font-bold text-blue-600">150+</h3>
            <p className="text-gray-600">Projects Done</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-600">25+</h3>
            <p className="text-gray-600">Industries Served</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-600">98%</h3>
            <p className="text-gray-600">Client Satisfaction</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-600">$20M+</h3>
            <p className="text-gray-600">Revenue Growth</p>
          </div>
        </div>
      </section>

      {/* Consulting Section */}
      <section className="px-6 py-16 grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        <img
          src="https://images.unsplash.com/photo-1581092334495-1c1dbdfd2d34"
          alt="Consulting"
          className="rounded-2xl shadow-lg"
        />
        <div>
          <h4 className="text-blue-600 font-semibold">About Us</h4>
          <h2 className="text-3xl font-bold mt-2">Customized Consulting. Real Results.</h2>
          <p className="mt-4 text-gray-600">
            We provide tailored strategies that empower your business to adapt and thrive in a rapidly changing market.
          </p>
          <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg">Learn More</button>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold">What We Can Do for You</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              "Strategy Consulting",
              "Operational Excellence",
              "Digital Transformation",
              "Research & Analysis",
              "IT Consulting",
              "Talent Development",
            ].map((service, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="font-semibold">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-6 py-16 max-w-6xl mx-auto text-center">
        <h4 className="text-blue-600 font-semibold">Process</h4>
        <h2 className="text-3xl font-bold">Our Proven Process</h2>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {["Discovery", "Strategy", "Implementation", "Optimization"].map((step, i) => (
            <div key={i} className="p-6 bg-white rounded-xl shadow">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold">
                {i + 1}
              </div>
              <h3 className="font-semibold">{step}</h3>
            </div>
          ))}
          
        </div>

        
      </section>
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto grid md:grid-cols-2 gap-10 px-6">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold leading-snug text-gray-900">
              Build Your <span className="text-blue-600">Future</span> with Us
            </h2>
            <p className="mt-4 text-gray-600">
              We provide solutions that help your business grow faster.
            </p>
            <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Get Started
            </button>
          </div>
          <img
            src="https://via.placeholder.com/500x350"
            alt="Teamwork"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto py-16 px-6">
        <h3 className="text-center text-3xl font-bold text-gray-900">
          The Strategies of Our Work
        </h3>
        <div className="mt-10 grid md:grid-cols-3 gap-8">
          {["Strategy", "Design", "Development"].map((item, i) => (
            <div
              key={i}
              className="p-6 bg-white shadow-md rounded-xl text-center hover:shadow-xl transition"
            >
              <h4 className="text-xl font-semibold text-blue-600">{item}</h4>
              <p className="mt-3 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-16 px-6">
        <h3 className="text-center text-3xl font-bold text-gray-900">
          Client Reviews About Our Work
        </h3>
        <div className="mt-10 grid md:grid-cols-2 gap-8 container mx-auto">
          <div className="p-6 bg-white shadow-md rounded-xl">
            <p className="text-gray-600">
              "Amazing service! Helped our business grow exponentially."
            </p>
            <h4 className="mt-4 font-bold">- John Doe</h4>
          </div>
          <div className="p-6 bg-white shadow-md rounded-xl">
            <p className="text-gray-600">
              "Professional and dedicated team. Highly recommend."
            </p>
            <h4 className="mt-4 font-bold">- Sarah Smith</h4>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="container mx-auto py-16 px-6">
        <h3 className="text-center text-3xl font-bold text-gray-900">
          Smart Pricing Plans
        </h3>
        <div className="mt-10 grid md:grid-cols-3 gap-8">
          {["Basic", "Pro", "Enterprise"].map((plan, i) => (
            <div
              key={i}
              className="p-8 bg-white shadow-md rounded-xl text-center hover:shadow-xl transition"
            >
              <h4 className="text-xl font-semibold">{plan}</h4>
              <p className="mt-2 text-gray-600">$29/month</p>
              <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-16 px-6">
        <h3 className="text-center text-3xl font-bold text-gray-900">
          Everything You Need to Know
        </h3>
        <div className="mt-10 max-w-2xl mx-auto space-y-4">
          {["How does it work?", "What is included?", "Can I cancel?"].map(
            (q, i) => (
              <div
                key={i}
                className="p-4 bg-white shadow rounded-lg hover:shadow-lg transition"
              >
                <h4 className="font-semibold text-gray-800">{q}</h4>
                <p className="text-gray-600 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            )
          )}
        </div>
      </section>

      {/* Blog */}
      <section className="container mx-auto py-16 px-6">
        <h3 className="text-center text-3xl font-bold text-gray-900">
          Insights to Grow Your Business
        </h3>
        <div className="mt-10 grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-white shadow-md rounded-xl">
            <img
              src="https://via.placeholder.com/500x250"
              alt="Blog"
              className="rounded-lg"
            />
            <h4 className="mt-4 font-semibold text-xl">
              Business Growth Strategies
            </h4>
          </div>
          <div className="p-6 bg-white shadow-md rounded-xl">
            <img
              src="https://via.placeholder.com/500x250"
              alt="Blog"
              className="rounded-lg"
            />
            <h4 className="mt-4 font-semibold text-xl">
              Modern Marketing Techniques
            </h4>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h3 className="text-3xl font-bold">Ready to Take Your Business to the Next Level?</h3>
        <button className="mt-6 px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-200">
          Contact Us
        </button>
      </section>


      {/* Footer */}
      <footer className="bg-blue-600 text-white py-6 text-center">
        <p>© 2025 Optimus Consulting. All rights reserved.</p>
      </footer>
    </div>
  );
}

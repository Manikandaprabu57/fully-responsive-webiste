import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Award, CheckCircle } from 'lucide-react';

const Home = () => {
  const features = [
    { icon: Star, title: "Premium Quality", description: "Top-tier materials and craftsmanship in every project" },
    { icon: Users, title: "Expert Team", description: "Skilled designers and craftsmen with years of experience" },
    { icon: Award, title: "Award Winning", description: "Recognized excellence in interior design and execution" }
  ];

  const services = [
    "Interior Design", "Furniture Design", "Modular Wardrobes", "Space Planning", "Wall Design & Décor", "Civil Works"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")' }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Transform Your Space Into a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-primary">Dream Reality</span>
            </h1>
            <p className="text-xl md:text-2xl text-text-light mb-8 leading-relaxed">
              From concept to completion, we create stunning interiors that reflect your style and enhance your lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-all duration-300"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Why Choose InteriorCraft?</h2>
            <p className="text-xl text-text-light max-w-3xl mx-auto">
              We combine creativity, expertise, and attention to detail to deliver exceptional results that exceed expectations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-text mb-4">{feature.title}</h3>
                  <p className="text-text-light leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">Comprehensive Interior Solutions</h2>
              <p className="text-lg text-text-light mb-8 leading-relaxed">
                From initial concept to final installation, we handle every aspect of your interior design project with precision and care.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-text">{service}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/services"
                className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
              >
                View All Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="Modern living room"
                  className="rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                />
                <img
                  src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop"
                  alt="Kitchen design"
                  className="rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop"
                  alt="Bedroom design"
                  className="rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                />
                <img
                  src="https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="Office space"
                  className="rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl mb-8 opacity-90">Let's discuss your vision and create something extraordinary together.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get Free Consultation
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

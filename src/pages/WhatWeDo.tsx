import React from 'react';
import { Home, Building2, Palette, Wrench, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhatWeDo = () => {
  const approaches = [
    {
      step: '01',
      title: 'Discovery & Consultation',
      description: 'We begin by understanding your vision, lifestyle, and functional needs through detailed consultations.',
      icon: Users
    },
    {
      step: '02',
      title: 'Design Development',
      description: 'Our team creates detailed design concepts, mood boards, and 3D visualizations for your approval.',
      icon: Palette
    },
    {
      step: '03',
      title: 'Planning & Coordination',
      description: 'We develop comprehensive project timelines and coordinate all aspects of the implementation.',
      icon: Wrench
    },
    {
      step: '04',
      title: 'Professional Execution',
      description: 'Our skilled craftsmen bring the design to life with precision installation and quality control.',
      icon: CheckCircle
    }
  ];

  const specializations = [
    {
      icon: Home,
      title: 'Residential Interiors',
      description: 'Creating warm, welcoming homes that reflect your personal style and enhance daily living.',
      services: ['Living Rooms', 'Bedrooms', 'Kitchens', 'Bathrooms', 'Home Offices', 'Outdoor Spaces'],
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: Building2,
      title: 'Commercial Spaces',
      description: 'Designing functional, inspiring workspaces that boost productivity and reflect brand identity.',
      services: ['Offices', 'Retail Stores', 'Restaurants', 'Hotels', 'Reception Areas', 'Conference Rooms'],
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    }
  ];

  const principles = [
    { title: 'Functionality First', description: 'Every design decision prioritizes how you live, work, and move through your space.' },
    { title: 'Timeless Aesthetics', description: 'We create designs that remain beautiful and relevant for years to come.' },
    { title: 'Quality Materials', description: 'We source premium materials and finishes that ensure durability and beauty.' },
    { title: 'Sustainable Practices', description: 'Environmental responsibility guides our material choices and design processes.' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")' }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">What We Do</h1>
            <p className="text-xl md:text-2xl text-text-light leading-relaxed">
              We transform spaces through thoughtful design, expert craftsmanship, and personalized service that brings your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Our Approach</h2>
            <p className="text-xl text-text-light max-w-3xl mx-auto">
              A systematic, collaborative process that ensures exceptional results every time
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approaches.map((approach, index) => {
              const Icon = approach.icon;
              return (
                <div key={index} className="relative">
                  <div className="bg-surface rounded-lg p-8 h-full hover:shadow-lg transition-shadow">
                    <div className="text-4xl font-bold text-primary/20 mb-4">{approach.step}</div>
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-text mb-4">{approach.title}</h3>
                    <p className="text-text-light leading-relaxed">{approach.description}</p>
                  </div>
                  {index < approaches.length - 1 && (
                    <div className="hidden lg:block absolute top-16 -right-4 w-8 h-1 bg-primary/30"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Our Specializations</h2>
            <p className="text-xl text-text-light max-w-3xl mx-auto">
              Whether residential or commercial, we bring the same level of expertise and attention to detail
            </p>
          </div>
          <div className="space-y-16">
            {specializations.map((spec, index) => {
              const Icon = spec.icon;
              return (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-text">{spec.title}</h3>
                    </div>
                    <p className="text-lg text-text-light mb-8 leading-relaxed">{spec.description}</p>
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {spec.services.map((service, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-text">{service}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      to="/services"
                      className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors"
                    >
                      Learn More About Our Services
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <img src={spec.image} alt={spec.title} className="rounded-lg shadow-xl hover:shadow-2xl transition-shadow" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Design Principles */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Our Design Principles</h2>
            <p className="text-xl text-text-light max-w-3xl mx-auto">
              Core beliefs that guide every project and ensure exceptional outcomes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((p, i) => (
              <div key={i} className="flex space-x-6 p-6 bg-surface rounded-lg hover:bg-gray-100 transition-colors">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-text mb-3">{p.title}</h3>
                  <p className="text-text-light leading-relaxed">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">Let's discuss your project and explore how we can transform your space together.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Schedule a Consultation
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors"
            >
              View Our Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDo;

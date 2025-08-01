import React from 'react';
import { Palette, Sofa, Archive, Layout, Paintbrush, Hammer, Layers, Wrench, Package } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: 'Interior Design',
      subtitle: 'Tailored aesthetics for your space',
      description: 'Complete interior design solutions that reflect your personal style while maximizing functionality and comfort.',
      features: ['Space analysis & planning', 'Color scheme development', 'Material & finish selection', 'Lighting design', 'Furniture arrangement', '3D visualizations'],
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: Sofa,
      title: 'Furniture Design',
      subtitle: 'Custom-built pieces for function and style',
      description: 'Bespoke furniture designed and crafted to perfectly fit your space and meet your specific needs.',
      features: ['Custom design consultation', 'Quality material sourcing', 'Skilled craftsmanship', 'Perfect fit guarantee', 'Style coordination', 'Lifetime warranty'],
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: Archive,
      title: 'Modular Wardrobes & Storage',
      subtitle: 'Smart and stylish storage solutions',
      description: 'Maximize your space with intelligent storage systems that combine functionality with elegant design.',
      features: ['Space optimization', 'Custom configurations', 'Premium hardware', 'Soft-close mechanisms', 'Interior accessories', 'Easy maintenance'],
      image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: Layout,
      title: 'Space Planning',
      subtitle: 'Optimal layouts that maximize utility',
      description: 'Strategic space planning that improves flow, functionality, and makes the most of every square foot.',
      features: ['Traffic flow analysis', 'Functional zoning', 'Furniture placement', 'Storage optimization', 'Lighting integration', 'Building code compliance'],
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: Paintbrush,
      title: 'Wall Design, Paint & Décor',
      subtitle: 'Textures, colors, and accents that pop',
      description: 'Transform your walls with expert painting, texturing, and decorative treatments that create stunning focal points.',
      features: ['Color consultation', 'Texture application', 'Decorative finishes', 'Wall art coordination', 'Accent wall design', 'Premium paint products'],
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: Hammer,
      title: 'Civil Works',
      subtitle: 'From structural changes to floor work',
      description: 'Complete civil engineering services including structural modifications, flooring, and construction work.',
      features: ['Structural assessments', 'Wall modifications', 'Flooring installation', 'Electrical work', 'Plumbing services', 'Building permits'],
      image: 'https://images.pexels.com/photos/1457841/pexels-photo-1457841.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: Layers,
      title: 'False Ceiling',
      subtitle: 'Enhance beauty and lighting with elegant ceilings',
      description: 'Sophisticated ceiling designs that improve acoustics, lighting, and add architectural interest to your space.',
      features: ['Gypsum board installation', 'Integrated lighting', 'Acoustic solutions', 'Air conditioning integration', 'Design flexibility', 'Easy maintenance'],
      image: 'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: Wrench,
      title: 'Professional Installation',
      subtitle: 'Timely, expert execution',
      description: 'Professional installation services ensuring every element is perfectly placed and functioning as designed.',
      features: ['Skilled technicians', 'Quality assurance', 'Timely completion', 'Clean work practices', 'Post-installation support', 'Warranty coverage'],
      image: 'https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: Package,
      title: 'End-to-End Projects',
      subtitle: 'We handle everything from concept to completion',
      description: 'Complete project management from initial consultation through final installation and beyond.',
      features: ['Project planning', 'Design development', 'Material procurement', 'Timeline management', 'Quality control', 'Final walkthrough'],
      image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")' }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-text-light">
            Comprehensive interior design solutions to transform your space from concept to completion
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="bg-surface p-8 rounded-lg shadow-lg">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-text">{service.title}</h3>
                        <p className="text-primary font-medium">{service.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-text-light mb-6 leading-relaxed">{service.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-text text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative group">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="rounded-lg shadow-xl group-hover:shadow-2xl transition-shadow w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-20 transition-opacity rounded-lg"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Our Service Process</h2>
          <p className="text-xl text-text-light max-w-3xl mx-auto">
            Every project follows our proven process to ensure exceptional results and client satisfaction
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Consultation & Planning', 'Design & Development', 'Implementation & Delivery'].map((title, i) => (
            <div key={i} className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">{i + 1}</span>
              </div>
              <h3 className="text-xl font-semibold text-text mb-4">{title}</h3>
              <p className="text-text-light leading-relaxed">
                {i === 0 && 'We start with a detailed consultation to understand your needs, preferences, and budget requirements.'}
                {i === 1 && 'Our team creates detailed designs, 3D visualizations, and material specifications for your approval.'}
                {i === 2 && 'Professional execution with quality control, timely delivery, and post-installation support.'}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today for a free consultation and let's discuss how we can bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Get Free Consultation
            </a>
            <a href="tel:+1-555-123-4567" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors">
              Call Now: (555) 123-4567
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

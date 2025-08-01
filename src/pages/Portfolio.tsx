import React from 'react';
import { Calendar, MapPin, Users, Award, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const portfolioProjects = [
    {
      id: 1,
      title: 'Luxury Penthouse Renovation',
      category: 'Residential',
      location: 'Manhattan, NY',
      year: '2024',
      client: 'Private Client',
      size: '3,500 sq ft',
      duration: '6 months',
      budget: '$150,000 - $200,000',
      description: 'Complete renovation of a luxury penthouse featuring modern design elements, custom furniture, and smart home integration.',
      services: ['Interior Design', 'Furniture Design', 'Space Planning', 'Smart Home Integration'],
      images: [
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
      ],
      mainImage: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      featured: true
    },
    {
      id: 2,
      title: 'Tech Startup Office Design',
      category: 'Commercial',
      location: 'San Francisco, CA',
      year: '2024',
      client: 'InnovateTech Solutions',
      size: '8,000 sq ft',
      duration: '4 months',
      budget: '$100,000 - $150,000',
      description: 'Modern office space designed to foster creativity and collaboration with flexible workspaces and recreational areas.',
      services: ['Space Planning', 'Interior Design', 'Furniture Selection', 'Lighting Design'],
      images: [
        'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
      ],
      mainImage: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      featured: true
    },
    {
      id: 3,
      title: 'Boutique Hotel Renovation',
      category: 'Hospitality',
      location: 'Miami, FL',
      year: '2023',
      client: 'Coastal Boutique Hotels',
      size: '12,000 sq ft',
      duration: '8 months',
      budget: '$300,000+',
      description: 'Complete renovation of a boutique hotel lobby, restaurant, and 20 guest rooms with a coastal luxury theme.',
      services: ['Interior Design', 'Furniture Design', 'Wall Design & Décor', 'Lighting Design', 'Civil Works'],
      images: [
        'https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
      ],
      mainImage: 'https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      featured: true
    },
    {
      id: 4,
      title: 'Modern Family Home',
      category: 'Residential',
      location: 'Austin, TX',
      year: '2023',
      client: 'The Johnson Family',
      size: '4,200 sq ft',
      duration: '5 months',
      budget: '$75,000 - $100,000',
      description: 'Contemporary family home design focusing on open living spaces, natural materials, and family-friendly functionality.',
      services: ['Interior Design', 'Space Planning', 'Modular Storage', 'Paint & Décor'],
      images: [
        'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        'https://images.pexels.com/photos/1457841/pexels-photo-1457841.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
      ],
      mainImage: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      featured: false
    },
    {
      id: 5,
      title: 'Fine Dining Restaurant',
      category: 'Commercial',
      location: 'Chicago, IL',
      year: '2023',
      client: 'Culinary Excellence Group',
      size: '3,500 sq ft',
      duration: '6 months',
      budget: '$200,000 - $250,000',
      description: 'Elegant fine dining restaurant with sophisticated lighting, custom millwork, and premium finishes.',
      services: ['Interior Design', 'Custom Furniture', 'Lighting Design', 'False Ceiling', 'Civil Works'],
      images: [
        'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        'https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
      ],
      mainImage: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      featured: false
    },
    {
      id: 6,
      title: 'Executive Condo Design',
      category: 'Residential',
      location: 'Boston, MA',
      year: '2022',
      client: 'Private Executive',
      size: '2,800 sq ft',
      duration: '4 months',
      budget: '$100,000 - $125,000',
      description: 'Sophisticated condominium design for a busy executive, emphasizing clean lines, premium materials, and efficient storage.',
      services: ['Interior Design', 'Modular Wardrobes', 'Space Planning', 'Professional Installation'],
      images: [
        'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
      ],
      mainImage: 'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      featured: false
    }
  ];

  const awards = [
    { year: '2024', title: 'Best Residential Design', organization: 'Interior Design Excellence Awards' },
    { year: '2023', title: 'Innovation in Commercial Space', organization: 'Architecture & Design Magazine' },
    { year: '2023', title: 'Sustainable Design Recognition', organization: 'Green Building Council' },
    { year: '2022', title: 'Client Choice Award', organization: 'Home & Office Design Association' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")'
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-text-light">
            Showcasing our finest work across residential, commercial, and hospitality projects
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Featured Projects</h2>
            <p className="text-xl text-text-light max-w-3xl mx-auto">
              Our most celebrated projects that showcase our design excellence and attention to detail
            </p>
          </div>
          
          <div className="space-y-20">
            {portfolioProjects.filter(project => project.featured).map((project, index) => (
              <div key={project.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                        {project.category}
                      </span>
                      <span className="text-text-light">|</span>
                      <span className="text-text-light">{project.year}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-text">{project.title}</h3>
                    <p className="text-lg text-text-light leading-relaxed">{project.description}</p>
                    
                    <div className="grid grid-cols-2 gap-6 text-sm">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span className="text-text">{project.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-primary" />
                        <span className="text-text">{project.client}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="text-text">{project.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <ExternalLink className="w-4 h-4 text-primary" />
                        <span className="text-text">{project.size}</span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-text mb-3">Services Provided:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.services.map((service, idx) => (
                          <span key={idx} className="px-3 py-1 bg-background text-text text-sm rounded-full">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="space-y-4">
                    <div className="relative group">
                      <img 
                        src={project.mainImage} 
                        alt={project.title}
                        className="rounded-lg shadow-xl group-hover:shadow-2xl transition-shadow w-full h-80 object-cover"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {project.images.slice(1).map((image, imgIndex) => (
                        <img 
                          key={imgIndex}
                          src={image}
                          alt={`${project.title} ${imgIndex + 2}`}
                          className="rounded-lg shadow-lg hover:shadow-xl transition-shadow h-32 w-full object-cover"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Recent Projects</h2>
            <p className="text-xl text-text-light max-w-3xl mx-auto">
              More examples of our comprehensive design solutions across various project types
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.filter(project => !project.featured).map((project) => (
              <div key={project.id} className="bg-surface rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-video">
                  <img 
                    src={project.mainImage} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                      {project.category}
                    </span>
                    <span className="text-text-light text-sm">{project.year}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-text mb-3">{project.title}</h3>
                  <p className="text-text-light text-sm mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="space-y-2 text-xs text-text-light">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-3 h-3" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-3 h-3" />
                      <span>{project.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Awards & Recognition</h2>
            <p className="text-xl text-text-light max-w-3xl mx-auto">
              Our commitment to excellence has been recognized by industry leaders and clients alike
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, idx) => (
              <div key={idx} className="text-center p-6 bg-background rounded-lg hover:bg-primary/5 transition-colors">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-primary mb-2">{award.year}</div>
                <h3 className="font-semibold text-text mb-2">{award.title}</h3>
                <p className="text-sm text-text-light">{award.organization}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Your Dream Project?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can transform your space with the same level of excellence shown in our portfolio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Start Your Project
            </a>
            <a 
              href="/gallery" 
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors"
            >
              View More Work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;

import React from 'react';
import { Users, Award, Clock, Target, Heart, Lightbulb } from 'lucide-react';

const Company = () => {
  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '15+', label: 'Years Experience' },
    { number: '200+', label: 'Happy Clients' },
    { number: '25+', label: 'Expert Team Members' }
  ];

  const values = [
    { icon: Heart, title: 'Passion', description: 'We pour our heart into every project, treating each space as if it were our own.' },
    { icon: Target, title: 'Excellence', description: 'We strive for perfection in every detail, ensuring exceptional quality and craftsmanship.' },
    { icon: Lightbulb, title: 'Innovation', description: 'We embrace new ideas and technologies to create unique, cutting-edge design solutions.' },
    { icon: Users, title: 'Collaboration', description: 'We work closely with clients, understanding their vision and bringing it to life.' }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & Lead Designer',
      image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: '15+ years of experience in luxury interior design with a passion for creating timeless spaces.'
    },
    {
      name: 'Michael Chen',
      role: 'Senior Designer',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Specializes in modern and contemporary designs with expertise in space optimization.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Project Manager',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Ensures seamless project execution and maintains the highest quality standards.'
    },
    {
      name: 'David Thompson',
      role: 'Senior Craftsman',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: '20+ years of experience in custom furniture making and professional installation.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")' }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About InteriorCraft</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-text-light">
            Crafting beautiful, functional spaces that inspire and delight for over 15 years
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-text-light font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">Our Story</h2>
              <div className="space-y-6 text-text-light leading-relaxed">
                <p>Founded in 2010 by Sarah Johnson, InteriorCraft began as a small design studio with a big vision...</p>
                <p>What started as a passion project has grown into a full-service interior design company...</p>
                <p>Today, our team of talented designers, skilled craftsmen, and dedicated project managers...</p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
                alt="Our design studio" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <Award className="w-8 h-8 mx-auto mb-1" />
                  <div className="text-sm font-semibold">Award</div>
                  <div className="text-xs">Winning</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Our Values</h2>
            <p className="text-xl text-text-light max-w-3xl mx-auto">
              These core values guide everything we do and shape our approach to every project
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-text mb-4">{value.title}</h3>
                  <p className="text-text-light leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Meet Our Team</h2>
            <p className="text-xl text-text-light max-w-3xl mx-auto">
              Our talented team of designers and craftsmen brings your vision to life
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-background rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-square">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-text mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-text-light text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl leading-relaxed mb-8 opacity-90">
            "To create exceptional interior spaces that not only reflect our clients' unique style and personality 
            but also enhance their daily lives through thoughtful design, quality craftsmanship, and unparalleled service."
          </p>
          <div className="flex items-center justify-center space-x-4">
            <Clock className="w-8 h-8 text-white/70" />
            <span className="text-lg">Committed to Excellence Since 2010</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Company;

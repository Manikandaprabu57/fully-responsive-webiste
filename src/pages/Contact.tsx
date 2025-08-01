import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Loader2, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });
  
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("");
    
    try {
      // Extract only the fields needed for the email API
      const emailData = {
        name: formData.name,
        email: formData.email,
        subject: `New Project Inquiry: ${formData.projectType || 'General Inquiry'}`,
        message: `
Project Type: ${formData.projectType || 'Not specified'}
Phone: ${formData.phone || 'Not provided'}
Budget: ${formData.budget || 'Not specified'}
Timeline: ${formData.timeline || 'Not specified'}

Message:
${formData.message}
`
      };
      
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData),
      });

      if (response.ok) {
        setStatus("success");
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: '',
            email: '',
            phone: '',
            projectType: '',
            budget: '',
            timeline: '',
            message: ''
          });
        }, 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
      console.error("Error sending email:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+1 (555) 123-4567', '+1 (555) 123-4568'],
      description: 'Call us for immediate assistance'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@interiorcraft.com', 'projects@interiorcraft.com'],
      description: 'Send us your project details'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['123 Design Avenue', 'City, State 12345'],
      description: 'Visit our design studio'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Mon–Fri: 9AM–6PM', 'Sat: 10AM–4PM', 'Sun: Closed'],
      description: 'Our business hours'
    }
  ];

  const projectTypes = [
    'Residential Interior Design', 'Commercial Space Design', 'Kitchen Renovation',
    'Bathroom Renovation', 'Complete Home Makeover', 'Office Design', 'Retail Space Design', 'Other'
  ];

  const budgetRanges = [
    'Under $25,000', '$25,000–$50,000', '$50,000–$100,000',
    '$100,000–$200,000', 'Over $200,000', 'Need consultation'
  ];

  const timelines = [
    'ASAP', '1–2 months', '3–6 months', '6–12 months', 'More than 1 year', 'Flexible'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")' }}
        ></div>
        <div className="relative max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
            Ready to transform your space? Let's discuss your vision together.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
          {contactInfo.map((info, idx) => {
            const Icon = info.icon;
            return (
              <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-text mb-2">{info.title}</h3>
                <div className="space-y-1 mb-2 text-text-light">
                  {info.details.map((d, i) => <p key={i}>{d}</p>)}
                </div>
                <p className="text-sm text-text-light/80">{info.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 sm:px-6 lg:px-8">
          {/* Form */}
          <div>
            <h2 className="text-3xl font-bold text-text mb-4">Get Started Today</h2>
            <p className="text-lg text-text-light mb-8">
              Fill out the form below and we'll contact you within 24 hours for a free consultation.
            </p>

            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-green-800 mb-2">Thank You!</h3>
                <p className="text-green-700">We'll get in touch shortly to discuss your project.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-text-light mb-2">Full Name *</label>
                    <input
                      type="text" name="name" required value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-light mb-2">Email Address *</label>
                    <input
                      type="email" name="email" required value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Phone & Project Type */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-text-light mb-2">Phone Number</label>
                    <input
                      type="tel" name="phone" value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-light mb-2">Project Type *</label>
                    <select
                      name="projectType" required value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select project type</option>
                      {projectTypes.map((t, i) => <option key={i} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>

                {/* Budget & Timeline */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-text-light mb-2">Budget</label>
                    <select
                      name="budget" value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select budget</option>
                      {budgetRanges.map((b, i) => <option key={i} value={b}>{b}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-light mb-2">Timeline</label>
                    <select
                      name="timeline" value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select timeline</option>
                      {timelines.map((t, i) => <option key={i} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-text-light mb-2">Project Details *</label>
                  <textarea
                    name="message" required rows={5} value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your space, style, and goals..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition disabled:opacity-70"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" /> Send Message
                    </>
                  )}
                </button>
                
                {status === "error" && (
                  <div className="mt-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-md">
                    There was an error sending your message. Please try again later.
                  </div>
                )}
              </form>
            )}
          </div>

          {/* Map & Extra Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-text mb-4">Visit Our Studio</h3>
              <p className="text-text-light mb-6">
                Schedule an appointment to explore materials, meet our team, and discuss your project.
              </p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                title="Our Location"
                className="w-full h-64 rounded-lg border-0 shadow"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>

            <div className="bg-primary/5 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-text mb-3">What Happens Next?</h4>
              <ul className="space-y-2 text-sm text-text-light list-disc list-inside">
                <li>We'll contact you within 24 hours to schedule your consultation.</li>
                <li>Our designer will visit your space to assess the project.</li>
                <li>You'll receive a detailed proposal and quote.</li>
                <li>We'll start transforming your space!</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

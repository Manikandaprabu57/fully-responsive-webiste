import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'residential', name: 'Residential' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'kitchen', name: 'Kitchens' },
    { id: 'bedroom', name: 'Bedrooms' },
    { id: 'living', name: 'Living Rooms' }
  ];

  const galleryItems = [
    {
      id: 1,
      title: 'Modern Living Room',
      category: 'residential',
      subcategory: 'living',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Contemporary living space with clean lines and neutral tones'
    },
    {
      id: 2,
      title: 'Luxury Kitchen Design',
      category: 'residential',
      subcategory: 'kitchen',
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Elegant kitchen with premium finishes and smart storage solutions'
    },
    {
      id: 3,
      title: 'Corporate Office Space',
      category: 'commercial',
      subcategory: 'office',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Modern office design promoting productivity and collaboration'
    },
    {
      id: 4,
      title: 'Master Bedroom Suite',
      category: 'residential',
      subcategory: 'bedroom',
      image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Serene bedroom with custom wardrobes and ambient lighting'
    },
    {
      id: 5,
      title: 'Boutique Retail Store',
      category: 'commercial',
      subcategory: 'retail',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Stylish retail space designed to enhance customer experience'
    },
    {
      id: 6,
      title: 'Contemporary Dining Room',
      category: 'residential',
      subcategory: 'dining',
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Elegant dining area perfect for entertaining guests'
    },
    {
      id: 7,
      title: 'Executive Office',
      category: 'commercial',
      subcategory: 'office',
      image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Sophisticated executive office with premium materials'
    },
    {
      id: 8,
      title: 'Modern Kitchen Island',
      category: 'residential',
      subcategory: 'kitchen',
      image: 'https://images.pexels.com/photos/1457841/pexels-photo-1457841.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Functional kitchen island with integrated appliances'
    },
    {
      id: 9,
      title: 'Cozy Living Space',
      category: 'residential',
      subcategory: 'living',
      image: 'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Warm and inviting living room with custom furniture'
    },
    {
      id: 10,
      title: 'Hotel Lobby Design',
      category: 'commercial',
      subcategory: 'hospitality',
      image: 'https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Luxurious hotel lobby with elegant lighting and finishes'
    },
    {
      id: 11,
      title: 'Kids Bedroom',
      category: 'residential',
      subcategory: 'bedroom',
      image: 'https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Playful and functional children\'s bedroom design'
    },
    {
      id: 12,
      title: 'Restaurant Interior',
      category: 'commercial',
      subcategory: 'restaurant',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Atmospheric restaurant design with custom lighting'
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item =>
        item.category === selectedCategory || item.subcategory === selectedCategory
      );

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  const nextImage = () => setSelectedImage((prev) => prev !== null ? (prev + 1) % filteredItems.length : null);
  const prevImage = () => setSelectedImage((prev) => prev !== null ? (prev === 0 ? filteredItems.length - 1 : prev - 1) : null);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")'
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Project Gallery</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-text-light">
            Explore our stunning collection of completed projects and get inspired for your own space transformation
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-surface border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-background text-text hover:bg-primary/10'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <div 
                key={item.id} 
                className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => openLightbox(index)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-white text-center">
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <div className="relative max-w-4xl max-h-full p-4">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="w-8 h-8" />
            </button>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
            <div className="text-center">
              <img 
                src={filteredItems[selectedImage].image} 
                alt={filteredItems[selectedImage].title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              <div className="mt-4 text-white">
                <h3 className="text-2xl font-semibold mb-2">{filteredItems[selectedImage].title}</h3>
                <p className="text-text-light">{filteredItems[selectedImage].description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;

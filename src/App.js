import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
import React, { useState, useEffect } from "react";

// Remove any comments about exports and ensure clean structure
const RestaurantApp = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [menuCategory, setMenuCategory] = useState("vegetarian");
  const [showSignUp, setShowSignUp] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    "https://placehold.co/1200x600/8B4513/FFFFFF?text=Luxury+Dining+Experience",
    "https://placehold.co/1200x600/D2691E/FFFFFF?text=Exquisite+Cuisine",
    "https://placehold.co/1200x600/CD853F/FFFFFF?text=Elegant+Ambiance"
  ];

  const vegetarianMenu = [
    { name: "Paneer Tikka", description: "Marinated cottage cheese grilled to perfection", price: "₹350", popular: true },
    { name: "Dal Makhani", description: "Creamy black lentils slow-cooked with butter and cream", price: "₹280" },
    { name: "Vegetable Biryani", description: "Fragrant basmati rice with mixed vegetables and aromatic spices", price: "₹320" },
    { name: "Palak Paneer", description: "Spinach curry with soft paneer cubes", price: "₹300" },
    { name: "Masala Dosa", description: "Crispy rice crepe with spiced potato filling", price: "₹220" },
    { name: "Chole Bhature", description: "Spicy chickpea curry with fried bread", price: "₹240" }
  ];

  const nonVegetarianMenu = [
    { name: "Butter Chicken", description: "Tender chicken in rich tomato and butter sauce", price: "₹450", popular: true },
    { name: "Tandoori Chicken", description: "Chicken marinated in yogurt and spices, grilled in tandoor", price: "₹420" },
    { name: "Fish Curry", description: "Fresh fish in coconut-based gravy with aromatic spices", price: "₹480" },
    { name: "Chicken Biryani", description: "Basmati rice with succulent chicken pieces and saffron", price: "₹380" },
    { name: "Lamb Rogan Josh", description: "Tender lamb in rich, aromatic gravy", price: "₹520", popular: true },
    { name: "Prawn Malai Curry", description: "Jumbo prawns in creamy coconut sauce", price: "₹550" }
  ];

  const testimonials = [
    { name: "Mr. Sharma", comment: "The authentic flavors and elegant ambiance made our dinner unforgettable. The staff was exceptionally attentive.", rating: 5 },
    { name: "Mrs. Patel", comment: "Perfect blend of traditional recipes with modern presentation. The vegetarian options were particularly impressive.", rating: 5 },
    { name: "Mr. Kapoor", comment: "Consistently excellent food and service. The Taj Mahal Restaurant has become our favorite fine dining destination.", rating: 5 }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
    setShowSignUp(false);
  };

  const MenuSection = ({ items, title }) => (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <h3 className="text-2xl font-bold text-amber-800 mb-6 border-b-2 border-amber-600 pb-2">{title}</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((item, index) => (
          <div key={index} className={`p-4 border-l-4 ${item.popular ? 'border-amber-600 bg-amber-50' : 'border-amber-400'} rounded-r-lg transition-all duration-300 hover:shadow-md`}>
            {item.popular && (
              <span className="inline-block bg-amber-600 text-white text-xs px-2 py-1 rounded-full mb-2">Popular</span>
            )}
            <h4 className="font-bold text-lg text-amber-900 mb-2">{item.name}</h4>
            <p className="text-gray-600 text-sm mb-3 leading-relaxed">{item.description}</p>
            <p className="font-bold text-amber-700">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100">
      {/* Header */}
      <header className="bg-amber-900 text-white shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mr-3">
                <span className="text-2xl font-bold">T</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold">Taj Mahal Restaurant</h1>
                <p className="text-amber-200 text-sm">Fine Indian Cuisine Since 1985</p>
              </div>
            </div>
            <nav className="flex space-x-8">
              {['home', 'menu', 'about', 'contact'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`capitalize font-medium transition-colors duration-300 pb-1 ${
                    activeTab === tab 
                      ? 'border-b-2 border-amber-300 text-amber-200' 
                      : 'text-amber-100 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-96 md:h-[600px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
          style={{ backgroundImage: `url(${heroImages[currentImageIndex]})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative container mx-auto px-6 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Experience Royal Indian Cuisine
            </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Where tradition meets elegance in every dish
            </p>
            <button 
              onClick={() => setShowSignUp(true)}
              className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Reserve Your Table
            </button>
          </div>
        </div>
        
        {/* Image Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroImages.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex ? 'bg-amber-300' : 'bg-amber-800 bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        {activeTab === 'home' && (
          <div className="space-y-16">
            {/* Menu Category Selector */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-amber-900 mb-8">Our Culinary Excellence</h2>
              <div className="flex justify-center space-x-4 mb-8">
                <button
                  onClick={() => setMenuCategory('vegetarian')}
                  className={`px-8 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 ${
                    menuCategory === 'vegetarian'
                      ? 'bg-green-600 text-white shadow-lg'
                      : 'bg-white text-green-600 border-2 border-green-600 hover:bg-green-50'
                  }`}
                >
                  Vegetarian
                </button>
                <button
                  onClick={() => setMenuCategory('non-vegetarian')}
                  className={`px-8 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 ${
                    menuCategory === 'non-vegetarian'
                      ? 'bg-red-600 text-white shadow-lg'
                      : 'bg-white text-red-600 border-2 border-red-600 hover:bg-red-50'
                  }`}
                >
                  Non-Vegetarian
                </button>
              </div>
              
              {menuCategory === 'vegetarian' ? (
                <MenuSection items={vegetarianMenu} title="Vegetarian Delicacies" />
              ) : (
                <MenuSection items={nonVegetarianMenu} title="Non-Vegetarian Specialties" />
              )}
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-amber-800" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-amber-900 mb-3">Authentic Recipes</h3>
                <p className="text-gray-600">Traditional recipes passed down through generations, prepared with the finest ingredients.</p>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-amber-800" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-amber-900 mb-3">Expert Chefs</h3>
                <p className="text-gray-600">Our master chefs bring decades of experience and passion to every dish they create.</p>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-amber-800" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-amber-900 mb-3">Premium Quality</h3>
                <p className="text-gray-600">We source only the finest ingredients, ensuring exceptional quality in every bite.</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'menu' && (
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-amber-900 text-center mb-12">Our Menu Collection</h2>
            
            <div className="flex justify-center space-x-4 mb-12">
              <button
                onClick={() => setMenuCategory('vegetarian')}
                className={`px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                  menuCategory === 'vegetarian'
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-white text-green-600 border-2 border-green-600 hover:bg-green-50'
                }`}
              >
                Vegetarian Menu
              </button>
              <button
                onClick={() => setMenuCategory('non-vegetarian')}
                className={`px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                  menuCategory === 'non-vegetarian'
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'bg-white text-red-600 border-2 border-red-600 hover:bg-red-50'
                }`}
              >
                Non-Vegetarian Menu
              </button>
            </div>

            {menuCategory === 'vegetarian' ? (
              <MenuSection items={vegetarianMenu} title="Vegetarian Delicacies" />
            ) : (
              <MenuSection items={nonVegetarianMenu} title="Non-Vegetarian Specialties" />
            )}
          </div>
        )}

        {activeTab === 'about' && (
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-amber-900 text-center mb-12">Our Story</h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <img 
                  src="https://placehold.co/500x400/8B4513/FFFFFF?text=Our+Restaurant" 
                  alt="Taj Mahal Restaurant" 
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-amber-900 mb-6">A Legacy of Excellence</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Established in 1985, Taj Mahal Restaurant has been serving authentic Indian cuisine with royal elegance for over three decades. Our journey began with a simple vision: to bring the rich culinary heritage of India to discerning food lovers.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Inspired by the grandeur of the Taj Mahal, we've created a dining experience that combines traditional recipes with modern sophistication. Every dish is prepared with the same attention to detail and respect for ingredients that one would expect from a royal kitchen.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our commitment to excellence has earned us numerous accolades and the loyalty of countless patrons who return again and again to experience the magic of our cuisine.
                </p>
              </div>
            </div>

            {/* Testimonials */}
            <h3 className="text-3xl font-bold text-amber-900 text-center mb-10">What Our Guests Say</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className={`w-5 h-5 ${i < testimonial.rating ? 'text-amber-400' : 'text-gray-300'}`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-4">"{testimonial.comment}"</p>
                  <p className="font-bold text-amber-900">- {testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-amber-900 text-center mb-12">Contact Us</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-amber-900 mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-5 h-5 text-amber-800" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-amber-900">Email</h4>
                      <p className="text-gray-600">reservations@tajmahalrestaurant.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-5 h-5 text-amber-800" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-amber-900">Phone</h4>
                      <p className="text-gray-600">+91 12345 67890</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-5 h-5 text-amber-800" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-amber-900">Address</h4>
                      <p className="text-gray-600">123 Heritage Street, Cultural District, New Delhi, India</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-bold text-amber-900 mb-3">Opening Hours</h4>
                  <div className="space-y-2 text-gray-600">
                    <p>Monday - Thursday: 12:00 PM - 11:00 PM</p>
                    <p>Friday - Saturday: 12:00 PM - 12:00 AM</p>
                    <p>Sunday: 12:00 PM - 11:00 PM</p>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-amber-900 mb-6">Send us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-amber-900 font-medium mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-amber-900 font-medium mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-amber-900 font-medium mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-amber-900 font-medium mb-2">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="4"
                        required
                        className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Sign Up Modal */}
      {showSignUp && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-8 relative">
            <button
              onClick={() => setShowSignUp(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h3 className="text-2xl font-bold text-amber-900 mb-6 text-center">Reserve Your Table</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-amber-900 font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-amber-900 font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-amber-900 font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-amber-900 font-medium mb-2">Date & Time</label>
                <input
                  type="datetime-local"
                  className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-amber-900 font-medium mb-2">Number of Guests</label>
                <select className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent">
                  <option>1-2</option>
                  <option>3-4</option>
                  <option>5-6</option>
                  <option>7+</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                Book Reservation
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-lg font-bold">T</span>
                </div>
                <span className="text-xl font-bold">Taj Mahal Restaurant</span>
              </div>
              <p className="text-amber-200 mb-4">
                Experience the royal flavors of India in an elegant setting that combines tradition with modern sophistication.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-amber-200 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-amber-200 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="text-amber-200 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.297 0-5.26 2.295-5.26 4.994 0 .991.388 1.933.617 2.433.258.573.064 1.366-.289 1.835-.543.695-1.595 1.15-2.935 1.015l-.328-.03c-1.878-.164-2.817-1.229-3.072-2.748h-.028v-.002.002c.195-1.658 1.481-3.643 3.515-3.643 1.836 0 2.938 1.378 2.938 3.082 0 1.658-1.004 2.985-1.994 2.985-.726 0-1.276-.627-1.135-1.554.131-.797.764-1.812 1.15-2.448.417-.695.064-1.275-.735-1.275-1.922 0-3.727 1.998-3.727 4.595 0 2.675 1.892 4.595 4.781 4.595 2.669 0 4.512-1.962 4.512-4.485 0-1.287-.563-2.46-1.415-3.187z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-amber-200 hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="text-amber-200 hover:text-white transition-colors">Menu</a></li>
                <li><a href="#" className="text-amber-200 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-amber-200 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Menu</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-amber-200 hover:text-white transition-colors">Vegetarian</a></li>
                <li><a href="#" className="text-amber-200 hover:text-white transition-colors">Non-Vegetarian</a></li>
                <li><a href="#" className="text-amber-200 hover:text-white transition-colors">Specialties</a></li>
                <li><a href="#" className="text-amber-200 hover:text-white transition-colors">Beverages</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Contact Info</h4>
              <address className="not-italic text-amber-200 space-y-2">
                <p>123 Heritage Street</p>
                <p>Cultural District, New Delhi</p>
                <p>India 110001</p>
                <p className="mt-2">+91 12345 67890</p>
                <p>reservations@tajmahalrestaurant.com</p>
              </address>
            </div>
          </div>
          
          <div className="border-t border-amber-700 mt-8 pt-8 text-center text-amber-200">
            <p>&copy; 2024 Taj Mahal Restaurant. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;   // only one default export allowed
export { webpage };   // named export

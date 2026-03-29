/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  Clock, 
  Phone, 
  Instagram, 
  Facebook, 
  ChevronRight, 
  Menu as MenuIcon, 
  X, 
  Utensils, 
  Leaf,
  Star,
  Coffee,
  Pizza,
  Soup,
  Flame,
  Wind,
  Heart,
  ShoppingCart,
  Plus,
  Minus,
  Trash2,
  Calendar,
  Users
} from 'lucide-react';

// --- Constants ---

const LOGO_URL = "https://scontent.fmnl13-1.fna.fbcdn.net/v/t39.30808-1/291900404_443363517798484_5157014220374041316_n.png?stp=dst-png_s200x200&_nc_cat=104&ccb=1-7&_nc_sid=2d3e12&_nc_eui2=AeEXypNTR_10-Yv2z06nopHV1dHhTmhlRv_V0eFOaGVG_y7Crq3veDrhI5sN8UDfEAlxa69L7IXBNirEeMWeDLN2&_nc_ohc=bl1Ro4nKCysQ7kNvwHXjzd_&_nc_oc=Adqcy5WEm1nV8qmnFMBiefuKyqbQBtvVaoWD5hTX6IfgvXpkuePsbUqCQJNmBylnEq4&_nc_zt=24&_nc_ht=scontent.fmnl13-1.fna&_nc_gid=35IB-e5-0luLkZK-iiwJiA&_nc_ss=7a32e&oh=00_Afw6rhHWmDMEOuvgn-1CJrsw-eEBW6slkmQhYRniG9W88g&oe=69CE7198";
const HERO_BG_URL = "https://scontent.fmnl13-4.fna.fbcdn.net/v/t39.30808-6/616831363_1477179027750256_1583387311811264771_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=2a1932&_nc_eui2=AeHjbl_-DEmTu7noM2hr01jTRjX4fZzEPG9GNfh9nMQ8b685q6jslkDVw65WiL6L8_ubbb--KwvAYt4Oo42-Qoxg&_nc_ohc=dgE8YaYU-rQQ7kNvwEslqO-&_nc_oc=AdpR3BFAPTlh77cCL5jDebVIeui0tS79bqRtQ05wnlzUHOXYaYGucZgfQsDd2lFRjEQ&_nc_zt=23&_nc_ht=scontent.fmnl13-4.fna&_nc_gid=VfNo7sXyuuPnIehJwC8snA&_nc_ss=7a32e&oh=00_AfxKvufT6PZpRvWzUlJRviVK90_1LtF-in8-9rQ-MeX-NQ&oe=69CE9CE5";

// --- Utility Components ---

const FloatingIcon = ({ Icon, delay = 0, x = 0, y = 0 }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ 
      opacity: [0.2, 0.5, 0.2],
      y: [y, y - 20, y],
      x: [x, x + 10, x]
    }}
    transition={{ 
      duration: 4, 
      repeat: Infinity, 
      delay,
      ease: "easeInOut" 
    }}
    className="absolute pointer-events-none text-accent/20"
    style={{ left: `${50 + x}%`, top: `${50 + y}%` }}
  >
    <Icon size={48} />
  </motion.div>
);

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className={`text-2xl font-serif font-bold tracking-tighter flex items-center gap-3 transition-colors duration-500 ${isScrolled ? 'text-primary' : 'text-white'}`}
        >
          <img 
            src={LOGO_URL} 
            alt="Ngaon Ta Resto Logo" 
            className={`w-12 h-12 object-contain rounded-full border-2 transition-colors duration-500 ${isScrolled ? 'border-primary/10' : 'border-white/20'}`}
            referrerPolicy="no-referrer"
          />
          <span className="hidden sm:inline">NGAON TA</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`text-sm uppercase tracking-widest font-bold transition-colors duration-500 relative group ${isScrolled ? 'text-primary hover:text-accent' : 'text-white hover:text-accent'}`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 w-0 h-[2px] transition-all group-hover:w-full ${isScrolled ? 'bg-accent' : 'bg-white'}`}></span>
            </motion.a>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className={`px-6 py-2 rounded-full text-sm font-bold tracking-wide shadow-lg transition-all duration-500 ${isScrolled ? 'bg-primary text-white shadow-primary/20' : 'bg-accent text-white shadow-accent/20'}`}
          >
            Book a Table
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button className={`md:hidden transition-colors duration-500 ${isScrolled ? 'text-primary' : 'text-white'}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-serif"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button 
                className="bg-primary text-white px-6 py-3 rounded-xl text-sm font-medium"
                onClick={() => {
                  setMobileMenuOpen(false);
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Book a Table
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary pt-32 pb-20">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <img 
          src={HERO_BG_URL} 
          alt="Ngaon Ta Resto Background" 
          className="w-full h-full object-cover opacity-60 scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-transparent to-primary/90"></div>
      </motion.div>

      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-[1] flex items-center justify-center opacity-10 pointer-events-none"
      >
        <div className="grid grid-cols-4 gap-20">
          {[Utensils, Coffee, Pizza, Soup, Flame, Wind, Heart, Leaf].map((Icon, i) => (
            <Icon key={i} size={120} strokeWidth={0.5} className="text-white" />
          ))}
        </div>
      </motion.div>

      <FloatingIcon Icon={Soup} delay={0} x={-40} y={-30} />
      <FloatingIcon Icon={Flame} delay={1} x={35} y={-20} />
      <FloatingIcon Icon={Leaf} delay={2} x={-30} y={25} />
      <FloatingIcon Icon={Heart} delay={3} x={40} y={30} />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white"
        >
          <span className="inline-block mb-6 px-4 py-1 border border-white/20 rounded-full text-xs uppercase tracking-[0.3em] font-semibold text-accent bg-white/10 backdrop-blur-md">
            Authentic Boholano Flavors
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold leading-none mb-8 tracking-tighter drop-shadow-2xl">
            Ngaon Ta <br />
            <span className="italic font-normal text-accent">Resto</span>
          </h1>
          <p className="text-lg md:text-xl text-white max-w-2xl mx-auto mb-10 font-medium leading-relaxed drop-shadow-lg">
            Experience the warmth of Talibon hospitality. A cozy sanctuary where traditional Pinoy cuisine meets modern elegance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-accent text-white px-10 py-4 rounded-full text-sm font-semibold tracking-widest uppercase hover:shadow-xl hover:shadow-accent/30 transition-all"
            >
              Explore Menu
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white px-10 py-4 rounded-full text-sm font-semibold tracking-widest uppercase hover:bg-white hover:text-primary transition-all backdrop-blur-sm"
            >
              Our Story
            </motion.button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/40"
      >
        <span className="text-[10px] uppercase tracking-widest mb-2 font-bold">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20"></div>
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img 
              src="https://scontent.fmnl13-4.fna.fbcdn.net/v/t39.30808-6/618244590_1477779394356886_1944653350164579406_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHFc_GQEVV5fIyVXFcUsfxrFvvW83_iHZ4W-9bzf-IdnqDxkApTxpn-8Y1EL_zbIY1XKDnZSXbqU5fbPNmcrWbj&_nc_ohc=4bbOCbEyqZIQ7kNvwEGi8KE&_nc_oc=AdpSDis_uOqhVm3bbZa5_2Ysdma4hPGBr5adBqiBscK1RU7GmgoZ9Saw7u-7Sy3-PIs&_nc_zt=23&_nc_ht=scontent.fmnl13-4.fna&_nc_gid=x4vVpDLq6ieA4jaz5eFJIg&_nc_ss=7a32e&oh=00_Afyo89SL_u0ji2zRVfAzc8TqcDzIH8JeAnxw8pAoqZ2oeg&oe=69CE9577" 
              alt="Our Cozy Dining Area" 
              className="w-full aspect-[4/5] object-cover rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-10 -right-10 bg-primary p-10 rounded-3xl text-white hidden md:block shadow-xl"
            >
              <h3 className="text-4xl font-serif mb-2">10+</h3>
              <p className="text-xs uppercase tracking-widest opacity-80">Years of Culinary<br />Excellence</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-semibold uppercase tracking-widest text-sm mb-4 block">The Heart of Talibon</span>
            <h2 className="text-5xl md:text-6xl font-serif mb-8 leading-tight">
              A Cozy Retreat Near <br />
              <span className="italic">Poblacion</span>
            </h2>
            <p className="text-primary/70 text-lg mb-8 leading-relaxed">
              Located in the vibrant town of Talibon, Bohol, Ngaon Ta Resto is more than just a place to eat. It's a gathering spot for families, a romantic corner for couples, and a home away from home for travelers.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
              <div className="flex items-start gap-4 p-6 bg-secondary rounded-2xl border border-primary/5">
                <div className="p-3 bg-white rounded-xl text-primary shadow-sm">
                  <Leaf size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Fresh Ingredients</h4>
                  <p className="text-sm text-primary/60">Sourced daily from local Talibon markets.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-secondary rounded-2xl border border-primary/5">
                <div className="p-3 bg-white rounded-xl text-primary shadow-sm">
                  <Utensils size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Expert Chefs</h4>
                  <p className="text-sm text-primary/60">Masters of traditional Filipino recipes.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const MenuSection = ({ addToCart, cart }) => {
  const categories = ['All', 'Signature', 'Main Course', 'Desserts', 'Drinks'];
  const [activeTab, setActiveTab] = useState('All');

  const menuItems = [
    { id: 1, name: 'Adobo sa Puti', price: '₱350', category: 'Signature', desc: 'A classic Boholano take on adobo with coconut vinegar and garlic.', size: 'large' },
    { id: 2, name: 'Grilled Blue Marlin', price: '₱480', category: 'Main Course', desc: 'Freshly caught from the Bohol Sea, grilled to perfection.', size: 'medium' },
    { id: 3, name: 'Ube Halaya Cheesecake', price: '₱220', category: 'Desserts', desc: 'Creamy cheesecake infused with authentic Boholano ube.', size: 'small' },
    { id: 4, name: 'Talibon Express', price: '₱320', category: 'Signature', desc: 'Spicy and creamy stew with local chilies and coconut milk.', size: 'medium' },
    { id: 5, name: 'Pancit Guisado', price: '₱280', category: 'Main Course', desc: 'Stir-fried noodles with fresh vegetables and shrimp.', size: 'small' },
    { id: 6, name: 'Calamansi Mojito', price: '₱180', category: 'Drinks', desc: 'Refreshing local citrus twist on a classic cocktail.', size: 'small' },
    { id: 7, name: 'Crispy Pata', price: '₱650', category: 'Main Course', desc: 'Deep-fried pork knuckle served with soy-vinegar dip.', size: 'large' },
    { id: 8, name: 'Boholano Humba', price: '₱380', category: 'Signature', desc: 'Sweet and savory braised pork belly with black beans.', size: 'medium' },
    { id: 9, name: 'Sinigang na Hipon', price: '₱420', category: 'Main Course', desc: 'Sour tamarind soup with fresh prawns and local greens.', size: 'medium' },
    { id: 10, name: 'Halo-Halo Special', price: '₱150', category: 'Desserts', desc: 'The ultimate Filipino summer treat with all the fixings.', size: 'small' },
    { id: 11, name: 'Lechon Kawali', price: '₱340', category: 'Main Course', desc: 'Crispy deep-fried pork belly chunks.', size: 'small' },
    { id: 12, name: 'Buko Juice', price: '₱90', category: 'Drinks', desc: 'Freshly harvested young coconut water.', size: 'small' },
    { id: 13, name: 'Kare-Kare', price: '₱450', category: 'Signature', desc: 'Beef stew in peanut sauce with bagoong on the side.', size: 'large' },
    { id: 14, name: 'Chicken Inasal', price: '₱290', category: 'Main Course', desc: 'Bacolod-style grilled chicken marinated in lemongrass.', size: 'medium' },
    { id: 15, name: 'Cassava Cake', price: '₱120', category: 'Desserts', desc: 'Traditional baked cassava with cheese topping.', size: 'small' },
  ];

  const filteredItems = activeTab === 'All' ? menuItems : menuItems.filter(item => item.category === activeTab);

  return (
    <section id="menu" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-serif mb-6"
          >
            Our Culinary <span className="italic">Treasures</span>
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(cat)}
                className={`px-8 py-3 rounded-full text-xs uppercase tracking-widest font-bold transition-all ${activeTab === cat ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-white text-primary hover:bg-primary/5'}`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, i) => {
              const cartItem = cart.find(c => c.id === item.id);
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className={`bg-white p-8 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all group flex flex-col justify-between ${
                    item.size === 'large' ? 'lg:row-span-2' : ''
                  }`}
                >
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center text-accent group-hover:bg-primary group-hover:text-white transition-colors">
                        {item.category === 'Drinks' ? <Coffee size={20} /> : <Utensils size={20} />}
                      </div>
                      <span className="text-primary font-black text-xl">{item.price}</span>
                    </div>
                    <h3 className="text-2xl font-serif font-bold mb-3 group-hover:text-accent transition-colors">{item.name}</h3>
                    <p className="text-primary/60 text-sm leading-relaxed mb-8">
                      {item.desc}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-accent">
                      <Star size={12} fill="currentColor" />
                      <span>{item.category}</span>
                    </div>
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => addToCart(item)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
                        cartItem ? 'bg-accent text-white' : 'bg-primary/5 text-primary hover:bg-primary hover:text-white'
                      }`}
                    >
                      {cartItem ? (
                        <>
                          <ShoppingCart size={12} />
                          <span>Added ({cartItem.quantity})</span>
                        </>
                      ) : (
                        <>
                          <Plus size={12} />
                          <span>Add to Order</span>
                        </>
                      )}
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    { 
      label: "Main Dining Hall", 
      desc: "A cozy space with warm lighting and local wood accents.",
      image: "https://scontent.fmnl13-4.fna.fbcdn.net/v/t39.30808-6/656675313_1535453685256123_5295600461589620547_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeH4JUjBusNzu8czpNY8Qh6AzUSuD8v9NbLNRK4Py_01siZMd9l1-kTjjZmxEmi9JhQJqrlFHc3cm_jqETOWO4P2&_nc_ohc=h-EX0zkmlTMQ7kNvwH4VZO1&_nc_oc=AdpEKDlAZnQX5oLyuxq7x6gKm_terhpkh3TeW8VCgiBFhxZ5EPwXgNJm-gnBLBs2WTU&_nc_zt=23&_nc_ht=scontent.fmnl13-4.fna&_nc_gid=69_fCQRiHeQxptBAmxEd5w&_nc_ss=7a32e&oh=00_AfxWNX09Q_GEVwLp9O-odh1kRvqfydt3iW3VCyKw_hohjw&oe=69CE9172"
    },
    { 
      label: "Signature Dishes", 
      desc: "Authentic Boholano flavors served with love and tradition.",
      image: "https://scontent.fmnl13-1.fna.fbcdn.net/v/t39.30808-6/618079226_1475782271223265_4130625459138811862_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeGcK8w3a6xjzCtmurSedduQrt5y5_gKQC6u3nLn-ApALt-c2NUCObxJXmzAEqobkpNjHsaFJpA74KZdItnk4QCQ&_nc_ohc=rnTpUeQg63cQ7kNvwFgX840&_nc_oc=AdqrlWXT9ml9qtOsD05YocepzL6OnjIEghkpIGe9RIYhkKR56_9L3YFN01QO61Of-tE&_nc_zt=23&_nc_ht=scontent.fmnl13-1.fna&_nc_gid=Nc36BEI8I2njDnnD_MArZg&_nc_ss=7a32e&oh=00_AfwfnXarPjKcwiG_apFHN5imfjF25pDUa08VM-Y0267X9w&oe=69CEA193"
    },
    { 
      label: "Garden Terrace", 
      desc: "Dine under the stars in our lush outdoor seating area.",
      image: "https://scontent.fmnl13-3.fna.fbcdn.net/v/t39.30808-6/618350022_1479733407494818_8336986553324058085_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeGJXyGX1Diw8zoAkagerlGe5YOBIyheeNPlg4EjKF5401EvWqSdgVuTABtIfF1oy77iwPi98Z0N-uBoolipB6-s&_nc_ohc=__3Ud4FLW0cQ7kNvwH_SBjY&_nc_oc=AdodvhE7RKuiwszGTjU7pis7X0HRNVLqgsmwlGtmljBBgVCRicjOjEtWaQn78hhMZoA&_nc_zt=23&_nc_ht=scontent.fmnl13-3.fna&_nc_gid=guTUQRK-EHrTMPD8f-SWvw&_nc_ss=7a32e&oh=00_AfynSSaCmZ4mx5dCQAhrcAp8nXx0JiD3R8-6MM7I9MnbNw&oe=69CE7B74"
    },
    { 
      label: "Chef's Special", 
      desc: "Freshly prepared seafood caught daily from the Bohol Sea.",
      image: "https://scontent.fmnl13-1.fna.fbcdn.net/v/t39.30808-6/636850544_1505614561573369_9199722376348242146_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHHPhZtkGFdL-yG51VaS6gnkA4_p9ia4HyQDj-n2JrgfHVBZWPWt7EVuo4n6yTdQorX3TLpF12pi9lEHx9VjaYh&_nc_ohc=6oTAxluGNZcQ7kNvwGtQBk8&_nc_oc=AdqNWH0NuMJc3VZWbGguP0cBwZm1UBLuXvrr10gUPsL_Xxmfl27PUuq4vnCoDGaQ7W4&_nc_zt=23&_nc_ht=scontent.fmnl13-1.fna&_nc_gid=gbI14RNDNwktMmgACzVGLg&_nc_ss=7a32e&oh=00_AfwIbE4Fkn8di2eJfvXfGj76RTAqK1Bd6AiHhMavXzEzmQ&oe=69CE794B"
    },
    { 
      label: "Private Lounge", 
      desc: "An intimate corner perfect for romantic dinners.",
      image: "https://scontent.fmnl13-4.fna.fbcdn.net/v/t39.30808-6/618244590_1477779394356886_1944653350164579406_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHFc_GQEVV5fIyVXFcUsfxrFvvW83_iHZ4W-9bzf-IdnqDxkApTxpn-8Y1EL_zbIY1XKDnZSXbqU5fbPNmcrWbj&_nc_ohc=4bbOCbEyqZIQ7kNvwEGi8KE&_nc_oc=AdpSDis_uOqhVm3bbZa5_2Ysdma4hPGBr5adBqiBscK1RU7GmgoZ9Saw7u-7Sy3-PIs&_nc_zt=23&_nc_ht=scontent.fmnl13-4.fna&_nc_gid=x4vVpDLq6ieA4jaz5eFJIg&_nc_ss=7a32e&oh=00_Afyo89SL_u0ji2zRVfAzc8TqcDzIH8JeAnxw8pAoqZ2oeg&oe=69CE9577"
    },
    { 
      label: "Local Favorites", 
      desc: "Traditional recipes passed down through generations.",
      image: "https://scontent.fmnl13-1.fna.fbcdn.net/v/t39.30808-6/467340415_18029947667586565_5459442984046778115_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFy6ihXQ1EMoBxGs48iR08JrD9s14beS4qsP2zXht5Lio7mQVZgfafBq1xIyLDE5DHxefaY0S2m6RUlKpYUjsQw&_nc_ohc=gaosbi07VLIQ7kNvwElrWI9&_nc_oc=Ado-qzAnVgivpR-LezMHv0MTMbDhyzBSDOGWSgwEmYIYVCUUcFv-Bp4b8ktrJ_LOxlg&_nc_zt=23&_nc_ht=scontent.fmnl13-1.fna&_nc_gid=Gm_S6trZSvtN-vhG-0OUlQ&_nc_ss=7a32e&oh=00_AfyYGeKs9LBFSUezy6W8_W3FrwStfvsBN3hvEOtX7fIACw&oe=69CE8467"
    },
    { 
      label: "Cozy Ambiance", 
      desc: "Feel at home with our warm and welcoming atmosphere.",
      image: "https://scontent.fmnl13-3.fna.fbcdn.net/v/t39.30808-6/467307523_18029947310586565_7403653254414180466_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeEQofdIzCIuAP8G6wxkuL7pv4uVF0rTC8C_i5UXStMLwCm6ye-AC6xvHO0hviYyiLpN6OY8NVP71eZKf29uFBNh&_nc_ohc=oSltmsXdM2YQ7kNvwEn-UIy&_nc_oc=Adp93aSlglB6k3B3tD5SmWDmoi0yx9otGHEEFjZTF23QB8IC-L4k5WuB9tymXLTe22U&_nc_zt=23&_nc_ht=scontent.fmnl13-3.fna&_nc_gid=AS0mKyEDkrQihIUxD6A4iQ&_nc_ss=7a32e&oh=00_Afza2AAvRk2aAaZergp04Eae7r00d_1l2r8C79X8kLF-zg&oe=69CE9270"
    },
    { 
      label: "Talibon Delights", 
      desc: "The best of local Talibon cuisine in every bite.",
      image: "https://scontent.fmnl13-4.fna.fbcdn.net/v/t39.30808-6/486518217_1201985891936239_5368295007549457072_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=107&ccb=1-7&_nc_sid=a934a8&_nc_eui2=AeGKSwuXQRO9H8vg2MrX8KMQejKzZaBCKSB6MrNloEIpIBsJuqU6rUPPzrB4aWKdzwxhMcvYT7ygWL3ROVA_ckOM&_nc_ohc=0WUB7FsoNkwQ7kNvwFtZIvW&_nc_oc=AdpfR-6pqA2h_tY6fURQTrJwGaDYnbVCp2TPfTfZ7BXh1XtD1qjl_U-8YSl_iKXw05Y&_nc_zt=23&_nc_ht=scontent.fmnl13-4.fna&_nc_gid=QXlKtwL4W6i36B1zoNQlGg&_nc_ss=7a32e&oh=00_AfzOdiF4hafh2dC-QdcIIJza8NiALtcrm9SYvQ82DfeLVg&oe=69CEA30A"
    },
    { 
      label: "Sweet Treats", 
      desc: "End your meal with our delightful homemade desserts.",
      image: "https://scontent.fmnl13-3.fna.fbcdn.net/v/t39.30808-6/484901633_1195044502630378_3990430680773387002_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=101&ccb=1-7&_nc_sid=a934a8&_nc_eui2=AeFveACWVQV1HnSEAuwkwH9mL0doLkSvu7svR2guRK-7u84670nmHbU7MJ3letHZsLcpGI1bD1ad4gEzPIAC7agr&_nc_ohc=I5cviR-MI5IQ7kNvwEXst4Q&_nc_oc=Adpkuc7949yuGIgLkSAW8IjSj87lxnhmZyYLOa8WGNVUTB9wgw7I_s7vXFKE0KHjFzY&_nc_zt=23&_nc_ht=scontent.fmnl13-3.fna&_nc_gid=v7I-Bcyjnpn6q3_Y8uT8wg&_nc_ss=7a32e&oh=00_AfzZFH7po9A5LVjr9uBw0vf_tvdcTgH-Efs28TPgPLvfJw&oe=69CE9639"
    },
  ];

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="gallery" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-5xl font-serif mb-4">Visual <span className="italic">Symphony</span></h2>
            <p className="text-primary/60">A glimpse into the cozy corners and vibrant dishes that define Ngaon Ta Resto.</p>
          </div>
          <div className="flex gap-4">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border-2 border-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
            >
              <X size={20} className="rotate-45" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border-2 border-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </div>

        <div className="relative h-[500px] md:h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6, ease: "circOut" }}
              className="absolute inset-0 grid grid-cols-1 lg:grid-cols-12 gap-8"
            >
              <div className="lg:col-span-8 h-full">
                <img 
                  src={slides[currentIndex].image} 
                  alt={slides[currentIndex].label} 
                  className="w-full h-full object-cover rounded-[3rem] shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="lg:col-span-4 flex flex-col justify-center">
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-accent font-bold uppercase tracking-[0.3em] text-xs mb-4 block"
                >
                  Feature 0{currentIndex + 1}
                </motion.span>
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-4xl font-serif mb-6"
                >
                  {slides[currentIndex].label}
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-primary/60 text-lg leading-relaxed mb-8"
                >
                  {slides[currentIndex].desc}
                </motion.p>
                <div className="flex gap-2">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIndex(i)}
                      className={`h-1 rounded-full transition-all duration-500 ${i === currentIndex ? 'w-12 bg-primary' : 'w-4 bg-primary/10'}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formType, setFormType] = useState('reservation'); // 'reservation' or 'message'

  return (
    <section id="contact" className="py-24 bg-primary text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 opacity-5 -translate-y-1/2 translate-x-1/2">
        <Utensils size={600} strokeWidth={0.5} />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-5xl md:text-7xl font-serif mb-10">Visit Us in <br /><span className="italic">Talibon</span></h2>
            <div className="space-y-8">
              {[
                { Icon: MapPin, title: "Location", text: "Poblacion, Talibon, Bohol\nNear the Municipal Hall" },
                { Icon: Clock, title: "Hours", text: "Monday - Sunday\n10:00 AM - 10:00 PM" },
                { Icon: Phone, title: "Reservations", text: "+63 912 345 6789\nhello@ngaonta.com" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-6"
                >
                  <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                    <item.Icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif mb-2">{item.title}</h4>
                    <p className="text-white/70 whitespace-pre-line">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-12 rounded-[4rem] text-primary shadow-2xl"
          >
            <div className="flex justify-center gap-4 mb-10">
              <button 
                onClick={() => setFormType('reservation')}
                className={`px-6 py-2 rounded-full text-xs uppercase tracking-widest font-bold transition-all ${formType === 'reservation' ? 'bg-primary text-white' : 'bg-secondary text-primary/40'}`}
              >
                Reservation
              </button>
              <button 
                onClick={() => setFormType('message')}
                className={`px-6 py-2 rounded-full text-xs uppercase tracking-widest font-bold transition-all ${formType === 'message' ? 'bg-primary text-white' : 'bg-secondary text-primary/40'}`}
              >
                Message
              </button>
            </div>

            <AnimatePresence mode="wait">
              {formType === 'reservation' ? (
                <motion.div
                  key="reservation"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h3 className="text-4xl font-serif mb-10 text-center">Book a Table</h3>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold opacity-50">Name</label>
                        <input type="text" className="w-full bg-secondary border-none rounded-2xl p-4 focus:ring-2 focus:ring-accent outline-none transition-all" placeholder="Juan Dela Cruz" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold opacity-50">Email</label>
                        <input type="email" className="w-full bg-secondary border-none rounded-2xl p-4 focus:ring-2 focus:ring-accent outline-none transition-all" placeholder="juan@example.com" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold opacity-50 flex items-center gap-2"><Calendar size={12} /> Date</label>
                        <input type="date" className="w-full bg-secondary border-none rounded-2xl p-4 focus:ring-2 focus:ring-accent outline-none transition-all" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold opacity-50 flex items-center gap-2"><Clock size={12} /> Time</label>
                        <input type="time" className="w-full bg-secondary border-none rounded-2xl p-4 focus:ring-2 focus:ring-accent outline-none transition-all" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold opacity-50 flex items-center gap-2"><Users size={12} /> Guests</label>
                        <select className="w-full bg-secondary border-none rounded-2xl p-4 focus:ring-2 focus:ring-accent outline-none transition-all appearance-none">
                          {[1, 2, 3, 4, 5, 6, 7, 8, '9+'].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>)}
                        </select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold opacity-50">Special Requests</label>
                      <textarea rows={3} className="w-full bg-secondary border-none rounded-2xl p-4 focus:ring-2 focus:ring-accent outline-none resize-none transition-all" placeholder="Allergies, birthday surprise, etc."></textarea>
                    </div>
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-primary text-white py-5 rounded-2xl font-bold uppercase tracking-widest text-sm hover:bg-accent transition-colors shadow-xl shadow-primary/10"
                    >
                      Book Now
                    </motion.button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="message"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h3 className="text-4xl font-serif mb-10 text-center">Send a Message</h3>
                  <form className="space-y-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] uppercase tracking-widest font-bold opacity-50">Name</label>
                        <input type="text" className="w-full bg-secondary border-none rounded-2xl p-5 focus:ring-2 focus:ring-accent outline-none transition-all" placeholder="Juan Dela Cruz" />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] uppercase tracking-widest font-bold opacity-50">Email</label>
                        <input type="email" className="w-full bg-secondary border-none rounded-2xl p-5 focus:ring-2 focus:ring-accent outline-none transition-all" placeholder="juan@example.com" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] uppercase tracking-widest font-bold opacity-50">Message</label>
                      <textarea rows={4} className="w-full bg-secondary border-none rounded-2xl p-5 focus:ring-2 focus:ring-accent outline-none resize-none transition-all" placeholder="How can we help you?"></textarea>
                    </div>
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-primary text-white py-5 rounded-2xl font-bold uppercase tracking-widest text-sm hover:bg-accent transition-colors shadow-xl shadow-primary/10"
                    >
                      Send Message
                    </motion.button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-16 bg-secondary border-t border-primary/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="text-2xl font-serif font-bold tracking-tighter text-primary flex items-center gap-3">
          <img 
            src={LOGO_URL} 
            alt="Ngaon Ta Resto Logo" 
            className="w-12 h-12 object-contain rounded-full border-2 border-primary/10"
            referrerPolicy="no-referrer"
          />
          NGAON TA
        </div>
        <div className="text-sm text-primary/50 font-medium text-center md:text-left max-w-md">
          © 2026 Ngaon Ta Resto. All rights reserved. Crafted with love in Bohol. Authentic flavors, modern comfort.
        </div>
        <div className="flex space-x-8">
          <motion.a whileHover={{ y: -3 }} href="#" className="text-primary/60 hover:text-primary transition-colors"><Instagram size={24} /></motion.a>
          <motion.a whileHover={{ y: -3 }} href="#" className="text-primary/60 hover:text-primary transition-colors"><Facebook size={24} /></motion.a>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

const CartDrawer = ({ isOpen, onClose, cart, updateQuantity, removeFromCart }) => {
  const total = cart.reduce((sum, item) => sum + (parseInt(item.price.replace('₱', '')) * item.quantity), 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[200]"
          />
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-[201] shadow-2xl flex flex-col"
          >
            <div className="p-8 border-b border-gray-100 flex justify-between items-center">
              <h2 className="text-3xl font-serif">Your Order</h2>
              <button onClick={onClose} className="p-2 hover:bg-secondary rounded-full transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-8 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-primary/30 space-y-4">
                  <ShoppingCart size={64} strokeWidth={1} />
                  <p className="font-medium">Your cart is empty</p>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-4 items-center">
                    <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center text-primary">
                      <Utensils size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold">{item.name}</h4>
                      <p className="text-sm text-primary/60">{item.price}</p>
                    </div>
                    <div className="flex items-center gap-3 bg-secondary rounded-full px-3 py-1">
                      <button onClick={() => updateQuantity(item.id, -1)} className="p-1 hover:text-accent transition-colors">
                        <Minus size={14} />
                      </button>
                      <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)} className="p-1 hover:text-accent transition-colors">
                        <Plus size={14} />
                      </button>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="text-primary/20 hover:text-red-500 transition-colors">
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))
              )}
            </div>

            <div className="p-8 bg-secondary/50 border-t border-gray-100">
              <div className="flex justify-between items-center mb-6">
                <span className="text-primary/60 font-medium">Total Amount</span>
                <span className="text-3xl font-serif font-bold text-primary">₱{total}</span>
              </div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={cart.length === 0}
                className="w-full bg-primary text-white py-5 rounded-2xl font-bold uppercase tracking-widest text-sm hover:bg-accent transition-colors shadow-xl shadow-primary/10 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Checkout Now
              </motion.button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (item) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id, delta) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="relative selection:bg-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <MenuSection addToCart={addToCart} cart={cart} />
        <Gallery />
        <Contact />
      </main>
      <Footer />

      {/* Floating Cart Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: cart.length > 0 ? 1 : 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-8 right-8 z-[150] bg-accent text-white p-5 rounded-full shadow-2xl shadow-accent/40 flex items-center justify-center"
      >
        <ShoppingCart size={28} />
        <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-white">
          {cart.reduce((sum, i) => sum + i.quantity, 0)}
        </span>
      </motion.button>

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cart={cart}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
      />
    </div>
  );
}

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const articles = [
  {
    title: 'The Poetry of Light in Modern Architecture',
    cat: 'Design',
    date: 'Oct 24, 2024',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    desc: 'Exploring how natural illumination shapes spatial awareness, textures, and the atmosphere within custom masonry structures.',
    featured: true
  },
  {
    title: 'Honest Materials: The Soul of Concrete',
    cat: 'Craftsmanship',
    date: 'Oct 12, 2024',
    image: 'https://images.unsplash.com/photo-1541888086225-ee593257dfde?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    desc: 'Understanding the raw beauty and longevity of hand-poured architectural concrete and its role in modern minimalism.',
    featured: false
  },
  {
    title: 'Sustainable Luxury in Coastal Builds',
    cat: 'Sustainability',
    date: 'Sept 28, 2024',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    desc: 'How contemporary construction techniques combine eco-friendly materials with architectural grandeur by the ocean.',
    featured: false
  }
];

const Blog = () => {
  const [clickedFeatured, setClickedFeatured] = useState(false);
  const [clickedCards, setClickedCards] = useState<Record<number, boolean>>({});

  const toggleCard = (i: number) => {
    setClickedCards(prev => ({ ...prev, [i]: !prev[i] }));
  };

  return (
    <div className="bg-[var(--background)] min-h-screen pt-40 pb-32">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        
        {/* Header */}
        <div className="max-w-4xl mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#F4A300] text-[10px] uppercase tracking-[0.4em] mb-4 block font-semibold"
          >
            Journal
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-5xl md:text-7xl font-serif text-[#1C1A17] uppercase tracking-wider"
          >
            Editorial <span className="italic text-[#F4A300] lowercase font-normal">perspectives</span>
          </motion.h1>
        </div>

        <div className="w-full h-[1px] bg-gray-200 mb-16" />

        {/* Featured Article */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div
            onClick={() => setClickedFeatured(prev => !prev)}
            className="cursor-pointer"
          >
          <Link to="#" className="group block bg-[#ffffff] rounded-3xl overflow-hidden shadow-lg md:hover:shadow-2xl transition-all duration-700 grid grid-cols-1 lg:grid-cols-12 min-h-[450px]">
            <div className="lg:col-span-7 overflow-hidden h-64 lg:h-auto">
              <img 
                src={articles[0].image} 
                alt="Featured" 
                className={`w-full h-full object-cover transition-all duration-1000 md:group-hover:scale-105 md:group-hover:grayscale-0 ${
                  clickedFeatured ? 'grayscale-0 scale-105' : 'grayscale'
                }`}
              />
            </div>
            <div className="lg:col-span-5 p-10 md:p-12 flex flex-col justify-center bg-[#ffffff]">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#A87B51] mb-4 block font-bold">{articles[0].cat}</span>
              <h2 className={`text-3xl md:text-4xl font-serif transition-colors duration-500 mb-6 leading-snug ${
                clickedFeatured ? 'text-[#A87B51]' : 'text-[#1C1A17] md:group-hover:text-[#A87B51]'
              }`}>
                {articles[0].title}
              </h2>
              <p className="text-gray-500 text-sm font-light leading-relaxed mb-8">
                {articles[0].desc}
              </p>
              <div className={`flex items-center gap-3 text-xs uppercase tracking-wider font-semibold transition-colors ${
                clickedFeatured ? 'text-[#A87B51]' : 'text-[#1C1A17] md:group-hover:text-[#A87B51]'
              }`}>
                Read Article
                <ArrowRight size={14} className="md:group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </div>
          </Link>
          </div>
        </motion.div>

        {/* Grid of standard articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          {articles.slice(1).map((article, i) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <div
                onClick={() => toggleCard(i)}
                className="group block bg-[#ffffff] rounded-3xl overflow-hidden shadow-md md:hover:shadow-2xl transition-all duration-500 flex flex-col h-full cursor-pointer"
              >
                <div className="h-56 sm:h-64 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className={`w-full h-full object-cover transition-all duration-1000 md:group-hover:scale-105 md:group-hover:grayscale-0 ${
                      clickedCards[i] ? 'grayscale-0 scale-105' : 'grayscale'
                    }`}
                  />
                </div>
                <div className="p-8 flex flex-col justify-between flex-grow bg-[#ffffff]">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-[#A87B51] mb-4 block font-bold">{article.cat}</span>
                    <h3 className={`text-2xl font-serif transition-colors duration-500 mb-4 leading-snug ${
                      clickedCards[i] ? 'text-[#A87B51]' : 'text-[#1C1A17] md:group-hover:text-[#A87B51]'
                    }`}>
                      {article.title}
                    </h3>
                    <p className="text-gray-500 text-sm font-light leading-relaxed mb-6">
                      {article.desc}
                    </p>
                  </div>
                  <div className="flex items-center justify-between border-t border-gray-100 pt-6 mt-auto">
                    <span className="text-brand-concrete text-[10px] uppercase tracking-[0.2em]">{article.date}</span>
                    <div className={`flex items-center gap-2 text-xs uppercase tracking-wider font-semibold transition-colors ${
                      clickedCards[i] ? 'text-[#A87B51]' : 'text-[#1C1A17] md:group-hover:text-[#A87B51]'
                    }`}>
                      Read
                      <ArrowRight size={14} className="md:group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Deep Blue Container Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-[#0B3C5D] rounded-3xl py-16 px-8 md:px-16 text-center relative overflow-hidden shadow-xl"
        >
          {/* Subtle background overlay */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <span className="text-[#F4A300] text-[10px] uppercase tracking-[0.4em] mb-4 block font-semibold">Stay Inspired</span>
            <h2 className="text-[var(--background)] text-3xl md:text-4xl font-serif uppercase tracking-wider mb-4">
              Join Our Editorial List
            </h2>
            <p className="text-gray-200 text-sm font-light leading-relaxed mb-8 max-w-md">
              Receive updates on our latest designs, architectural philosophies, and custom commissions directly to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 w-full justify-center max-w-md" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-6 py-3.5 bg-[var(--background)] border border-[var(--background)] text-[var(--foreground)] rounded-full placeholder-[var(--foreground)]/50 focus:outline-none focus:border-[#F4A300] transition-colors text-sm w-full sm:flex-1"
              />
              <button 
                type="submit" 
                className="px-8 py-3.5 bg-[var(--background)] text-[var(--foreground)] border border-[var(--background)] text-xs uppercase tracking-wider rounded-full hover:bg-transparent hover:text-white hover:border-white transition-all font-medium shrink-0"
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Blog;

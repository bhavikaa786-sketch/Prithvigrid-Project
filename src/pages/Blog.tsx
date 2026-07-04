import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const articles = [
  {
    title: 'The Poetry of Light in Modern Architecture',
    cat: 'Design',
    date: 'Oct 24, 2024',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    featured: true
  },
  {
    title: 'Honest Materials: The Soul of Concrete',
    cat: 'Craftsmanship',
    date: 'Oct 12, 2024',
    image: 'https://images.unsplash.com/photo-1541888086225-ee593257dfde?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    featured: false
  },
  {
    title: 'Sustainable Luxury in Coastal Builds',
    cat: 'Sustainability',
    date: 'Sept 28, 2024',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    featured: false
  }
];

const Blog = () => {
  return (
    <div className="bg-brand-black pt-40 pb-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mb-32">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] uppercase tracking-[0.4em] text-brand-gold mb-8 block font-medium"
          >
            Journal
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-serif leading-tight text-white mb-12"
          >
            Editorial <br /><span className="italic">Perspectives</span>
          </motion.h1>
        </div>

        {/* Featured Article */}
        <div className="mb-32">
          <Link to="#" className="group block relative h-[70vh] overflow-hidden">
            <img src={articles[0].image} alt="Featured" className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent" />
            <div className="absolute bottom-12 left-12 max-w-2xl">
              <span className="text-[10px] uppercase tracking-[0.3em] text-brand-gold mb-4 block font-bold">{articles[0].cat}</span>
              <h2 className="text-5xl md:text-6xl font-serif text-white group-hover:text-brand-gold transition-colors duration-500 italic">{articles[0].title}</h2>
            </div>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {articles.slice(1).map((article) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link to="#" className="block">
                <div className="aspect-[16/9] overflow-hidden mb-8">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-brand-gold mb-4 block font-bold">{article.cat}</span>
                <h3 className="text-3xl font-serif text-white group-hover:text-brand-gold transition-colors duration-500 mb-6">{article.title}</h3>
                <p className="text-brand-concrete text-sm uppercase tracking-[0.2em]">{article.date}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;

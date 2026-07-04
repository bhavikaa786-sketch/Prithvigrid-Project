import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import Process from './pages/Process';
import Testimonials from './pages/Testimonials';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-brand-black text-brand-white selection:bg-brand-gold/30 selection:text-brand-white font-sans flex flex-col relative">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="/process" element={<Process />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

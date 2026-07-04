import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const ProjectDetails = () => {
  const { id } = useParams();
  console.log('Project ID:', id); // Using it to fix the error

  return (
    <div className="bg-brand-black">
      {/* Hero */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80" 
          alt="Project Detail" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-black/40" />
        <div className="absolute bottom-20 left-0 right-0">
          <div className="container mx-auto px-6 md:px-12">
            <Link to="/projects" className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/60 hover:text-white transition-colors mb-8">
              <ArrowLeft size={14} /> Back to Projects
            </Link>
            <h1 className="text-6xl md:text-8xl font-serif text-white">The Glass <span className="italic">House</span></h1>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
            <div className="lg:col-span-8">
              <h2 className="text-[10px] uppercase tracking-[0.4em] text-brand-gold mb-12 block font-medium">Project Overview</h2>
              <p className="text-3xl md:text-4xl font-serif text-white leading-relaxed mb-12 font-light">
                A study in transparency and structural rhythm, The Glass House redefined the boundaries of coastal living.
              </p>
              <div className="space-y-8 text-brand-concrete text-xl leading-relaxed font-light">
                <p>
                  Perched on the rugged cliffs of the Pacific coast, this project was a masterclass in architectural restraint. The challenge was to create a structure that vanished into its environment while providing a fortress against the elements.
                </p>
                <p>
                  We utilized custom-engineered steel frames and ultra-clear structural glass to minimize visual barriers. The result is a seamless transition between the hand-crafted interior surfaces and the vast horizon beyond.
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-4 border-l border-brand-white/10 pl-12 py-12">
              <div className="space-y-12">
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.3em] text-brand-gold mb-4 font-bold">Location</h4>
                  <p className="text-white font-light">Big Sur, California</p>
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.3em] text-brand-gold mb-4 font-bold">Year</h4>
                  <p className="text-white font-light">2023</p>
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.3em] text-brand-gold mb-4 font-bold">Materials</h4>
                  <p className="text-white font-light">Exposed Steel, Low-Iron Glass, Honed Basalt</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-32 bg-brand-dark">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="aspect-square overflow-hidden">
              <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" alt="Detail 1" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
            </div>
            <div className="aspect-square overflow-hidden mt-24">
              <img src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" alt="Detail 2" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
            </div>
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="py-48 border-t border-brand-white/5">
        <div className="container mx-auto px-6 text-center">
          <span className="text-[10px] uppercase tracking-[0.4em] text-brand-gold mb-8 block">Next Project</span>
          <Link to="/projects/2" className="group inline-block">
            <h2 className="text-6xl md:text-8xl font-serif text-white group-hover:text-brand-gold transition-colors duration-500 italic">Modern Villa</h2>
            <div className="mt-12 flex justify-center items-center gap-4 text-brand-concrete group-hover:text-white transition-colors uppercase tracking-[0.2em] text-[11px]">
              View Project <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;

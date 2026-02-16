import Link from "next/link";
import Image from "next/image";

export default function Books() {
  return (
    <main className="pt-24 min-h-screen bg-[#fdfbf7]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-5xl md:text-6xl font-serif text-primary mb-16 text-center">
          Literary <span className="text-accent italic">Works</span>
        </h1>

        {/* Featured Book */}
        <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-xl border border-secondary mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl bg-[#eee]">
               {/* Mockup for Book Cover */}
               <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#1a1a1a] text-[#f5f5dc] p-8 text-center border-8 border-double border-accent/40">
                    <h3 className="font-serif text-5xl font-bold mb-4">The Late</h3>
                    <h3 className="font-serif text-6xl font-bold italic text-accent mb-8">Bloomer</h3>
                    <div className="w-12 h-1 bg-accent mx-auto mb-8"></div>
                    <p className="text-lg tracking-[0.3em] uppercase font-light">Joan Oji</p>
                </div>
            </div>
            
            <div className="space-y-8">
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-bold tracking-wider uppercase">
                Best Seller • Manifesto
              </span>
              <h2 className="text-4xl font-serif text-primary font-bold">The Late Bloomer</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                An intimate and powerful 218-page memoir that explores the complexities of womanhood, ambition, and the pursuit of dreams deferred.
              </p>
              
              <div className="space-y-4 text-slate-600">
                <p><strong>ISBN:</strong> 978-978-783-1489</p>
                <p><strong>Published:</strong> 2023</p>
                <p><strong>Genre:</strong> Autobiography / Inspirational</p>
              </div>

              <div className="pt-6">
                <h4 className="font-serif text-xl font-bold text-primary mb-4">Critics Acclaim</h4>
                <blockquote className="border-l-4 border-accent pl-4 italic text-slate-600 mb-6">
                  "A compelling narrative of perseverance. Joan Oji proves that it's not about how you start, but how you finish."
                </blockquote>
              </div>

              <div className="flex gap-4">
                <button className="btn-primary">Buy Now</button>
                <button className="btn-outline">Read Preview</button>
              </div>
            </div>
          </div>
        </div>

        {/* Other Works */}
        <h2 className="text-3xl font-serif text-primary mb-12 text-center">Other Publications</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Work 2 */}
          <div className="group cursor-pointer">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-secondary hover:shadow-lg transition-all h-full"> 
              <div className="aspect-[3/4] bg-slate-100 rounded-lg mb-6 flex items-center justify-center text-slate-300 font-serif italic text-2xl">
                Cover
              </div>
              <h3 className="text-xl font-serif font-bold text-primary mb-2">Wit & Wisdom</h3>
              <p className="text-sm text-slate-500 mb-4">A collection of sayings.</p>
              <span className="text-accent text-sm font-bold group-hover:underline">View Details →</span>
            </div>
          </div>
          {/* Placeholder for future works */}
           <div className="group cursor-pointer">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-secondary hover:shadow-lg transition-all h-full opacity-60"> 
              <div className="aspect-[3/4] bg-slate-50 rounded-lg mb-6 flex items-center justify-center text-slate-300 font-serif italic text-2xl">
                Coming Soon
              </div>
              <h3 className="text-xl font-serif font-bold text-primary mb-2">Untitled Project</h3>
              <p className="text-sm text-slate-500 mb-4">In progress.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

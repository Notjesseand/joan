import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="font-sans text-lg text-slate-700">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center p-6 pt-32 md:pt-6 bg-[#fdfbf7] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/flower-pattern.png')]"></div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-8 animate-fade-in-up">
            <span className="inline-block px-6 py-2 bg-gradient-to-r from-primary/5 to-transparent text-primary rounded-full text-xs font-bold tracking-[0.2em] uppercase border-l-4 border-accent shadow-sm">
              Author • Educator • Philanthropist
            </span>
            <h1 className="text-6xl md:text-8xl font-serif text-primary leading-[0.9]">
              Dr. Joan <br />
              <span className="italic text-accent bg-clip-text text-transparent bg-gradient-to-r from-accent to-red-600">Oji</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-lg leading-relaxed font-light pl-6 border-l-2 border-primary/20">
              "It is never too late to bloom." A journey of resilience, education, and the power of the human spirit.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <Link href="/books" className="btn-primary text-center shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                Discover Her Works
              </Link>
              <Link href="/about" className="btn-outline text-center hover:bg-primary/5">
                Meet Dr. Joan
              </Link>
            </div>
          </div>

          <div className="relative lg:h-[700px] h-[500px] w-full animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
             {/* Placeholder for Joan Oji's Image - Using a dignified placeholder for now */}
            <div className="absolute inset-0 bg-secondary/30 rounded-t-[10rem] rounded-b-[3rem] overflow-hidden border-8 border-white shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-700 group">
              <Image 
                src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1974&auto=format&fit=crop" 
                alt="Dr. Joan Oji" 
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
             {/* Decorative element */}
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-accent/10 rounded-full blur-3xl z-[-1] animate-float"></div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-primary/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Featured Work: The Late Bloomer */}
      <section className="py-24 px-6 bg-white border-y border-secondary/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative group">
              <div className="absolute inset-0 bg-primary transform translate-x-4 translate-y-4 rounded-lg transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
              <div className="relative aspect-[3/4] bg-slate-200 rounded-lg shadow-xl overflow-hidden border border-slate-100">
                {/* Placeholder for Book Cover */}
                <div className="w-full h-full flex flex-col items-center justify-center bg-[#f5f5dc] text-primary p-8 text-center border-4 border-double border-accent/20">
                    <h3 className="font-serif text-4xl font-bold mb-2">The Late</h3>
                    <h3 className="font-serif text-5xl font-bold italic text-accent mb-6">Bloomer</h3>
                    <p className="text-sm tracking-widest uppercase">A Memoir by Joan Oji</p>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2 space-y-8">
              <h2 className="text-4xl md:text-5xl font-serif text-primary">The Late Bloomer</h2>
              <h3 className="text-xl text-accent font-medium uppercase tracking-widest">Her inspiring memoir</h3>
              <p className="text-lg leading-relaxed text-slate-600">
                From a teenage wife and mother with only a First School Leaving Certificate to earning a Ph.D., Joan Oji's story is a testament to unwavering determination.
              </p>
              <p className="text-lg leading-relaxed text-slate-600">
                Witness 50 years of marriage, the joy of raising eight daughters, and the pursuit of academic excellence against all odds.
              </p> 
              <Link href="/books" className="inline-flex items-center text-primary font-bold hover:text-accent transition-colors gap-2 text-lg border-b-2 border-primary/20 hover:border-accent pb-1">
                Read Synopsis <span className="text-2xl">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Literary Services */}
      <section className="py-24 px-6 bg-[#fdfbf7]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent tracking-[0.2em] uppercase font-bold text-sm">Professional Services</span>
            <h2 className="text-4xl md:text-5xl font-serif text-primary mt-3 mb-6">Literary Excellence</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              With decades of experience in education and language arts, Dr. Joan Oji offers professional literary services to help others polish their voice and share their stories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              title="Proofreading"
              description="Meticulous review of your manuscript to eliminate errors in grammar, punctuation, and spelling, ensuring a distraction-free reading experience."
              price="Custom Quote"
            />
            <ServiceCard 
              title="Editorial Review"
              description="In-depth analysis of your work's structure, flow, and clarity. Receive constructive feedback to elevate your narrative to professional standards."
              price="From ₦50,000"
              featured={true}
            />
             <ServiceCard 
              title="Book Editing"
              description="Comprehensive editing services refining style, tone, and consistency. Perfect for academic papers, memoirs, and fiction."
              price="Custom Quote"
            />
          </div>
          <div className="text-center mt-12">
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2 group">
              Book a Service <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy / Quote */}
      <section className="py-32 px-6 bg-primary text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-6xl text-accent mb-6 font-serif">"</div>
          <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-8 !text-white">
            Do something for nothing.
          </h2>
          <p className="text-xl opacity-80 font-light">— Dr. Joan Oji</p>
        </div>
      </section>

      {/* Impact / Foundation Preview */}
      <section className="py-24 px-6 bg-[#fdfbf7]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent tracking-widest uppercase font-semibold text-sm">Giving Back</span>
            <h2 className="text-4xl font-serif mt-3 mb-6">The Josiah and Joan Oji Foundation</h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon="🎓"
              title="Girl Child Education"
              text="Empowering young girls through scholarships and mentorship to pursue their academic dreams without hindrance."
            />
             <FeatureCard 
              icon="🤝"
              title="Community Outreach"
              text="Providing essential support and resources to underprivileged families in local communities."
            />
             <FeatureCard 
              icon="📚"
              title="Literacy Programs"
              text="Organizing reading workshops and donating books to schools to foster a culture of lifelong learning."
            />
          </div>
          
          <div className="text-center mt-12">
            <Link href="/foundation" className="btn-outline">
              Learn More About Our Mission
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white pt-24 pb-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-black tracking-tight">JOAN OJI</h3>
            <p className="text-white/70 max-w-sm">
              Celebrating a life of resilience, faith, and academic achievement. Inspiring the next generation of leaders.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6 text-accent">Navigate</h4>
            <ul className="space-y-4 text-white/80">
              <li><Link href="/" className="hover:text-white hover:pl-2 transition-all">Home</Link></li>
              <li><Link href="/about" className="hover:text-white hover:pl-2 transition-all">Biography</Link></li>
              <li><Link href="/books" className="hover:text-white hover:pl-2 transition-all">Books</Link></li>
              <li><Link href="/foundation" className="hover:text-white hover:pl-2 transition-all">Foundation</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6 text-accent">Contact</h4>
            <ul className="space-y-4 text-white/80">
              <li>Email: info@joanoji.com</li>
              <li>Lagos, Nigeria</li>
              <li className="pt-4 flex gap-4">
                {/* Social Icons Placeholder */}
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors cursor-pointer">In</div>
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors cursor-pointer">X</div>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 text-center text-white/40 text-sm">
          <p>© 2026 Dr. Joan Oji. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

function FeatureCard({ icon, title, text }: { icon: string, title: string, text: string }) {
  return (
    <div className="bg-white p-10 rounded-2xl shadow-sm border border-secondary hover:shadow-xl transition-all duration-300 group">
      <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{icon}</div>
      <h3 className="text-2xl font-serif text-primary mb-4 font-bold">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{text}</p>
    </div>
  );
}

function ServiceCard({ title, description, price, featured = false }: { title: string, description: string, price: string, featured?: boolean }) {
  return (
    <div className={`p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${featured ? 'bg-primary text-white border-primary shadow-2xl relative overflow-hidden' : 'bg-white text-slate-600 border-secondary shadow-sm hover:shadow-lg'}`}>
      {featured && <div className="absolute top-0 right-0 bg-accent text-white text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>}
      <h3 className={`text-2xl font-serif font-bold mb-4 ${featured ? 'text-white' : 'text-primary'}`}>{title}</h3>
      <p className={`mb-8 leading-relaxed ${featured ? 'text-white/80' : 'text-slate-600'}`}>{description}</p>
      <div className={`pt-6 border-t ${featured ? 'border-white/20' : 'border-secondary'}`}>
        <span className="text-sm opacity-70 block mb-1">Starting at</span>
        <span className={`text-xl font-bold ${featured ? 'text-accent' : 'text-primary'}`}>{price}</span>
      </div>
    </div>
  );
}
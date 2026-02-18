import Image from "next/image";

export default function About() {
  return (
    <main className="pt-24 min-h-screen bg-[#fdfbf7]">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-5xl md:text-6xl font-serif text-primary mb-8 text-center leading-tight">
          A Life of <span className="text-accent italic">Purpose</span>
        </h1>
        
        <div className="relative w-full max-w-2xl mx-auto mb-16 group">
          <div className="relative aspect-[3/4] md:aspect-[4/3] rounded-t-[10rem] rounded-b-3xl overflow-hidden shadow-2xl border-8 border-white">
            <Image 
              src="/profile.png" 
              alt="Dr. Joan Oji in Academic Regalia" 
              fill
              className="object-cover object-top hover:scale-105 transition-transform duration-700"
              priority
            />
            {/* Elegant Overlay for text contrast if needed, mostly transparent */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-60"></div>
            
            <div className="absolute bottom-0 left-0 w-full p-8 text-white">
               <p className="font-serif italic text-xl md:text-2xl font-bold tracking-wide">"Education is the passport to the future."</p>
            </div>
          </div>
          {/* Decorative background blob */}
          <div className="absolute -z-10 top-10 -right-10 w-full h-full bg-accent/5 rounded-full blur-3xl"></div>
        </div>

        <div className="prose prose-lg prose-slate mx-auto font-light leading-relaxed">
          <p className="text-xl font-serif text-primary/80 mb-8 border-l-4 border-accent pl-6 italic">
            "I have always believed that our starting point does not define our destination. It is the courage to continue that writes our story."
          </p>

          <h3 className="text-2xl font-serif text-primary mt-12 mb-4">Early Foundations & Resilience</h3>
          <p>
            I was born on June 6, 1957, in Nigeria. My early life was marked by both love and profound challenge. At the tender age of 11, I lost my father — a pivotal moment that thrust me into a world where resilience became a necessity rather than a choice. Navigating my primary education during the Nigerian Civil War, I learned the value of perseverance amidst uncertainty.
          </p>

          <h3 className="text-2xl font-serif text-primary mt-12 mb-4">The Late Bloomer's Journey</h3>
          <p>
            My path to academic acclaim was unconventional. By the time many of my peers were graduating university, I was deep in the trenches of motherhood and marriage. With only a First School Leaving Certificate initially, and later a Teacher's Grade Two Certificate and NCE, I harbored a burning desire for more.
          </p>
          <p>
            Already a mother of six — and eventually eight — daughters, I took the bold step to enroll at Ahmadu Bello University, Zaria. The whispers of doubt from others only fueled my determination. Balancing the immense responsibilities of a large family and a teaching career, I didn't just survive; I thrived.
          </p>

          <h3 className="text-2xl font-serif text-primary mt-12 mb-4">Academic Excellence</h3>
          <p>
            My academic comeback was nothing short of spectacular. I graduated with <strong>First Class Honours in Education (Language Arts)</strong>, silencing critics and proving to myself that intellect knows no expiration date. I was awarded the prestigious Dean's Prize for the Best All-Round Graduating Student.
          </p>
          <p>
            I did not stop there. My insatiable quest for knowledge led me to obtain my Ph.D., cementing my place as a scholar and, I hope, a beacon of hope for "late bloomers" everywhere.
          </p>

          <h3 className="text-2xl font-serif text-primary mt-12 mb-4">Family & Legacy</h3>
          <p>
            Beyond my degrees, I celebrate over 50 years of marriage. I have raised eight daughters who are blazing their own trails. My life is a testament to the idea that a woman does not have to choose between family and ambition — she can, with faith and grit, embrace both.
          </p>
        </div>

        <div className="mt-20 pt-12 border-t border-secondary text-center space-y-8">
            <p className="text-slate-500 italic">I continue to write, teach, and inspire from my home in Nigeria.</p>
            
            <div className="bg-white p-12 rounded-2xl shadow-lg border border-primary/5 max-w-3xl mx-auto transform hover:-translate-y-1 transition-transform duration-300">
              <h3 className="text-3xl font-serif text-primary mb-4">Interested in inviting Dr. Joan Oji?</h3>
              <p className="text-slate-600 mb-8 max-w-lg mx-auto">
                Available for speaking engagements, book signings, and educational workshops.
              </p>
              <a href="/contact" className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-lg shadow-xl shadow-primary/20">
                Contact / Book Now <span className="text-xl">→</span>
              </a>
            </div>
        </div>
      </div>
    </main>
  );
}
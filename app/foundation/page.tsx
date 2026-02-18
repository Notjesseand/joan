import Image from "next/image";

export default function Foundation() {
  return (
    <main className="pt-24 min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-primary text-white py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/10 rounded-l-full blur-3xl"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 !text-white">Josiah & Joan Oji Foundation</h1>
          <p className="text-xl md:text-2xl font-light !text-white/90 max-w-2xl mx-auto">
            "Promoting equal opportunities for every child, one life at a time."
          </p>
        </div>
      </div>

      {/* Mission */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
                <h2 className="text-3xl font-serif text-primary font-bold">Our Mission</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                    We established the Josiah and Joan Oji Foundation for Girls and Teens with a singular vision: to dismantle the barriers that prevent children, especially young girls, from reaching their full potential.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                    We believe that education is the most powerful weapon which you can use to change the world. Through our various initiatives, we provide scholarship, mentorship, and resources to those who need it most.
                </p>
            </div>
             <div className="relative aspect-square rounded-full overflow-hidden border-8 border-[#fdfbf7] shadow-2xl">
                <Image 
                    src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop" 
                    alt="Children learning" 
                    fill
                    className="object-cover"
                />
            </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-20 px-6 bg-[#fdfbf7]">
        <div className="max-w-7xl mx-auto">
             <h2 className="text-3xl font-serif text-primary font-bold text-center mb-16">Our Impact Areas</h2>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="p-8 bg-white rounded-xl shadow-sm">
                    <div className="text-6xl mb-6">👧🏾</div>
                    <h3 className="text-xl font-bold text-primary mb-4">Girl Child Advocacy</h3>
                    <p className="text-slate-600">Fighting against early marriage and advocating for the rights of the girl child to education and self-determination.</p>
                </div>
                 <div className="p-8 bg-white rounded-xl shadow-sm">
                    <div className="text-6xl mb-6">🎒</div>
                    <h3 className="text-xl font-bold text-primary mb-4">Educational Support</h3>
                    <p className="text-slate-600">Distributing school supplies, books, and uniforms to students in rural communities.</p>
                </div>
                 <div className="p-8 bg-white rounded-xl shadow-sm">
                    <div className="text-6xl mb-6">🌱</div>
                    <h3 className="text-xl font-bold text-primary mb-4">Teen Mentorship</h3>
                    <p className="text-slate-600">Connecting teens with role models who guide them through academic and personal challenges.</p>
                </div>
             </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-3xl font-serif text-primary mb-6">Join Us in Making a Difference</h2>
        <p className="text-slate-600 mb-8 max-w-xl mx-auto">Your support can change a life forever. Partner with us today.</p>
        <button className="btn-primary text-xl px-12 py-4 shadow-xl shadow-primary/20">Donate to the Cause</button>
      </section>
    </main>
  );
}

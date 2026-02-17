"use client";

import { useState } from "react";

export default function Contact() {
  const [focusedField, setFocusedField] = useState<string | null>(null);

  return (
    <main className="pt-24 min-h-screen bg-[#fdfbf7] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
      <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-secondary/40 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-6 py-2 bg-gradient-to-r from-primary/5 to-transparent text-primary rounded-full text-xs font-bold tracking-[0.2em] uppercase border-l-4 border-accent shadow-sm mb-6">
            Reach Out
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 leading-tight">
            Let&apos;s <span className="italic bg-clip-text text-transparent bg-gradient-to-r from-accent to-red-600">Connect</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
            For speaking engagements, book signings, literary services, or foundation inquiries — I&apos;d love to hear from you.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { number: "50+", label: "Years in Education" },
            { number: "8", label: "Published Works" },
            { number: "100+", label: "Speaking Events" },
            { number: "∞", label: "Lives Impacted" },
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-black text-accent mb-1">{stat.number}</div>
              <div className="text-xs text-slate-500 tracking-widest uppercase font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Card */}
            <div className="bg-primary rounded-3xl p-8 text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2 !text-white">Contact Information</h3>
                <p className="text-white/60 text-sm mb-8">Fill out the form or reach out directly</p>

                <div className="space-y-6">
                  <a href="mailto:info@joanoji.com" className="flex items-center gap-4 group/item hover:translate-x-2 transition-transform duration-300">
                    <span className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-xl group-hover/item:bg-accent transition-colors duration-300">📧</span>
                    <div>
                      <p className="text-white/50 text-xs uppercase tracking-widest font-semibold">Email</p>
                      <p className="text-white font-medium">info@joanoji.com</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 hover:translate-x-2 transition-transform duration-300">
                    <span className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-xl">📍</span>
                    <div>
                      <p className="text-white/50 text-xs uppercase tracking-widest font-semibold">Location</p>
                      <p className="text-white font-medium">Worldwide</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 hover:translate-x-2 transition-transform duration-300">
                    <span className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-xl">🕐</span>
                    <div>
                      <p className="text-white/50 text-xs uppercase tracking-widest font-semibold">Response Time</p>
                      <p className="text-white font-medium">Within 48 hours</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-10 pt-8 border-t border-white/10">
                  <p className="text-white/50 text-xs uppercase tracking-widest font-semibold mb-4">Follow Along</p>
                  <div className="flex gap-3">
                    <a href="#" className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center hover:bg-[#0077b5] transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#0077b5]/30">
                      <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </a>
                    <a href="#" className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center hover:bg-[#1877f2] transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#1877f2]/30">
                      <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    </a>
                    <a href="#" className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center hover:bg-black transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-black/30">
                      <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </a>
                    <a href="#" className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/30">
                      <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 11-2.882 0 1.441 1.441 0 012.882 0z"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>


            {/* Availability Card */}
            <div className="bg-gradient-to-br from-accent/5 to-red-50 rounded-3xl p-8 border border-accent/10 relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent/5 rounded-full translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-bold tracking-widest uppercase text-green-700">Currently Accepting</span>
                </div>
                <ul className="space-y-3">
                  {["Speaking Engagements", "Book Signings", "Editorial Reviews", "Foundation Partnerships"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-600">
                      <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-secondary/30 relative overflow-hidden">
              {/* Form decorative element */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary"></div>
              
              <h2 className="text-3xl font-bold text-primary mb-2">Send a Message</h2>
              <p className="text-slate-400 text-sm mb-8">All fields are required unless stated otherwise</p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label htmlFor="name" className={`absolute left-4 transition-all duration-300 pointer-events-none ${focusedField === 'name' ? '-top-2.5 text-xs text-accent bg-white px-2 font-bold' : 'top-4 text-sm text-slate-400'}`}>
                      Your Name
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      onFocus={() => setFocusedField('name')}
                      onBlur={(e) => !e.target.value && setFocusedField(null)}
                      className="w-full px-4 py-4 border-2 border-secondary/50 rounded-xl focus:outline-none focus:border-accent bg-transparent transition-colors duration-300"
                    />
                  </div>
                  
                  <div className="relative">
                    <label htmlFor="email" className={`absolute left-4 transition-all duration-300 pointer-events-none ${focusedField === 'email' ? '-top-2.5 text-xs text-accent bg-white px-2 font-bold' : 'top-4 text-sm text-slate-400'}`}>
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      onFocus={() => setFocusedField('email')}
                      onBlur={(e) => !e.target.value && setFocusedField(null)}
                      className="w-full px-4 py-4 border-2 border-secondary/50 rounded-xl focus:outline-none focus:border-accent bg-transparent transition-colors duration-300"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-widest">Subject</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {["General Inquiry", "Speaking", "Book Signing", "Foundation"].map((option, i) => (
                      <label key={i} className="cursor-pointer">
                        <input type="radio" name="subject" value={option} className="peer sr-only" defaultChecked={i === 0} />
                        <div className="text-center py-3 px-2 border-2 border-secondary/50 rounded-xl text-sm font-medium text-slate-500 peer-checked:border-accent peer-checked:text-accent peer-checked:bg-accent/5 hover:border-slate-300 transition-all duration-200">
                          {option}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div className="relative">
                  <label htmlFor="message" className={`absolute left-4 transition-all duration-300 pointer-events-none ${focusedField === 'message' ? '-top-2.5 text-xs text-accent bg-white px-2 font-bold z-10' : 'top-4 text-sm text-slate-400'}`}>
                    Your Message
                  </label>
                  <textarea 
                    id="message" 
                    rows={5}
                    onFocus={() => setFocusedField('message')}
                    onBlur={(e) => !e.target.value && setFocusedField(null)}
                    className="w-full px-4 py-4 border-2 border-secondary/50 rounded-xl focus:outline-none focus:border-accent bg-transparent transition-colors duration-300 resize-none"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-primary to-[#34495e] text-white rounded-xl font-bold text-lg tracking-wide hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Send Message
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </button>

                <p className="text-center text-xs text-slate-400 mt-4">
                  By submitting, you agree to receive a response to your inquiry via email.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-block bg-white/80 backdrop-blur-sm rounded-3xl p-10 md:p-14 border border-secondary/30 shadow-sm max-w-3xl">
            <div className="text-5xl mb-4">✉️</div>
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-3">Prefer a Direct Email?</h3>
            <p className="text-slate-500 mb-6 max-w-md mx-auto">
              Skip the form and send an email directly. I personally read every message.
            </p>
            <a href="mailto:info@joanoji.com" className="inline-flex items-center gap-2 btn-primary shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              info@joanoji.com
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
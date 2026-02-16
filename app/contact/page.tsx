export default function Contact() {
  return (
    <main className="pt-24 min-h-screen bg-[#fdfbf7]">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif text-primary mb-6">Get in Touch</h1>
          <p className="text-xl text-slate-600 font-light">
            For speaking engagements, book signings, or foundation inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-secondary">
                <h3 className="text-xl font-serif font-bold text-primary mb-6">Contact Information</h3>
                <div className="space-y-6 text-slate-600">
                  <p className="flex items-center gap-4 group">
                    <span className="text-2xl p-3 bg-secondary/30 rounded-full group-hover:bg-primary group-hover:text-white transition-colors">📧</span>
                    <a href="mailto:info@joanoji.com" className="text-lg hover:text-accent transition-colors font-medium">info@joanoji.com</a>
                  </p>
                  <p className="flex items-center gap-4 group">
                    <span className="text-2xl p-3 bg-secondary/30 rounded-full group-hover:bg-primary group-hover:text-white transition-colors">📍</span>
                    <span className="text-lg">Lagos, Nigeria</span>
                  </p>
                  
                  <div className="pt-6 border-t border-secondary/50">
                    <h4 className="font-bold text-primary mb-4 uppercase tracking-widest text-sm">Connect on Socials</h4>
                    <div className="flex gap-4">
                      <a href="#" className="flex items-center gap-2 px-4 py-2 bg-[#0077b5]/10 text-[#0077b5] rounded-lg hover:bg-[#0077b5] hover:text-white transition-all font-bold">
                        <span>LinkedIn</span>
                      </a>
                      <a href="#" className="flex items-center gap-2 px-4 py-2 bg-[#1877f2]/10 text-[#1877f2] rounded-lg hover:bg-[#1877f2] hover:text-white transition-all font-bold">
                        <span>Facebook</span>
                      </a>
                    </div>
                  </div>
                </div>
             </div>

             <div className="bg-white p-8 rounded-2xl shadow-sm border border-secondary">
                <h3 className="text-xl font-serif font-bold text-primary mb-6">Press & Media</h3>
                <p className="text-slate-600 mb-4">
                  For media kits and interview requests, please contact our PR team.
                </p>
                <button className="text-accent font-bold hover:underline">Download Media Kit →</button>
             </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-accent">
            <h2 className="text-2xl font-serif font-bold text-primary mb-6">Send a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 border border-secondary rounded-lg focus:outline-none focus:border-accent bg-[#fdfbf7]"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 border border-secondary rounded-lg focus:outline-none focus:border-accent bg-[#fdfbf7]"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-bold text-slate-700 mb-2">Subject</label>
                <select 
                  id="subject" 
                  className="w-full px-4 py-3 border border-secondary rounded-lg focus:outline-none focus:border-accent bg-[#fdfbf7]"
                >
                  <option>General Inquiry</option>
                  <option>Speaking Engagement</option>
                  <option>Book Signing</option>
                  <option>Foundation Donation</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-3 border border-secondary rounded-lg focus:outline-none focus:border-accent bg-[#fdfbf7]"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full btn-primary"
              >
                SendMessage
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 px-4 md:px-8 max-w-[1440px] mx-auto min-h-[70vh] flex flex-col md:flex-row gap-16">
      <div className="flex-1">
        <h1 className="font-display font-black text-5xl md:text-7xl text-primary-dark mb-6">Get in Touch</h1>
        <p className="text-primary-dark/70 text-lg mb-12 max-w-md">Have a question about an order, need plant care advice, or just want to say hello? We'd love to hear from you.</p>
      </div>
      
      <div className="flex-1 bg-pure-white rounded-3xl p-8 md:p-12 shadow-sm border border-black/5">
        <form className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-primary-dark pl-1">Name</label>
            <input type="text" className="w-full px-5 py-4 bg-brand-cream rounded-xl outline-none" placeholder="Your name" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-primary-dark pl-1">Email</label>
            <input type="email" className="w-full px-5 py-4 bg-brand-cream rounded-xl outline-none" placeholder="hello@example.com" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-primary-dark pl-1">Message</label>
            <textarea rows={4} className="w-full px-5 py-4 bg-brand-cream rounded-xl outline-none resize-none" placeholder="How can we help?" />
          </div>
          <button className="bg-primary-dark text-pure-white py-4 rounded-xl font-medium mt-2 hover:bg-accent-green transition-colors">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

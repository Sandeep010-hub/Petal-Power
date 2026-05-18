export default function BlogPage() {
  return (
    <div className="pt-32 pb-24 px-4 md:px-8 max-w-[1440px] mx-auto min-h-[70vh]">
      <h1 className="font-display font-black text-5xl md:text-7xl text-primary-dark mb-6">Plant Care Journal</h1>
      <p className="text-primary-dark/70 text-lg mb-12 max-w-2xl">Expert advice, styling tips, and deep dives into the botanical world to help your greenery thrive.</p>
      
      <div className="flex flex-col gap-8">
        {[1, 2, 3].map((item) => (
          <div key={item} className="w-full h-48 md:h-64 bg-pure-white rounded-3xl border border-black/5 flex items-center justify-center shadow-sm">
            <span className="text-primary-dark/30 font-medium">Article Placeholder {item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

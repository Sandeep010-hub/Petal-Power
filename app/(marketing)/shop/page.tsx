export default function ShopPage() {
  return (
    <div className="pt-32 pb-24 px-4 md:px-8 max-w-[1440px] mx-auto min-h-[70vh]">
      <h1 className="font-display font-black text-5xl md:text-7xl text-primary-dark mb-6">Shop All Plants</h1>
      <p className="text-primary-dark/70 text-lg mb-12 max-w-2xl">Browse our complete collection of resilient indoor plants, from delicate ferns to towering statement pieces.</p>
      
      {/* Grid Placeholder */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <div key={item} className="aspect-[3/4] bg-pure-white rounded-3xl border border-black/5 flex items-center justify-center shadow-sm">
            <span className="text-primary-dark/30 font-medium">Product {item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

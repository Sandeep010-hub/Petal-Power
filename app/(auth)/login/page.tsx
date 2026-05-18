import Link from 'next/link';
import { ArrowLeft, MoveRight } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-brand-cream p-4 relative">
      <Link href="/" className="absolute top-8 left-8 flex items-center gap-2 text-primary-dark hover:text-accent-green transition-colors font-medium">
        <ArrowLeft className="w-5 h-5" />
        Back to Home
      </Link>
      
      <div className="w-full max-w-md bg-pure-white rounded-3xl p-8 md:p-12 shadow-xl border border-black/5">
        <div className="text-center mb-10">
          <h1 className="font-display font-black text-4xl text-primary-dark tracking-tight mb-3">Welcome back</h1>
          <p className="text-primary-dark/60 font-light text-sm">Sign in to access your curated plant collection.</p>
        </div>
        
        <form className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-primary-dark pl-1">Email</label>
            <input 
              type="email" 
              placeholder="hello@petalpower.com" 
              className="w-full px-5 py-4 bg-brand-cream rounded-xl outline-none focus:ring-2 focus:ring-accent-green/50 text-primary-dark transition-shadow border border-transparent focus:border-accent-green/20"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-primary-dark pl-1">Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full px-5 py-4 bg-brand-cream rounded-xl outline-none focus:ring-2 focus:ring-accent-green/50 text-primary-dark transition-shadow border border-transparent focus:border-accent-green/20"
            />
          </div>
          
          <button className="w-full bg-primary-dark hover:bg-black text-pure-white font-medium py-4 rounded-xl flex items-center justify-center gap-2 mt-4 transition-colors">
            Sign In <MoveRight className="w-5 h-5" />
          </button>
        </form>
        
        <div className="mt-8 text-center">
          <p className="text-primary-dark/60 text-sm">
            Don't have an account? <Link href="/login" className="text-primary-dark font-bold hover:text-accent-green transition-colors">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

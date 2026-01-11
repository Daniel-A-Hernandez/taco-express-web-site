import { UtensilsCrossed, Search, MapPin } from 'lucide-preact';

export default function NavbarMobile() {
  const scrollToMenu = () => {
    document.getElementById('menu-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const focusSearch = () => {
    const search = document.getElementById('search-input');
    if (search) {
      search.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => (search as HTMLInputElement).focus(), 500);
    }
  };

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-stone-100 px-8 py-2 pb-safe shadow-[0_-10px_20px_rgba(0,0,0,0.05)] z-50">
      <div className="flex justify-between items-center h-14">
        
        {/* MENÚ */}
        <button onClick={scrollToMenu} className="flex flex-col items-center gap-1 text-stone-400 cursor-pointer">
          <UtensilsCrossed size={22} />
          <span className="text-[10px] font-black uppercase italic tracking-tighter">Menú</span>
        </button>

        {/* BUSCAR */}
        <button onClick={focusSearch} className="flex flex-col items-center gap-1 text-stone-400 cursor-pointer">
          <Search size={22} />
          <span className="text-[10px] font-black uppercase italic tracking-tighter">Buscar</span>
        </button>

        {/* UBICACIÓN */}
        <a 
          href="#LocateUs" 
          target="_self" 
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 text-stone-400 no-underline"
        >
          <MapPin size={22} />
          <span className="text-[10px] font-black uppercase italic tracking-tighter">Ubícanos</span>
        </a>

      </div>
    </nav>
  );
}
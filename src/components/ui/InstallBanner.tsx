import { useEffect, useState } from 'preact/hooks'

export default function InstallBanner() {
  const [visible, setVisible] = useState(false)
  const [showGuide, setShowGuide] = useState(false)
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)

  useEffect(() => {
    // 1. Verificar si el evento ya llegó antes de que cargara el componente
    if ((window as any).deferredPrompt) {
      setDeferredPrompt((window as any).deferredPrompt);
    }

    // 2. Escuchar por si llega después
    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handler);

    // 3. Lógica de visibilidad (No spam)
    const hideUntil = localStorage.getItem('install-banner-hide-until')
    const now = new Date().getTime()
    
    // Si ya está instalada (Standalone), no mostrar
    if (window.matchMedia('(display-mode: standalone)').matches) return;
    if (hideUntil && now < Number(hideUntil)) return;

    const timer = setTimeout(() => setVisible(true), 2000)
    
    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
      clearTimeout(timer);
    }
  }, [])

  const handleInstallClick = async () => {
    // Intentar usar el prompt guardado
    const promptEvent = deferredPrompt || (window as any).deferredPrompt;

    if (promptEvent) {
      // CASO ANDROID: Disparar instalador nativo
      promptEvent.prompt();
      const { outcome } = await promptEvent.userChoice;
      if (outcome === 'accepted') {
        dismiss();
      }
      setDeferredPrompt(null);
      (window as any).deferredPrompt = null;
    } else {
      // CASO IPHONE (o si Android no ha dado el evento aún)
      setShowGuide(true);
    }
  };

  const dismiss = () => {
    const unMes = new Date().getTime() + (30 * 24 * 60 * 60 * 1000);
    localStorage.setItem('install-banner-hide-until', String(unMes));
    setVisible(false);
    setShowGuide(false);
  }

  const handleLater = () => {
    const unDia = new Date().getTime() + (24 * 60 * 60 * 1000);
    localStorage.setItem('install-banner-hide-until', String(unDia));
    setVisible(false);
  }

  if (!visible) return null

  return (
    <>
      {/* Banner Principal - Tu apariencia original */}
      <div class="fixed bottom-24 left-1/2 z-[100] w-[92%] max-w-lg -translate-x-1/2 rounded-2xl bg-[#2b2b2b] p-4 text-white shadow-2xl border border-white/5 lg:hidden">
        <div class="flex flex-col gap-3">
          <p class="text-sm">
            📲 {deferredPrompt || (window as any).deferredPrompt ? 'Instala' : 'Guarda'} <strong>Taco Express</strong> y pide más rápido
          </p>

          <div class="flex gap-2">
            <button
              onClick={handleInstallClick}
              class="flex-1 rounded-xl bg-[#f29829] py-2 text-sm font-bold text-white transition active:scale-95"
            >
              {deferredPrompt || (window as any).deferredPrompt ? 'Instalar ahora' : 'Cómo agregar'}
            </button>
            
            <button onClick={handleLater} class="flex-1 rounded-xl bg-white/10 py-2 text-sm text-stone-300">
              Más tarde
            </button>
          </div>
        </div>
      </div>

      {/* Guía de iPhone */}
      {showGuide && (
        <div class="fixed inset-0 z-[200] flex items-center justify-center p-4">
           <div class="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setShowGuide(false)} />
           <div class="relative z-10 w-full max-w-md rounded-3xl bg-white p-6 text-center">
              <h2 class="mb-4 text-xl font-black italic uppercase text-stone-900">Instalar en tu Celular</h2>
              <p class="text-stone-700 mb-6 text-sm">
                Toca el botón <strong>Compartir</strong> (o los 3 puntos ⋮) y selecciona <strong>"Agregar a inicio"</strong> o <strong>"Instalar aplicación"</strong>
              </p>
              <button onClick={dismiss} class="w-full rounded-2xl bg-stone-900 py-3 font-black text-white italic uppercase">¡Entendido!</button>
           </div>
        </div>
      )}
    </>
  )
}
import { useEffect, useState } from 'preact/hooks'

export default function InstallBanner() {
  const [visible, setVisible] = useState(false)
  const [showGuide, setShowGuide] = useState(false)
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)

  useEffect(() => {
    // 1. Capturar el evento de Android/Chrome
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault(); // Evita que Chrome saque su banner feo por defecto
      setDeferredPrompt(e); // Guardamos el evento para activarlo con nuestro botón
    });

    // 2. Lógica de visibilidad (tuya)
    const hideUntil = localStorage.getItem('install-banner-hide-until')
    const now = new Date().getTime()
    if (hideUntil && now < Number(hideUntil)) return

    const timer = setTimeout(() => setVisible(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      // CASO ANDROID: Disparar el aviso nativo
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        dismiss(); // Si instaló, ocultamos para siempre
      }
      setDeferredPrompt(null);
    } else {
      // CASO IPHONE: Mostrar tu guía manual
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
      <div class="fixed bottom-24 left-1/2 z-[100] w-[92%] max-w-lg -translate-x-1/2 rounded-2xl bg-[#2b2b2b] p-4 text-white shadow-2xl border border-white/5">
        <div class="flex flex-col gap-3">
          <p class="text-sm">
            📲 {deferredPrompt ? 'Instala' : 'Guarda'} <strong>Taco Express</strong> y pide más rápido
          </p>

          <div class="flex gap-2">
            <button
              onClick={handleInstallClick}
              class="flex-1 rounded-xl bg-[#f29829] py-2 text-sm font-bold text-white transition active:scale-95"
            >
              {deferredPrompt ? 'Instalar ahora' : 'Cómo agregar'}
            </button>
            
            <button onClick={handleLater} class="flex-1 rounded-xl bg-white/10 py-2 text-sm text-stone-300">
              Más tarde
            </button>
          </div>
        </div>
      </div>

      {/* Tu Guía de iPhone se mantiene igual */}
      {showGuide && (
        <div class="fixed inset-0 z-[200] flex items-center justify-center p-4">
           {/* ... Contenido de la guía que ya tienes ... */}
           <div class="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setShowGuide(false)} />
           <div class="relative z-10 w-full max-w-md rounded-3xl bg-white p-6">
              <h2 class="mb-4 text-xl font-black italic uppercase text-stone-900">Instalar en iPhone</h2>
              <p class="text-stone-700 mb-6">Toca el botón <strong>Compartir</strong> y luego <strong>"Agregar a inicio"</strong></p>
              <button onClick={dismiss} class="w-full rounded-2xl bg-stone-900 py-3 font-black text-white italic uppercase">¡Entendido!</button>
           </div>
        </div>
      )}
    </>
  )
}
import { useEffect, useState } from 'preact/hooks'

export default function InstallBanner() {
  const [visible, setVisible] = useState(false)
  const [showGuide, setShowGuide] = useState(false)

  useEffect(() => {
    const count = Number(localStorage.getItem('install-banner-count') || '0')
    if (count < 2) setVisible(true)
  }, [])

  const dismiss = () => {
    const count = Number(localStorage.getItem('install-banner-count') || '0')
    localStorage.setItem('install-banner-count', String(count + 1))
    setVisible(false)
    setShowGuide(false)
  }

  if (!visible) return null

  return (
    <>
      {/* Banner */}
      <div class="fixed bottom-4 left-1/2 z-40 w-[92%] max-w-lg -translate-x-1/2 rounded-2xl bg-[#2b2b2b] px-4 py-3 text-white shadow-xl lg:hidden">
        <div class="flex items-center justify-between gap-3">
          <p class="text-sm leading-snug">
            📲 Guarda <strong>Taco Express</strong> en tu teléfono y pide más rápido
          </p>

          <button
            onClick={() => setShowGuide(true)}
            class="shrink-0 rounded-full bg-[#f29829] px-3 py-1 text-sm font-semibold text-white hover:bg-amber-400 transition"
          >
            Cómo agregar
          </button>
        </div>
      </div>

      {/* Guía */}
      {showGuide && (
        <div class="fixed inset-0 z-50 flex items-center justify-center">
          <div
            class="absolute inset-0 bg-black/50"
            onClick={dismiss}
          />

          <div class="relative z-10 w-[90%] max-w-md rounded-2xl bg-white p-5 shadow-xl">
            <h2 class="mb-3 text-lg font-semibold">
              Agregar a pantalla de inicio
            </h2>

            <div class="space-y-3 text-sm text-stone-700">
              <div>
                <strong>📱 iPhone (Safari)</strong>
                <p>Compartir → <em>Agregar a inicio</em></p>
              </div>

              <div>
                <strong>🤖 Android (Chrome)</strong>
                <p>Menú ⋮ → <em>Agregar a pantalla de inicio</em></p>
              </div>
            </div>

            <button
              onClick={dismiss}
              class="mt-5 w-full rounded-xl bg-[#f29829] py-2 font-medium text-white hover:bg-amber-400 transition"
            >
              Entendido
            </button>
          </div>
        </div>
      )}
    </>
  )
}

import { useEffect, useState } from 'preact/hooks'

export default function InstallBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // cuántas veces ya se mostró
    const timesShown = Number(localStorage.getItem('install-banner-count') || '0')

    // si se mostró 2 o más veces, no mostrar
    if (timesShown >= 2) return

    setVisible(true)
  }, [])

  const closeBanner = () => {
    const timesShown = Number(localStorage.getItem('install-banner-count') || '0')
    localStorage.setItem('install-banner-count', String(timesShown + 1))
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div class="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 max-w-lg w-[90%] rounded-xl bg-[#333] px-4 py-3 shadow-lg text-white text-sm">
      <div class="flex items-center justify-between gap-3">
        <p>
          📲 Guarda <strong>Taco Express</strong> en tu pantalla de inicio para pedir más rápido
        </p>

        <button
          onClick={closeBanner}
          class="rounded-full bg-white text-[#333] px-3 py-1 text-sm font-semibold hover:bg-gray-200 transition"
        >
          Entendido
        </button>
      </div>
    </div>
  )
}

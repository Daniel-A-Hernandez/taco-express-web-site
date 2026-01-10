import { useEffect } from "preact/hooks";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

export default function StoreMap() {
  const lat = 13.791318765384991;   // 📍 cambia por tu ubicación real
  const lng = -89.35577659659347;

  useEffect(() => {
    // Fix de iconos en Astro / Vite
    L.Marker.prototype.options.icon = L.icon({
      iconUrl: markerIcon,
      shadowUrl: markerShadow,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
    });

    const map = L.map("leaflet-map", {
      zoomControl: false,
      attributionControl: false,
    }).setView([lat, lng], 16);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

    L.marker([lat, lng]).addTo(map);

    return () => map.remove();
  }, []);

  return (
    <a
      href={`https://www.google.com/maps?q=${lat},${lng}`}
      target="_blank"
      rel="noopener"
      class="block w-full h-full"
    >
      <div id="leaflet-map" class="w-full h-full"></div>
    </a>
  );
}

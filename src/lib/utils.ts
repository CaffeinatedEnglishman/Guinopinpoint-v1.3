import { BadgeProps } from '@/components/ui/badge';
import { BadgeVariant } from '@/types/types';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { GCP } from './gcpData';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getTypeColorClass(type: string): string {
  switch (type) {
    case 'BLLM':
      return '#2563eb';
    case 'BBM':
      return '#16a34a';
    default:
      return 'text-gray-500 dark:text-gray-400';
  }
}

// utils.ts
export function getMarkerColor(status: string): string {
  switch (status) {
    case 'Disturbed':
      return 'text-red-500 dark:text-red-400'; // Red for "Disturbed"
    case 'Undisturbed':
      return 'text-emerald-500 dark:text-emerald-400'; // Green for "Undisturbed"
    default:
      return 'text-muted-foreground';
  }
}

export function getTypeBadgeVariant(
  type: string
):
  | 'default'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'destructive'
  | 'outline'
  | null
  | undefined {
  switch (type) {
    case 'BLLM':
      return 'secondary';
    case 'BBM':
      return 'success';
    case 'Unknown':
      return 'destructive';
    default:
      return 'default';
  }
}

export function getStatusBadgeVariant(status: string): BadgeProps['variant'] {
  switch (status) {
    case 'Disturbed':
      return 'destructive'; // Red color for "Disturbed"
    case 'Undisturbed':
      return 'success'; // Green color for "Undisturbed"
    default:
      return 'outline'; // Default gray for other statuses
  }
}

export function getBadgeVariant(status: GCP['status']): BadgeVariant {
  switch (status.toLowerCase()) {
    case 'disturbed':
      return 'destructive'; // Red variant for "Disturbed"
    case 'undisturbed':
      return 'success'; // Green variant for "Undisturbed"
    default:
      return 'secondary';
  }
}

// Utility function to handle GCP click
export function createGCPClickHandler(
  setSelectedGCP: (gcp: GCP) => void,
  setIsSidebarOpen: (open: boolean) => void
) {
  return (gcp: GCP) => {
    setSelectedGCP(gcp);
    setIsSidebarOpen(true);
  };
}

// Utility function to handle sidebar transition
export function handleSidebarTransition(isSidebarOpen: boolean): void {
  const sidebar = document.getElementById('sidebar');
  if (sidebar) {
    sidebar.style.transition = 'transform 0.3s ease-in-out';
    sidebar.style.transform = isSidebarOpen ? 'translateX(0)' : 'translateX(-100%)';
  }
}

export function generatePopupContent(gcp: GCP): string {
  const typeColor =
    gcp.type === 'BLLM'
      ? '#2563eb' // Blue
      : gcp.type === 'BBM'
      ? '#16a34a' // Green
      : gcp.type === 'MBM'
      ? '#9333ea' // Purple
      : '#6b7280'; // Default gray

  const statusColorStyle =
    gcp.status === 'Disturbed'
      ? 'background-color: #fee2e2; color: #b91c1c;'
      : gcp.status === 'Undisturbed'
      ? 'background-color: #d1fae5; color: #065f46;'
      : 'background-color: #f3f4f6; color: #374151;';

  const typeBadgeStyle = `color: white; background-color: ${typeColor};`;

  const renderDetail = (label: string, value: string | number | undefined) =>
    value !== undefined ? `<p><strong>${label}:</strong> ${value}</p>` : '';

  return `
  <div class="font-sans p-1 sm:p-2 min-w-[180px] sm:min-w-[280px] max-w-[90vw] sm:max-w-[380px]">
    <h3 class="font-semibold text-xs sm:text-sm mb-1">${gcp.number}</h3>
    ${
      gcp.imageUrl
        ? `<div class="relative mb-1 sm:mb-2 w-full aspect-video rounded-lg overflow-hidden">
            <img
              src="${gcp.imageUrl}"
              alt="${gcp.number}"
              class="w-full h-full object-cover cursor-pointer"
              onclick="document.getElementById('full-image-overlay').classList.remove('hidden'); document.getElementById('full-image').src='${gcp.imageUrl}';"
            />
          </div>`
        : ''
    }
    <div class="space-y-0.5 sm:space-y-1">
      <div class="flex items-center justify-between text-xs sm:text-sm">
        <span class="text-gray-500 dark:text-gray-400">Type</span>
        <span class="font-medium px-2 py-0.5 rounded-full text-xs" style="${typeBadgeStyle}">${
    gcp.type
  }</span>
      </div>
      
      <div class="flex items-center justify-between text-xs sm:text-sm">
        <span class="text-gray-500 dark:text-gray-400">Barangay</span>
        <span class="font-medium">${gcp.barangay}</span>
      </div>
      
      <div class="flex items-center justify-between text-xs sm:text-sm">
        <span class="text-gray-500 dark:text-gray-400">Status</span>
        <span class="font-medium px-2 py-0.5 rounded-full text-xs" style="${statusColorStyle}">${
    gcp.status
  }</span>
      </div>
    </div>

    ${
      gcp.location
        ? `<p class="mt-1 sm:mt-2 pt-0.5 sm:pt-1 text-xs sm:text-sm text-gray-500 dark:text-gray-400 border-t border-gray-300 dark:border-gray-700">
            ${gcp.location}
          </p>`
        : ''
    }

    <div class="mt-1 sm:mt-2 pt-0.5 sm:pt-1 text-xs border-t border-gray-300 dark:border-gray-700">
      <div class="flex items-center justify-between text-gray-500 dark:text-gray-400">
        <span>Coordinates</span>
        <span class="font-mono">${gcp.latitude.toFixed(
          6
        )}, ${gcp.longitude.toFixed(6)}</span>
      </div>
    </div>

    <div class="mt-1 sm:mt-2 pt-0.5 sm:pt-1 text-xs border-t border-gray-300 dark:border-gray-700">
      <div class="text-gray-500 dark:text-gray-400">
        <span class="block mb-0.5">Condition:</span>
        <span class="text-gray-600 dark:text-gray-300">${gcp.condition}</span>
      </div>
    </div>

    <button onclick="document.getElementById('details-${gcp.id}').classList.toggle('hidden')" class="bg-blue-600 text-white py-1 px-2 rounded-md w-full text-center font-medium cursor-pointer transition-opacity duration-200 mt-2">
      Other details
    </button>
    <div id="details-${gcp.id}" class="hidden mt-1 max-h-32 overflow-y-auto">
      ${gcp.instrumentUsed ? renderDetail('Instrument Used', gcp.instrumentUsed) : ''}
      ${gcp.coordinateSystem ? renderDetail('Coordinate System', gcp.coordinateSystem) : ''}
      ${gcp.observationDetails ? `
        <p><strong>Based on Observation</strong></p>
        ${renderDetail('Date of Observation', gcp.observationDetails.date)}
        ${renderDetail('Epoch', gcp.observationDetails.epoch)}
        ${renderDetail('Northing', gcp.observationDetails.northing)}
        ${renderDetail('Easting', gcp.observationDetails.easting)}
        ${renderDetail('Ellipsoidal Height (h)', gcp.observationDetails.ellipsoidalHeight)}
        ${renderDetail('Longitude', gcp.observationDetails.longitude)}
        ${renderDetail('Latitude', gcp.observationDetails.latitude)}
        ${renderDetail('Height', gcp.observationDetails.height)}
      ` : ''}
      ${gcp.staticSurveyDetails ? `
        <p><strong>Based on Static Survey</strong></p>
        ${renderDetail('Date of Static Survey', gcp.staticSurveyDetails.date)}
        ${renderDetail('Epoch', gcp.staticSurveyDetails.epoch)}
        ${renderDetail('Interval', gcp.staticSurveyDetails.interval)}
        ${renderDetail('Cut off angle', gcp.staticSurveyDetails.cutOffAngle)}
        ${renderDetail('Height of Antenna', gcp.staticSurveyDetails.antennaHeight)}
        ${renderDetail('Latitude', gcp.staticSurveyDetails.latitude)}
        ${renderDetail('Longitude', gcp.staticSurveyDetails.longitude)}
        ${renderDetail('Height', gcp.staticSurveyDetails.height)}
        ${renderDetail('Northing', gcp.staticSurveyDetails.northing)}
        ${renderDetail('Easting', gcp.staticSurveyDetails.easting)}
        ${renderDetail('Ellipsoidal Height', gcp.staticSurveyDetails.ellipsoidalHeight)}
      ` : ''}
      ${gcp.denrRecords ? `
        <p><strong>Based on DENR Records</strong></p>
        ${renderDetail('Northing', gcp.denrRecords.northing)}
        ${renderDetail('Easting', gcp.denrRecords.easting)}
        ${renderDetail('Longitude', gcp.denrRecords.longitude)}
        ${renderDetail('Latitude', gcp.denrRecords.latitude)}
        ${renderDetail('Ellipsoidal Height', gcp.denrRecords.ellipsoidalHeight)}
        ${renderDetail('Elevation', gcp.denrRecords.elevation)}
      ` : ''}
      ${gcp.geotagDetails ? `
        <p><strong>Based on Geotag</strong></p>
        ${renderDetail('Date of Geotagging', gcp.geotagDetails.date)}
        ${renderDetail('App used', gcp.geotagDetails.appUsed)}
        ${renderDetail('Latitude', gcp.geotagDetails.latitude)}
        ${renderDetail('Longitude', gcp.geotagDetails.longitude)}
      ` : ''}
    </div>
  </div>
  <div id="full-image-overlay" class="hidden fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
    <img id="full-image" class="max-w-full max-h-full" />
    <button onclick="document.getElementById('full-image-overlay').classList.add('hidden')" class="absolute top-4 right-4 text-white text-2xl">&times;</button>
  </div>
`;
}

// Utility function to initialize default Leaflet icon settings
export function initLeafletIconDefaults(L: typeof import('leaflet')): void {
  // Use a type assertion to let TypeScript know that `_getIconUrl` can be deleted
  delete (L.Icon.Default.prototype as { _getIconUrl?: () => string })
    ._getIconUrl;

  L.Icon.Default.mergeOptions({
    iconUrl: '/images/marker-icon.png',
    iconRetinaUrl: '/images/marker-icon-2x.png',
    shadowUrl: '/images/marker-shadow.png',
  });
}
// Utility function to create base layers for the map
export function createBaseLayers(L: typeof import('leaflet')): {
  osmLayer: L.TileLayer;
  googleMaps: L.TileLayer;
  satellite: L.TileLayer;
  hybrid: L.TileLayer;
} {
  const osmLayer = L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      maxZoom: 20,
      attribution: '© OpenStreetMap contributors',
    }
  );

  const googleMaps = L.tileLayer(
    'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',
    {
      maxZoom: 20,
      attribution: '© Google Maps',
    }
  );

  const satellite = L.tileLayer(
    'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
    {
      maxZoom: 20,
      attribution: '© Google Maps',
    }
  );

  const hybrid = L.tileLayer(
    'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}',
    {
      maxZoom: 20,
      attribution: '© Google Maps',
    }
  );

  return {
    osmLayer,
    googleMaps,
    satellite,
    hybrid,
  };
}

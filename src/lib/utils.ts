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

  return `
  <div class="font-sans p-2 sm:p-3 min-w-[200px] sm:min-w-[300px] max-w-[95vw] sm:max-w-[400px]">
    <h3 class="font-semibold text-sm sm:text-base mb-2">${gcp.number}</h3>
    ${
      gcp.imageUrl
        ? `<div class="relative mb-2 sm:mb-3 w-full aspect-video rounded-lg overflow-hidden">
            <img
              src="${gcp.imageUrl}"
              alt="${gcp.number}"
              class="w-full h-full object-cover"
            />
          </div>`
        : ''
    }
    <div class="space-y-1 sm:space-y-2">
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
        <span class="text-gray-500 dark:text-gray-400">Remarks</span>
        <span class="font-medium px-2 py-0.5 rounded-full text-xs" style="${statusColorStyle}">${
    gcp.remarks
  }</span>
      </div>
    </div>

    ${
      gcp.description
        ? `<p class="mt-2 sm:mt-3 pt-1 sm:pt-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400 border-t border-gray-300 dark:border-gray-700">
            ${gcp.description}
          </p>`
        : ''
    }

    <div class="mt-2 sm:mt-3 pt-1 sm:pt-2 text-xs border-t border-gray-300 dark:border-gray-700">
      <div class="flex items-center justify-between text-gray-500 dark:text-gray-400">
        <span>Coordinates</span>
        <span class="font-mono">${gcp.latitude.toFixed(
          6
        )}, ${gcp.longitude.toFixed(6)}</span>
      </div>
    </div>

    <div class="mt-2 sm:mt-3 pt-1 sm:pt-2 text-xs border-t border-gray-300 dark:border-gray-700">
      <div class="text-gray-500 dark:text-gray-400">
        <span class="block mb-1">Condition:</span>
        <span class="text-gray-600 dark:text-gray-300">${gcp.condition}</span>
      </div>
    </div>
  </div>
`;

  // return `
  //   <div class="font-sans p-2 sm:p-3 min-w-[200px] sm:min-w-[300px] max-w-[95vw] sm:max-w-[400px]">
  //     <h3 class="font-semibold text-sm sm:text-base mb-2">${gcp.number}</h3>
  //     ${
  //       gcp.imageUrl
  //         ? `<div class="relative mb-2 sm:mb-3 w-full aspect-video rounded-lg overflow-hidden">
  //             <img
  //               src="${gcp.imageUrl}"
  //               alt="${gcp.number}"
  //               class="w-full h-full object-cover"
  //             />
  //           </div>`
  //         : ''
  //     }
  //     <div class="space-y-1 sm:space-y-2">
  //       <div class="flex items-center justify-between text-xs sm:text-sm">
  //         <span class="text-gray-500 dark:text-gray-400">Type</span>
  //         <span class="font-medium px-2 py-0.5 rounded-full text-xs" style="${typeBadgeStyle}">${
  //   gcp.type
  // }</span>
  //       </div>

  //       <div class="flex items-center justify-between text-xs sm:text-sm">
  //         <span class="text-gray-500 dark:text-gray-400">Barangay</span>
  //         <span class="font-medium">${gcp.barangay}</span>
  //       </div>

  //       <div class="flex items-center justify-between text-xs sm:text-sm">
  //         <span class="text-gray-500 dark:text-gray-400">Status</span>
  //         <span class="font-medium px-2 py-0.5 rounded-full text-xs" style="${statusColorStyle}">${
  //   gcp.status
  // }</span>
  //       </div>
  //     </div>

  //     ${
  //       gcp.description
  //         ? `<p class="mt-2 sm:mt-3 pt-1 sm:pt-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400 border-t border-gray-300 dark:border-gray-700">
  //             ${gcp.description}
  //           </p>`
  //         : ''
  //     }

  //     <div class="mt-2 sm:mt-3 pt-1 sm:pt-2 space-y-0.5 sm:space-y-1 text-xs border-t border-gray-300 dark:border-gray-700">

  //       <div class="flex items-center justify-between text-gray-500 dark:text-gray-400">
  //         <span>Coordinates</span>
  //         <span class="font-mono">${gcp.latitude.toFixed(
  //           6
  //         )}, ${gcp.longitude.toFixed(6)}</span>
  //       </div>
  //     </div>

  //   </div>
  // `;
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

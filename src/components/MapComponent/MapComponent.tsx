'use client';

import { useGCP } from '@/hooks/useGCP';
import { typeColors } from '@/lib/constants';
import { GCP } from '@/lib/gcpData';
import {
  cn,
  createBaseLayers,
  generatePopupContent,
  initLeafletIconDefaults,
} from '@/lib/utils';
import type { Map, Marker } from 'leaflet';
import * as L from 'leaflet';
import dynamic from 'next/dynamic';
import { ReactElement, useCallback, useEffect, useRef, useState } from 'react';

interface MapComponentProps {
  gcps: GCP[];
  onGCPClick?: (gcp: GCP) => void;
  className?: string;
}

const LoadingComponent = (): ReactElement => (
  <div
    className={cn(
      'w-full h-[calc(100vh-0px)] bg-muted rounded-lg flex items-center justify-center'
    )}
  >
    <div className='text-muted-foreground'>Loading map...</div>
  </div>
);

const BaseMapComponent = ({
  gcps,
  onGCPClick,
  className,
}: MapComponentProps) => {
  const { selectedGCP, setShouldZoom, setSelectedGCP } = useGCP();
  const mapRef = useRef<Map | null>(null);
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const markersRef = useRef<{ [key: number]: Marker }>({});
  // const prevSelectedGCP = useRef<GCP | null>(null);
  const isZoomingRef = useRef(false);
  const activePopupRef = useRef<Marker | null>(null);
  const routingControlRef = useRef<L.Routing.Control | null>(null);
  const [userLocation, setUserLocation] = useState<[number, number] | null>(
    null
  );
  const [isNavigating, setIsNavigating] = useState(false);

  // Get user location using the navigator API
  useEffect(() => {
    if (typeof window !== 'undefined' && navigator.geolocation) {
      const handleSuccess = (position: GeolocationPosition) => {
        setUserLocation([position.coords.latitude, position.coords.longitude]);
      };

      const handleError = (error: GeolocationPositionError) => {
        let errorMessage = 'Unable to retrieve your location. ';

        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage += 'Location permission was denied.';
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage += 'Location information is unavailable.';
            break;
          case error.TIMEOUT:
            errorMessage += 'Request for location timed out.';
            break;
          default:
            errorMessage += 'An unknown error occurred.';
        }

        console.error(errorMessage);

        setUserLocation(null);
      };

      const options: PositionOptions = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      };

      navigator.geolocation.getCurrentPosition(
        handleSuccess,
        handleError,
        options
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
      setUserLocation(null);
    }
  }, []);

  // Create marker HTML
  const createMarkerHtml = useCallback(
    (gcp: GCP, isSelected: boolean): string => {
      const color = typeColors[gcp.type] || '#71717a';
      return `
      <span class="relative flex h-6 w-6">
        ${
          isSelected
            ? `<span class="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style="background-color: ${color}"></span>`
            : ''
        }
        <svg xmlns="http://www.w3.org/2000/svg" fill="${color}" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" 
          class="relative w-6 h-6 drop-shadow-[0_0_4px_rgba(255,255,255,0.9)]"
          style="filter: drop-shadow(0 0 3px ${color}) drop-shadow(0 0 5px ${color})"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>
      </span>
    `;
    },
    []
  );

  // Update marker icon
  const updateMarkerIcon = useCallback(
    async (marker: Marker, gcp: GCP, isSelected: boolean): Promise<void> => {
      const L = await import('leaflet');
      const newIcon = L.default.divIcon({
        className: 'custom-div-icon',
        html: createMarkerHtml(gcp, isSelected),
        iconSize: [24, 24],
        iconAnchor: [12, 12],
        popupAnchor: [0, -12],
      });
      marker.setIcon(newIcon);
    },
    [createMarkerHtml]
  );

  // Handle navigation button click
  const handleNavigate = useCallback(
    async (gcp: GCP): Promise<void> => {
      if (typeof window === 'undefined' || !mapRef.current || !userLocation)
        return;

      const L = await import('leaflet');
      if (routingControlRef.current) {
        routingControlRef.current.remove();
      }

      routingControlRef.current = L.Routing.control({
        waypoints: [
          L.latLng(userLocation[0], userLocation[1]), // User's current location
          L.latLng(gcp.latitude, gcp.longitude),
        ],
        routeWhileDragging: false,
      }).addTo(mapRef.current);

      setIsNavigating(true);
    },
    [userLocation]
  );

  // Function to close the navigation route
  const closeNavigation = useCallback(() => {
    if (routingControlRef.current) {
      routingControlRef.current.remove();
      routingControlRef.current = null;
      setIsNavigating(false);
    }
  }, []);

  // Add markers
  const addMarkers = useCallback(
    async (L: typeof import('leaflet')): Promise<void> => {
      if (!mapRef.current) return;

      if (activePopupRef.current) {
        activePopupRef.current.closePopup();
        activePopupRef.current = null;
      }

      Object.values(markersRef.current).forEach((marker) => marker.remove());
      markersRef.current = {};

      gcps.forEach((gcp) => {
        if (gcp.latitude && gcp.longitude) {
          const isSelected = selectedGCP?.id === gcp.id;

          const markerIcon = L.divIcon({
            className: 'custom-div-icon',
            html: createMarkerHtml(gcp, isSelected),
            iconSize: [20, 20],
            iconAnchor: [12, 12],
            popupAnchor: [0, -12],
          });

          const marker = L.marker([gcp.latitude, gcp.longitude], {
            icon: markerIcon,
          });

          const popupContent = `
            <div>
              ${generatePopupContent(gcp)}
              <button 
                onclick="window.dispatchEvent(new CustomEvent('${
                  isNavigating ? 'closeNavigation' : 'navigateToGCP'
                }', { detail: ${gcp.id} }))"
                class="${
                  isNavigating
                    ? 'close-navigation bg-red-600'
                    : 'navigate-to-gcp bg-blue-600'
                } text-white py-2 px-3 rounded-md w-full text-center font-medium cursor-pointer transition-opacity duration-200 mt-3"
              >
                ${isNavigating ? 'Close Navigation' : 'Navigate to GCP'}
              </button>
            </div>
          `;
          const popup = L.popup({
            offset: [0, 50],
            autoPan: true,
            autoPanPadding: [50, 50],
            closeButton: true,
            autoClose: false,
            closeOnClick: false,
            className: 'custom-popup',
          }).setContent(popupContent);

          marker.bindPopup(popup);

          marker.on('click', () => {
            mapRef.current?.setView([gcp.latitude, gcp.longitude], 18, {
              animate: true,
            });
            setSelectedGCP(gcp);
            setShouldZoom(true);
            if (onGCPClick) {
              onGCPClick(gcp);
            }
            activePopupRef.current = marker;
            marker.openPopup();
          });

          marker.on('popupclose', () => {
            if (activePopupRef.current === marker) {
              activePopupRef.current = null;
              updateMarkerIcon(marker, gcp, false);
            }
          });

          if (mapRef.current) {
            marker.addTo(mapRef.current);
            markersRef.current[gcp.id] = marker;

            if (selectedGCP?.id === gcp.id) {
              marker.openPopup();
              activePopupRef.current = marker;
            }
          }
        }
      });
    },
    [
      gcps,
      selectedGCP,
      createMarkerHtml,
      updateMarkerIcon,
      onGCPClick,
      setSelectedGCP,
      setShouldZoom,
      isNavigating,
    ]
  );

  // Listen for the custom events to trigger navigation and close navigation
  useEffect(() => {
    const handleNavigationEvent = (e: Event) => {
      const eventDetail = (e as CustomEvent).detail;
      const gcpToNavigate = gcps.find((gcp) => gcp.id === eventDetail);
      if (gcpToNavigate) {
        handleNavigate(gcpToNavigate);
      }
    };

    const handleCloseNavigationEvent = () => {
      closeNavigation();
    };

    window.addEventListener('navigateToGCP', handleNavigationEvent);
    window.addEventListener('closeNavigation', handleCloseNavigationEvent);

    return () => {
      window.removeEventListener('navigateToGCP', handleNavigationEvent);
      window.removeEventListener('closeNavigation', handleCloseNavigationEvent);
    };
  }, [gcps, handleNavigate, closeNavigation]);

  // Initialize map
  useEffect(() => {
    if (
      typeof window === 'undefined' ||
      mapRef.current ||
      !mapContainer.current
    )
      return;

    const initMap = async (): Promise<void> => {
      const L = (await import('leaflet')).default;
      await import('leaflet-routing-machine');
      initLeafletIconDefaults(L);

      if (!mapRef.current && mapContainer.current) {
        mapRef.current = L.map(mapContainer.current, {
          zoomControl: false,
          center: [13.191615, 123.599371],
          zoom: 13,
        });

        L.control.zoom({ position: 'bottomright' }).addTo(mapRef.current);
        const baseLayers = createBaseLayers(L);
        L.control.layers(baseLayers).addTo(mapRef.current);
        baseLayers.hybrid.addTo(mapRef.current);

        await addMarkers(L);
      }
    };

    initMap();

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update markers when gcps change
  useEffect(() => {
    if (typeof window === 'undefined' || !mapRef.current) return;

    const updateMarkers = async (): Promise<void> => {
      const L = await import('leaflet');
      await addMarkers(L.default);
    };

    updateMarkers();
  }, [gcps, selectedGCP, addMarkers]);

  // Handle selectedGCP changes
  useEffect(() => {
    if (
      typeof window === 'undefined' ||
      !mapRef.current ||
      isZoomingRef.current ||
      !selectedGCP
    )
      return;

    const marker = markersRef.current[selectedGCP.id];
    if (!marker) return;

    if (activePopupRef.current && activePopupRef.current !== marker) {
      activePopupRef.current.closePopup();
    }

    marker.openPopup();
    activePopupRef.current = marker;
  }, [selectedGCP]);

  return (
    <div className={cn('relative w-full h-full overflow-hidden', className)}>
      <div ref={mapContainer} id='map' className='w-full h-full' />
    </div>
  );
};

const MapComponent = dynamic(() => Promise.resolve(BaseMapComponent), {
  ssr: false,
  loading: () => <LoadingComponent />,
});

export default MapComponent;

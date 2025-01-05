import { BadgeProps } from '@/components/ui/badge';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import * as L from 'leaflet';

export type PopoverType = typeof Popover;
export type PopoverTriggerType = typeof PopoverTrigger;
export type PopoverContentType = typeof PopoverContent;

export type BadgeVariant =
  | 'default'
  | 'destructive'
  | 'outline'
  | 'secondary'
  | 'success'
  | 'warning'
  | null
  | undefined;

declare module 'leaflet' {
  interface RoutingControlOptions {
    waypoints: L.LatLng[];
    router?: unknown;
    routeWhileDragging?: boolean;
    showAlternatives?: boolean;
    addWaypoints?: boolean;
    fitSelectedRoutes?: boolean;
    lineOptions?: {
      styles?: {
        color: string;
        opacity: number;
        weight: number;
      }[];
      extendToWaypoints?: boolean;
      missingRouteTolerance?: number;
    };
    altLineOptions?: {
      styles?: {
        color: string;
        opacity: number;
        weight: number;
      }[];
    };
  }

  // Define the RoutingControl interface
  interface RoutingControl {
    remove: () => void;
    // Add any other methods you might need
  }
}

// Existing navigation state type
export interface GCPNavigationState {
  isNavigating: boolean;
  targetGCP: number | null;
}

export type CustomBadgeProps = {
  variant?: BadgeProps['variant'] | 'custom';
  customColor?: string;
};

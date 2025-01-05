import { GCP } from '@/lib/gcpData';
import { useState } from 'react';

// Hook for sidebar state management
export function useSidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return { isSidebarOpen, setIsSidebarOpen };
}

// Hook for selected barangay state management
export function useSelectedBarangay() {
  const [selectedBarangay, setSelectedBarangay] = useState('all');
  return { selectedBarangay, setSelectedBarangay };
}

// Hook for search query state management
export function useSearchQuery() {
  const [searchQuery, setSearchQuery] = useState('');
  return { searchQuery, setSearchQuery };
}

// Hook for selected GCP state management
export function useSelectedGCP() {
  const [selectedGCP, setSelectedGCP] = useState<GCP | null>(null);
  return { selectedGCP, setSelectedGCP };
}

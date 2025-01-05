'use client';

import { GCP } from '@/lib/gcpData';
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';

interface GCPContextType {
  selectedGCP: GCP | null;
  setSelectedGCP: (gcp: GCP | null) => void;
  clearSelectedGCP: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  barangayFilter: string;
  setBarangayFilter: (barangay: string) => void;
  statusFilter: string;
  setStatusFilter: (status: string) => void;
  typeFilter: string;
  setTypeFilter: (type: string) => void;
  resetFilters: () => void;
  shouldZoom: boolean;
  setShouldZoom: (should: boolean) => void;
}

const GCPContext = createContext<GCPContextType | undefined>(undefined);

export function GCPProvider({ children }: { children: ReactNode }) {
  const [selectedGCP, setSelectedGCP] = useState<GCP | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [barangayFilter, setBarangayFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [shouldZoom, setShouldZoom] = useState(true);

  const clearSelectedGCP = useCallback(() => {
    setSelectedGCP(null);
    setShouldZoom(false);
  }, []);

  const resetFilters = useCallback(() => {
    setSearchQuery('');
    setBarangayFilter('all');
    setStatusFilter('all');
    setTypeFilter('all');
  }, []);

  return (
    <GCPContext.Provider
      value={{
        selectedGCP,
        setSelectedGCP,
        clearSelectedGCP,
        searchQuery,
        setSearchQuery,
        barangayFilter,
        setBarangayFilter,
        statusFilter,
        setStatusFilter,
        typeFilter,
        setTypeFilter,
        resetFilters,
        shouldZoom,
        setShouldZoom,
      }}
    >
      {children}
    </GCPContext.Provider>
  );
}

export function useGCP() {
  const context = useContext(GCPContext);
  if (context === undefined) {
    throw new Error('useGCP must be used within a GCPProvider');
  }
  return context;
}

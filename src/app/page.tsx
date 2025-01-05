'use client';

import MapComponent from '@/components/MapComponent/MapComponent';
import { useGCP } from '@/hooks/useGCP';
import { gcpData } from '@/lib/gcpData';

export default function Home() {
  const {
    setSelectedGCP,
    searchQuery,
    barangayFilter,
    statusFilter,
    typeFilter,
  } = useGCP();

  const filteredGCPs = gcpData.filter((gcp) => {
    const matchesSearch =
      searchQuery === '' ||
      gcp.number.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesBarangay =
      barangayFilter === 'all' || gcp.barangay === barangayFilter;
    const matchesStatus = statusFilter === 'all' || gcp.status === statusFilter;
    const matchesType = typeFilter === 'all' || gcp.type === typeFilter;

    return matchesSearch && matchesBarangay && matchesStatus && matchesType;
  });

  return (
    <div className='flex h-screen justify-center items-center w-full overflow-hidden'>
      <MapComponent gcps={filteredGCPs} onGCPClick={setSelectedGCP} />
    </div>
  );
}

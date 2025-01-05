'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { useIsMobile } from '@/hooks/use-mobile';
import { useGCP } from '@/hooks/useGCP';
import { GCP, gcpData } from '@/lib/gcpData';
import {
  cn,
  getMarkerColor,
  getStatusBadgeVariant,
  getTypeBadgeVariant,
  getTypeColorClass,
} from '@/lib/utils';
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Menu,
  Search,
  X,
} from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { Badge } from '../ui/badge';
import { ScrollArea } from '../ui/scroll-area';

export function AppSidebar({ closeSidebar }: { closeSidebar?: () => void }) {
  const { state, toggleSidebar, setOpenMobile } = useSidebar();
  const isCollapsed = state === 'collapsed';
  const inputRef = useRef<HTMLInputElement | null>(null);
  const isMobile = useIsMobile();

  const {
    selectedGCP,
    setSelectedGCP,
    searchQuery,
    setSearchQuery,
    barangayFilter,
    setBarangayFilter,
    statusFilter,
    setStatusFilter,
    typeFilter,
    setTypeFilter,
    setShouldZoom, // Include this line
  } = useGCP();

  // Focus input when sidebar expands
  useEffect(() => {
    if (!isCollapsed) {
      inputRef.current?.focus();
    }
  }, [isCollapsed]);

  const handleSearchClick = () => {
    if (isCollapsed) {
      toggleSidebar();
    } else {
      inputRef.current?.focus();
    }
  };

  // Filtered GCP items based on all criteria
  const filteredItems = gcpData.filter((gcp) => {
    const matchesSearch =
      searchQuery === '' ||
      gcp.number.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesBarangay =
      barangayFilter === 'all' || gcp.barangay === barangayFilter;
    const matchesStatus = statusFilter === 'all' || gcp.status === statusFilter;
    const matchesType = typeFilter === 'all' || gcp.type === typeFilter;

    return matchesSearch && matchesBarangay && matchesStatus && matchesType;
  });
  const handleGCPClick = (gcp: GCP) => {
    setSelectedGCP(gcp);
    setShouldZoom(true); // This will trigger the zoom
    if (closeSidebar) closeSidebar();
  };

  return (
    <>
      {isMobile && (
        <Button
          onClick={() => setOpenMobile(true)}
          className='absolute top-4 left-4 z-30'
        >
          <Menu size={15} />
        </Button>
      )}

      <Sidebar
        collapsible='icon'
        className={cn(
          isMobile ? 'w-screen' : isCollapsed ? 'min-w-20' : 'w-72',
          'transition-none' // Add this to prevent transition issues
          
        )}
      >
        {/* Sidebar header */}
        {/* Sidebar header */}
        <div className='flex items-center justify-between p-4 border-b border-gray-200 relative'>
          <div
            className={`flex items-center ${
              isCollapsed && !isMobile ? 'hidden' : ''
            }`}
          >
            <Image
              src='/images/logo.png' // Replace with the actual path to your logo
              alt='Logo'
              width={50}
              height={50}
              className='mr-2'
            />
            <div className='flex flex-col'>
              <h1 className='text-lg font-semibold'>
                <span className='text-purple-500'>GUINO</span>
                <span className='text-green-500'>PINPOINT</span>
              </h1>
              <p className='text-xs text-purple-500'>
                GUINOBATAN GCP FINDER
              </p>
            </div>
          </div>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant='default'
                  onClick={
                    isMobile ? () => setOpenMobile(false) : toggleSidebar
                  }
                  className='transform transition-all duration-500'
                >
                  {isMobile ? (
                    <X size={15} />
                  ) : isCollapsed ? (
                    <ChevronRight size={15} />
                  ) : (
                    <ChevronLeft size={15} />
                  )}
                  <span className='sr-only'>Toggle Sidebar</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent side='right'>
                <p>
                  {isMobile
                    ? 'Close Sidebar'
                    : isCollapsed
                    ? 'Expand Sidebar'
                    : 'Collapse Sidebar'}
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        {/* Search Bar and Filters */}
        <div className='p-4 border-b border-gray-200'>
          {!isCollapsed ? (
            <>
              <Input
                type='text'
                placeholder='Search GCP...'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className='h-8 text-xs p-1 border border-gray-300 focus:outline-none focus:ring-0 focus:border-transparent mb-2'
                ref={inputRef}
              />

              <Select onValueChange={setBarangayFilter} value={barangayFilter}>
                <SelectTrigger className='w-full mb-2 h-8 text-xs text-white bg-[#52796f] border-[#52796f]'>
                  <SelectValue placeholder='Filter by Barangay' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='all'>Barangays</SelectItem>
                  {[
                    'Calzada',
                    'Ilawod',
                    'Inamnan Grande',
                    'Inamnan Pequeño',
                    'Iraya',

                    'Poblacion',
                  ].map((barangay) => (
                    <SelectItem key={barangay} value={barangay}>
                      {barangay}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select onValueChange={setStatusFilter} value={statusFilter}>
                <SelectTrigger className='w-full mb-2 h-8 text-xs text-white bg-[#52796f] border-[#52796f]'>
                  <SelectValue placeholder='Filter by Status' /> {/* Changed from 'Remarks' to 'Status' */}
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='all'>Status</SelectItem> {/* Changed from 'All Remarks' to 'All Status' */}
                  <SelectItem value='Disturbed'>Disturbed</SelectItem>
                  <SelectItem value='Undisturbed'>Undisturbed</SelectItem>
                </SelectContent>
              </Select>

              <Select onValueChange={setTypeFilter} value={typeFilter}>
                <SelectTrigger className='w-full h-8 text-xs text-white bg-[#52796f] border-[#52796f]'>
                  <SelectValue placeholder='Filter by Type' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='all'>Types</SelectItem>
                  {['BLLM', 'BBM'].map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </>
          ) : (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant='default'
                    className='flex items-center justify-center'
                    onClick={handleSearchClick}
                  >
                    <Search size={15} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side='right'>
                  <p>Search</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>

        {/* Sidebar content */}
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>GCP Items</SidebarGroupLabel>
            {isCollapsed ? (
              <ScrollArea className='h-[calc(100vh-160px)]'>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {filteredItems.map((gcp) => (
                      <TooltipProvider key={gcp.id}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <SidebarMenuItem
                              className={cn(
                                'cursor-pointer transition-all duration-200',
                                selectedGCP?.id === gcp.id
                                  ? 'bg-gray-50'
                                  : 'hover:bg-gray-100'
                              )}
                              onClick={() => handleGCPClick(gcp)}
                            >
                              <div className='flex flex-col items-center'>
                                <div className='w-10 h-10 flex-shrink-0 relative'>
                                  {gcp.imageUrl ? (
                                    <Image
                                      src={gcp.imageUrl}
                                      alt={gcp.number}
                                      layout='fill'
                                      objectFit='cover'
                                      className={cn(
                                        'rounded-lg',
                                        selectedGCP?.id === gcp.id &&
                                          'opacity-90 border-2 border-primary' // Changed from border-black
                                      )}
                                      onError={(e) => {
                                        const target =
                                          e.target as HTMLImageElement;
                                        target.style.display = 'none';
                                      }}
                                    />
                                  ) : (
                                    <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-muted'>
                                      <MapPin
                                        className={`h-5 w-5 transition-colors duration-200 ${getMarkerColor(
                                          gcp.status
                                        )}`}
                                      />
                                    </div>
                                  )}
                                </div>
                                <p className='text-[10px] font-thin text-black'>
                                  {gcp.number}
                                </p>
                              </div>
                            </SidebarMenuItem>
                          </TooltipTrigger>
                          <TooltipContent side='right'>
                            <div className='text-[10px]'>
                              <p>
                                <strong className='font-semibold'>
                                  GCP Number:
                                </strong>
                                <span className='font-thin'> {gcp.number}</span>
                              </p>
                              <p>
                                <strong className='font-semibold'>
                                  Barangay:
                                </strong>
                                <span className='font-thin'>
                                  {' '}
                                  {gcp.barangay}
                                </span>
                              </p>
                              <div className='flex items-center gap-2'>
                                <p>
                                  <strong className='font-semibold'>
                                    Status:
                                  </strong>
                                  <span
                                    className={`font-thin ${getMarkerColor(
                                      gcp.status
                                    )}`}
                                  >
                                    {' '}
                                    {gcp.status}
                                  </span>
                                </p>
                                <p>
                                  <strong className='font-semibold'>
                                    Type:
                                  </strong>
                                  <span
                                    className={`font-thin ${getTypeColorClass(
                                      gcp.type
                                    )}`}
                                  >
                                    {' '}
                                    {gcp.type}
                                  </span>
                                </p>
                              </div>
                            </div>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </ScrollArea>
            ) : (
              <SidebarGroupContent>
                <SidebarMenu>
                  {filteredItems.map((gcp) => (
                    <SidebarMenuItem
                      key={gcp.id}
                      className={cn(
                        'cursor-pointer transition-all duration-200',
                        selectedGCP?.id === gcp.id && 'bg-gray-100'
                      )}
                      onClick={() => handleGCPClick(gcp)}
                    >
                      <Card
                        className={cn(
                          'flex items-center gap-4 p-3 transition-all duration-200',
                          selectedGCP?.id === gcp.id &&
                            'ring-2 ring-primary shadow-sm'
                        )}
                      >
                        <div className='w-16 h-16 flex-shrink-0 relative'>
                          {gcp.imageUrl ? (
                            <Image
                              src={gcp.imageUrl}
                              alt={gcp.number}
                              layout='fill'
                              objectFit='cover'
                              className={cn(
                                'rounded-md',
                                selectedGCP?.id === gcp.id && 'opacity-90'
                              )}
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                              }}
                            />
                          ) : (
                            <div className='flex h-full w-full items-center justify-center rounded-md bg-muted'>
                              <MapPin
                                className={`h-5 w-5 transition-colors duration-200 ${getMarkerColor(
                                  gcp.status
                                )}`}
                              />
                            </div>
                          )}
                        </div>
                        <CardContent className='flex flex-col w-full'>
                          <div className='flex flex-col mb-2 justify-between '>
                            <span className='font-semibold'>{gcp.number}</span>
                            <span className='text-xs text-muted-foreground'>
                              {gcp.barangay}
                            </span>
                          </div>
                          <div className='flex justify-between text-xs'>
                            <Badge variant={getStatusBadgeVariant(gcp.status)}>
                              {gcp.status}
                            </Badge>
                            <Badge variant={getTypeBadgeVariant(gcp.type)}>
                              {gcp.type}
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            )}
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </>
  );
}
export interface QuoteRequest {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  location: string;
  serviceType: 'drilling' | 'supply' | 'maintenance';
  status: 'Pending' | 'Contacted' | 'Quoted' | 'In Progress' | 'Completed';
  createdAt: string;
  message: string;
  // Dynamic specs depending on the service
  specs: {
    depthFeet?: number;
    diameterInches?: number;
    pumpHP?: number;
    pumpType?: string;
    flowRateGPM?: number;
    maintenanceFrequency?: string;
    pipeMaterial?: string;
  };
  estimatedCostRange: {
    min: number;
    max: number;
  };
  adminNotes?: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'drilling' | 'supply' | 'maintenance' | 'servicing' | ('drilling' | 'supply' | 'maintenance' | 'servicing')[];
  description: string;
  location: string;
  client: string;
  completionDate: string;
  image: string;
  images?: string[];
  highlights: string[];
}

export interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  bullets: string[];
  specs: { label: string; value: string }[];
  image: string;
  images?: string[];
  photosUrl?: string;
}

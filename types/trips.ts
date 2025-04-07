export interface Trip {
    id: number;
    influencer_category: string;
    influcencer_name: string; 
    destination: string;
    price: number;
    start_date: string;
    end_date: string;
    description: string;
  }
  
  export interface FilterState {
    destination: string;
    startDateAfter: Date | null;
    startDateBefore: Date | null;
    minPrice: number | null;
    maxPrice: number | null;
    selectedDestinations: string[];
    category: string | null;
  }
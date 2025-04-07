// import { createClient } from '@supabase/supabase-js';
// import type { Trip } from '@/types/trips';

// // Create a single supabase client for the browser
// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
// const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
// export  const supabase = createClient(supabaseUrl, supabaseAnonKey);

// export async function getTrips(
//   destination?: string,
//   startDateAfter?: Date | null,
//   startDateBefore?: Date | null,
//   minPrice?: number | null,
//   maxPrice?: number | null,
//   selectedDestinations?: string[],
//   selectedCategories?: string[]
// ): Promise<Trip[]> {
//   let query = supabase
//     .from('trips')
//     .select('*');

//   // Apply filters
//   if (destination) {
//     query = query.ilike('destination', `%${destination}%`);
//   }

//   if (startDateAfter) {
//     query = query.gte('start_date', startDateAfter.toISOString().split('T')[0]);
//   }

//   if (startDateBefore) {
//     query = query.lte('start_date', startDateBefore.toISOString().split('T')[0]);
//   }

//   if (minPrice !== null) {
//     query = query.gte('price', minPrice);
//   }

//   if (maxPrice !== null) {
//     query = query.lte('price', maxPrice);
//   }

//   if (selectedDestinations && selectedDestinations.length > 0) {
//     query = query.in('destination', selectedDestinations);
//   }

//   // Handle category with trailing spaces - IMPORTANT FIX HERE
//   if (selectedCategories && selectedCategories.length > 0 && selectedCategories[0]) {
//     // Use startswith to match even with trailing spaces in the database
//     const categoryTrimmed = selectedCategories[0].trim();
//     console.log(`Filtering by category (trimmed): "${categoryTrimmed}"`);
    
//     // Try this approach that's more flexible with whitespace
//     query = query.or(`influencer_category.ilike.%${categoryTrimmed}%, influencer_category.eq.${categoryTrimmed}`);
//   }


//   const { data, error } = await query;

//   if (error) {
//     console.error('Error fetching trips:', error);
//     return [];
//   }

//   return data as Trip[];
// }

import { createClient } from "@supabase/supabase-js"
import type { Trip } from "@/types/trips"

// Create a single supabase client for the browser
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export async function getTrips(
  destination?: string,
  startDateAfter?: Date | null,
  startDateBefore?: Date | null,
  minPrice?: number | null,
  maxPrice?: number | null,
  selectedDestinations?: string[],
  selectedCategories?: string[],
): Promise<Trip[]> {
  let query = supabase.from("trips").select("*")

  // Apply filters
  if (destination) {
    query = query.ilike("destination", `%${destination}%`)
  }

  if (startDateAfter) {
    query = query.gte("start_date", startDateAfter.toISOString().split("T")[0])
  }

  if (startDateBefore) {
    query = query.lte("start_date", startDateBefore.toISOString().split("T")[0])
  }

  if (minPrice !== null) {
    query = query.gte("price", minPrice)
  }

  if (maxPrice !== null) {
    query = query.lte("price", maxPrice)
  }

  if (selectedDestinations && selectedDestinations.length > 0) {
    query = query.in("destination", selectedDestinations)
  }

  // Handle category with trailing spaces - IMPORTANT FIX HERE
  // if (selectedCategories && selectedCategories.length > 0 && selectedCategories[0]) {
  //   // Use ilike for case-insensitive matching with trimmed value
  //   const categoryTrimmed = selectedCategories[0].trim()
  //   console.log(`Filtering by category (trimmed): "${categoryTrimmed}"`)

  //   // Use ilike for more flexible matching
  //   query = query.ilike("influencer_category", categoryTrimmed)
  // }
  if (selectedCategories && selectedCategories.length > 0 && selectedCategories[0]) {
    // Use ilike with wildcards for more flexible matching
    const categoryTrimmed = selectedCategories[0].trim()
    console.log(`Filtering by category (trimmed): "${categoryTrimmed}"`)

    // Use wildcards before and after to match the category anywhere in the field
    query = query.ilike("influencer_category", `%${categoryTrimmed}%`)
  }




  const { data, error } = await query

  if (error) {
    console.error("Error fetching trips:", error)
    return []
  }

  return data as Trip[]
}


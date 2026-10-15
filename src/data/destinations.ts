export interface DestinationItem {
  id: string;
  name: string;
  country: string;
  category: 'thailand' | 'domestic' | 'international';
  tagline: string;
  description: string;
  imageUrl: string;
  highlights: string[];
  featured?: boolean;
}

export const THAILAND_DESTINATIONS: DestinationItem[] = [
  {
    id: 'bangkok',
    name: 'Bangkok',
    country: 'Thailand',
    category: 'thailand',
    tagline: 'Vibrant Metropolis & Heritage',
    description: 'City experiences, shopping, and sightseeing inspiration in the energetic capital of Thailand.',
    imageUrl: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1000&q=80',
    highlights: ['Grand Palace & Wat Pho', 'Chao Phraya River Cruises', 'Iconic Night Markets & Shopping', 'Michelin Street Food'],
    featured: true
  },
  {
    id: 'phuket',
    name: 'Phuket',
    country: 'Thailand',
    category: 'thailand',
    tagline: 'Tropical Beaches & Island Vibes',
    description: 'Tropical beaches and island experiences surrounded by the turquoise waters of the Andaman Sea.',
    imageUrl: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=1000&q=80',
    highlights: ['Patong & Kata Beaches', 'Big Buddha Viewpoint', 'Speedboat Excursions', 'Vibrant Beach Clubs'],
    featured: true
  },
  {
    id: 'krabi',
    name: 'Krabi',
    country: 'Thailand',
    category: 'thailand',
    tagline: 'Limestone Cliffs & Emerald Waters',
    description: 'Coastal scenery and island escapes famous for dramatic towering cliffs and tranquil bays.',
    imageUrl: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1000&q=80',
    highlights: ['Railay Beach & Phra Nang', 'Four Islands Excursion', 'Sea Kayaking Mangroves', 'Emerald Pool & Hot Springs'],
    featured: true
  },
  {
    id: 'pattaya',
    name: 'Pattaya',
    country: 'Thailand',
    category: 'thailand',
    tagline: 'Beachside Leisure & Entertainment',
    description: 'Beachside experiences and leisure travel with easy proximity to Bangkok and water sports.',
    imageUrl: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=80',
    highlights: ['Coral Island (Koh Larn)', 'Sanctuary of Truth', 'Water Sports & Parasailing', 'Coastline Cafes'],
    featured: false
  },
  {
    id: 'thailand-islands',
    name: 'Thailand Island Experiences',
    country: 'Thailand',
    category: 'thailand',
    tagline: 'Phi Phi, Koh Samui & Beyond',
    description: 'Explore available island and cruise-related travel options across Thailand’s most scenic archipelagos.',
    imageUrl: 'https://images.unsplash.com/photo-1537956965359-7573183d1f57?auto=format&fit=crop&w=1000&q=80',
    highlights: ['Phi Phi Islands & Maya Bay', 'Koh Samui Island Leisure', 'Catamaran & Yacht Cruising', 'Snorkeling & Coral Diving'],
    featured: true
  }
];

export const DOMESTIC_DESTINATIONS: DestinationItem[] = [
  {
    id: 'goa',
    name: 'Goa',
    country: 'India',
    category: 'domestic',
    tagline: 'Sun, Sand & Coastal Heritage',
    description: 'Golden beaches, Portuguese heritage architecture, vibrant seaside shacks, and relaxed coastal living.',
    imageUrl: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=80',
    highlights: ['North & South Goa Beaches', 'Old Goa Heritage Churches', 'Sunset Mandovi River Cruises', 'Water Sports']
  },
  {
    id: 'kerala',
    name: 'Kerala',
    country: 'India',
    category: 'domestic',
    tagline: 'God’s Own Country',
    description: 'Serene palm-fringed backwaters, Munnar tea hills, Ayurvedic wellness retreats, and coastal beauty.',
    imageUrl: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80',
    highlights: ['Alleppey Houseboat Cruises', 'Munnar Mist-Covered Hills', 'Periyar Wildlife Sanctuary', 'Kochi Colonial Architecture']
  },
  {
    id: 'kashmir',
    name: 'Kashmir',
    country: 'India',
    category: 'domestic',
    tagline: 'Paradise on Earth',
    description: 'Breathtaking snow-dusted valleys, tranquil Dal Lake shikaras, and scenic mountain landscapes.',
    imageUrl: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1000&q=80',
    highlights: ['Dal Lake Houseboat & Shikara', 'Gulmarg Gondola Ride', 'Pahalgam Betaab Valley', 'Sonamarg Glaciers']
  },
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    country: 'India',
    category: 'domestic',
    tagline: 'The Land of Royals',
    description: 'Royal palaces, formidable desert forts, rich vibrant folklore, and historic heritage stays.',
    imageUrl: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1000&q=80',
    highlights: ['Jaipur Pink City Palaces', 'Udaipur Lake Pichola', 'Jodhpur Mehrangarh Fort', 'Jaisalmer Desert Dunes']
  },
  {
    id: 'himachal-pradesh',
    name: 'Himachal Pradesh',
    country: 'India',
    category: 'domestic',
    tagline: 'Mighty Himalayas & Pine Valleys',
    description: 'Scenic hill retreats, roaring mountain rivers, lush pine forests, and adventure sports.',
    imageUrl: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1000&q=80',
    highlights: ['Manali & Solang Valley', 'Shimla Ridge & Mall Road', 'Dharamshala & McLeodGanj', 'Spiti & Parvati Valleys']
  },
  {
    id: 'andaman-islands',
    name: 'Andaman Islands',
    country: 'India',
    category: 'domestic',
    tagline: 'Pristine Archipelago & Coral Reefs',
    description: 'Pristine turquoise waters, powder white beaches, lush mangroves, and rich marine biodiversity.',
    imageUrl: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=1000&q=80',
    highlights: ['Radhanagar Beach Havelock', 'Neil Island Coral Exploration', 'Historic Cellular Jail', 'Scuba Diving & Snorkeling']
  }
];

export const INTERNATIONAL_DESTINATIONS: DestinationItem[] = [
  {
    id: 'thailand-intl',
    name: 'Thailand',
    country: 'Thailand',
    category: 'international',
    tagline: 'Specialist Focus • The Land of Smiles',
    description: 'From bustling Bangkok streets and floating markets to the breathtaking tropical beaches of Phuket and Krabi.',
    imageUrl: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1000&q=80',
    highlights: ['Specialist Booking Support', 'Bangkok, Phuket & Krabi', 'Island Hopping & Yachting', 'Customized Itineraries'],
    featured: true
  },
  {
    id: 'singapore',
    name: 'Singapore',
    country: 'Singapore',
    category: 'international',
    tagline: 'The Garden City of the Future',
    description: 'Futuristic architecture, world-renowned botanical gardens, Sentosa entertainment, and vibrant cuisine.',
    imageUrl: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1000&q=80',
    highlights: ['Marina Bay Sands & SkyPark', 'Gardens by the Bay', 'Sentosa Island Leisure', 'Universal Studios']
  },
  {
    id: 'malaysia',
    name: 'Malaysia',
    country: 'Malaysia',
    category: 'international',
    tagline: 'Truly Asia • Modern & Natural Wonders',
    description: 'Vibrant modern skylines, UNESCO heritage cities, ancient rainforests, and relaxing island shores.',
    imageUrl: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1000&q=80',
    highlights: ['Petronas Twin Towers KL', 'Batu Caves Cultural Site', 'Langkawi Duty-Free Islands', 'Penang Heritage & Food']
  },
  {
    id: 'dubai',
    name: 'Dubai & UAE',
    country: 'United Arab Emirates',
    category: 'international',
    tagline: 'Ultra-Modern Luxury & Desert Magic',
    description: 'Iconic skyscrapers, golden desert safaris, luxury shopping hubs, and family entertainment parks.',
    imageUrl: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=80',
    highlights: ['Burj Khalifa & Dubai Mall', 'Desert Safari & BBQ Dinner', 'Palm Jumeirah & Marina Cruise', 'Theme Parks & Miracle Garden']
  },
  {
    id: 'bali',
    name: 'Bali',
    country: 'Indonesia',
    category: 'international',
    tagline: 'Island of the Gods',
    description: 'Lush emerald rice terraces, cliffside ocean temples, surfing beaches, and rejuvenating wellness.',
    imageUrl: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1000&q=80',
    highlights: ['Ubud Rice Terraces & Art', 'Uluwatu Sunset Temple', 'Nusa Penida Day Trip', 'Seminyak Coastal Cafes']
  },
  {
    id: 'vietnam',
    name: 'Vietnam',
    country: 'Vietnam',
    category: 'international',
    tagline: 'Timeless Charm & Natural Splendor',
    description: 'Dramatic limestone karsts in Halong Bay, historic lantern-lit towns, and rich culinary discoveries.',
    imageUrl: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1000&q=80',
    highlights: ['Halong Bay Overnight Cruises', 'Hanoi Old Quarter', 'Hoi An Ancient Lantern Town', 'Da Nang Golden Bridge']
  }
];

export type PageId = 'sports' | 'method' | 'trains' | 'cruises';

export interface SportsEvent {
  id: string;
  title: string;
  badge: string;
  subtitle: string;
  description: string;
  highlights: string[];
  locations: string[];
  dates: string;
  image: string;
  heroQuote?: string;
  includedPerks: string[];
}

export interface TrainJourney {
  id: string;
  title: string;
  region: string;
  route: string;
  duration: string;
  description: string;
  experienceNotes: string;
  highlights: string[];
  image: string;
  cabinStyles: string[];
}

export interface CruiseCollection {
  id: string;
  category: string;
  title: string;
  tagline: string;
  description: string;
  featuredShips: string[];
  destinations: string[];
  image: string;
  exclusiveInclusions: string[];
}

export interface JourneyInquiry {
  fullName: string;
  email: string;
  phone: string;
  travelType: 'sports' | 'trains' | 'cruises' | 'custom' | 'office_visit';
  specificExperience: string;
  travelDate: string;
  guestsCount: string;
  specialRequests: string;
  preferredMeeting: 'office' | 'whatsapp' | 'call';
}

// for all common paged api responses
export interface PagedApiResponse<T> {
  pageNumber: number; // page number
  pageSize: number; // how many items in each page
  totalCount: number; // total items overall
  totalPages: number; // total number of pages
  content: T[];
}

export interface Place {
  id: number;
  name: string; // name of the place
  category: number; // ex) 'school facility', 'cafe', 'study cafe' -> references constants/categories.ts
  crowdness: number; // between 0 and 1.
  facilities: number[]; // ex) 'wifi', 'charge', 'restroom' -> references constants/facilities.ts
  lastUpdated: Date;
  lastContributor: string;
}
export interface User {
  nickname: string;
}

export interface PlacesApiResponse extends PagedApiResponse<Place> {}

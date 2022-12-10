import { PlacesApiResponse } from "types/api";

export const MOCKUP_PLACES_PAGE_1: PlacesApiResponse = {
  pageNumber: 1, // page number
  pageSize: 5, // how many items in each page
  totalCount: 20, // total items overall
  totalPages: 4, // total number of pages
  content: [
    {
      id: 1,
      name: "Starbucks SKKU",
      category: 1,
      crowdness: 0.5, // between 0 and 1.
      facilities: [1, 2, 3],
      lastUpdated: new Date("2022-12-09T18:24:00"),
    },
    {
      id: 2,
      name: "Learning Factory SKKU",
      category: 3,
      crowdness: 0.5, // between 0 and 1.
      facilities: [1, 3],
      lastUpdated: new Date("2022-12-08T15:24:00"),
    },
  ],
};

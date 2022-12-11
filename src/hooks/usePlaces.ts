// swr hook for fetching place information

import useSWR from "swr";
import { Place } from "types/api";
import { extractFieldFromObject } from "utils/array";
import { fetcher } from "utils/fetcher";

function usePlaces() {
  const { data, mutate, error } = useSWR<{ places: Place[] }>(
    "/places",
    fetcher
  );

  const placeNames = extractFieldFromObject(data?.places, "name");
  const placeIds = extractFieldFromObject(data?.places, "id");
  console.log(data);
  console.log(placeNames, placeIds);
  return {
    placeNames: placeNames,
    placeIds: placeIds,
    error,
    mutate,
  };
}

export default usePlaces;

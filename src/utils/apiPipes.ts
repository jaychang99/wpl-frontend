export function getIdOfPlaceName(
  placeName: string,
  placeArray: string[],
  idArray: string[]
) {
  // test each item for this function
  const isEqualName = (element: string) => element === placeName;

  const placeIndex = placeArray.findIndex(isEqualName);

  const id = idArray[placeIndex];
  return id;
}

export function getNumberFromCrowdnessPercentage(percentageString: string) {
  // trim last character
  const slicedString = percentageString.slice(0, -1);

  return Number(slicedString);
}

export function getCrowdnessPercentage(decimalCrowdness: number) {
  const result = Math.round(decimalCrowdness) + "%";
  return result;
}

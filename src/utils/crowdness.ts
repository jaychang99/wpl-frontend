export function getCrowdnessPercentage(decimalCrowdness: number) {
  const result = Math.round(decimalCrowdness * 100) + "%";
  return result;
}

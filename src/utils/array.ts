// returns array consisting of values of 'field' key in an object array
export function extractFieldFromObject<T>(object: T, field: string) {
  const result = [] as string[];
  if (Array.isArray(object)) {
    object.map((item) => result.push(item[field]));
  }
  return result;
}

export function findMissingNumbers(nums: number[]): number[] {
  const max: number = Math.max(...nums);

  const missingNumbers: number[] = Array.from(
    { length: max },
    (_, i) => i + 1
  ).filter((num) => !nums.includes(num));

  return missingNumbers;
}

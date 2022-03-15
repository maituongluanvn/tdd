const add = (numbers?: string): number => {
  if (!numbers) {
    return 0;
  }
  if (numbers.length === 1) {
    return Number(numbers);
  }
  let sum: number = 0;
  const parts = numbers.split(',');
  for (const part of parts) {
    sum += Number(part);
  }
  return sum;
};

export { add };

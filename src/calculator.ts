const add = (numbers?: string): number => {
  if (!numbers) {
    return 0;
  }
  if (numbers.length === 1) {
    return Number(numbers);
  }

  let sum: number = 0;
  // check new line symbol & special characters and replace
  let transformedNumbers: string = numbers;
  const specialChars = /[`!@#$%^&*()_+\=\[\]{};':"\\|.<>\/?~]/gi;

  if (numbers.includes('\n')) {
    transformedNumbers = numbers.replace(/\n/gi, ',');
  }
  if (specialChars.test(numbers)) {
    transformedNumbers = numbers.replace(specialChars, ',');
  }

  const parts = transformedNumbers.split(',');
  let countNegativeNumbers: number[] = [];

  for (const part of parts) {
    const num = Number(part);
    if (num < 0) {
      countNegativeNumbers.push(num);
    }
    if (num <= 1000) {
      sum += num;
    }
  }

  // throw error when Number includes negative numbers
  if (countNegativeNumbers.length === 1) {
    throw new Error('negatives not allowed');
  } else if (countNegativeNumbers.length > 1) {
    let str = '';
    for (const countNegativeNumber of countNegativeNumbers) {
      str += ` ${countNegativeNumber}`;
    }
    throw new Error(`negatives not allowed${str}`);
  }
  return sum;
};

export { add };

export function getRandomNumbers(count: number, range: number): number[] {
  const numbers = Array.from({ length: range }, (_, index) => index + 1);
  const randomNumbers: number[] = [];

  while (randomNumbers.length < count) {
    const randomIndex = Math.floor(Math.random() * numbers.length);
    const randomNumber = numbers.splice(randomIndex, 1)[0];
    randomNumbers.push(randomNumber);
  }

  return randomNumbers;
}

export function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

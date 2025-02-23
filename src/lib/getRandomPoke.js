import getPokeInfo from "./getPokeInfo";

const MAX_ID = 1025;

function generateRandomNumbers(start, end, n) {
  const randomNumbers = [];

  for (let i = 0; i < n; i++) {
    const randomNum = Math.round(Math.random() * end + start);
    if (!randomNumbers.includes(randomNum)) {
      randomNumbers.push(randomNum);
    }
  }

  return randomNumbers;
}

export default async function getRandomPokes({ numPoke = 12 }) {
  const randomIds = generateRandomNumbers(1, MAX_ID, numPoke);
  const randomPokes = await Promise.all(randomIds.map((id) => getPokeInfo(id)));

  return randomPokes;
}

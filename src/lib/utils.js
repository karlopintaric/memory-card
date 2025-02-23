export function makeUpper(string) {
  return string[0].toUpperCase() + string.slice(1);
}

export function shuffleArray(array) {
  const newArr = [...array];

  return newArr.sort(() => Math.random() - 0.5);
}

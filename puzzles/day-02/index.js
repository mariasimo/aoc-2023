const parseInput = (rawInput) => {
  return rawInput.split("\n").map((line) => {
    return line.split(/: |, |; /).splice(1);
  });
};

export const part1 = (rawInput) => {
  const input = parseInput(rawInput);
  const bag = { red: 12, green: 13, blue: 14 };

  return input.reduce((sum, game, index) => {
    const isValid = !game.some((item) => {
      const [num, color] = item.split(" ");
      return bag[color] < num;
    });
    if (isValid) {
      sum = sum + index + 1;
    }
    return sum;
  }, 0);
};

export const part2 = (rawInput) => {
  const games = parseInput(rawInput);

  const findPower = (game) => {
    const bag = { red: 0, green: 0, blue: 0 };
    game.forEach((item) => {
      const [num, color] = item.split(" ");
      if (bag[color] < +num) {
        bag[color] = +num;
      }
    });

    return bag.blue * bag.red * bag.green;
  };

  return games.reduce((acc, game) => acc + findPower(game), 0);
};

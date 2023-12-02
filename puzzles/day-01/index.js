const parseInput = (rawInput) => {
  return rawInput.split("\n");
};

export const part1 = (rawInput) => {
  const input = parseInput(rawInput);

  const pairs = input.map((line) => {
    const nums = line.replace(/\D+/g, "");

    if (nums.length === 1) {
      return `${nums[0]}${nums[0]}`;
    }

    return `${nums[0]}${nums[nums.length - 1]}`;
  });

  return pairs.reduce((acc, cu) => acc + Number(cu), 0);
};

export const part2 = (rawInput) => {
  const input = parseInput(rawInput);

  const digits = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  const getNumbers = (line) => {
    const pattern = /(\d+|zero|one|two|three|four|five|six|seven|eight|nine)/g;

    const match = line.match(pattern);
    const numbers = match.map((g) => {
      if (!Number(g)) {
        return digits[g];
      }
      return Number(g);
    });
    console.log(line, match, numbers);
    return numbers.join(",");
  };

  const pairs = input.splice(0, 10).map((line) => {
    const nums = getNumbers(line);

    if (nums.length === 1) {
      return `${nums[0]}${nums[0]}`;
    }

    return `${nums[0]}${nums[nums.length - 1]}`;
  });

  return pairs.reduce((acc, cu) => acc + Number(cu), 0);
};

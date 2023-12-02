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

  return;
};

// You can use the dev mode adding a console log here
// console.log(part1(exampleInput))

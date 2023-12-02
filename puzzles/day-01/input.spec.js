import { expect, test, describe } from "vitest";
import { readFile } from "./utils";
import { part1, part2 } from ".";

const example = readFile("puzzles/day-01/example.txt");
const example2 = readFile("puzzles/day-01/example2.txt");

describe("Day 1", () => {
  describe("part 1", () => {
    test.skip("Should return expected result with example input", () => {
      expect(part1(example)).toBe(142);
    });
  });
  describe("part 2", () => {
    test.skip("Should return expected result with example input", () => {
      expect(part2(example2)).toBe(281);
    });
  });
});

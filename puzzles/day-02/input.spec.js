import { expect, test, describe } from "vitest";
import { readFile } from "./utils";
import { part1, part2 } from ".";

const example = readFile("puzzles/day-02/example.txt");

describe("Day 2", () => {
  describe("part 1", () => {
    test.skip("Should return expected result with example input", () => {
      expect(part1(example)).toBe(8);
    });
  });
  describe("part 2", () => {
    test("Should return expected result with example input", () => {
      expect(part2(example)).toBe(2286);
    });
  });
});

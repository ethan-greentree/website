import { expect, it } from "vite-plus/test";
import { stagger } from "../src/scripts/stagger";

it("puts the separator between items, not after the last", () => {
  expect(stagger(["a", "b", "c"], "|")).toEqual(["a", "|", "b", "|", "c"]);
  expect(stagger(["a"], "|")).toEqual(["a"]);
  expect(stagger([], "|")).toEqual([]);
});

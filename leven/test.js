const leven = require("./");

test("leven works", () => {
  expect(leven("a", "b")).toBe(1);
  expect(leven("ab", "ac")).toBe(1);
  expect(leven("ac", "bc")).toBe(1);
  expect(leven("abc", "axc")).toBe(1);
  expect(leven("kitten", "sitting")).toBe(3);
  expect(leven("xabxcdxxefxgx", "1ab2cd34ef5g6")).toBe(6);
  expect(leven("cat", "cow")).toBe(2);
  expect(leven("xabxcdxxefxgx", "abcdefg")).toBe(6);
  expect(leven("javawasneat", "scalaisgreat")).toBe(7);
  expect(leven("example", "samples")).toBe(3);
  expect(leven("sturgeon", "urgently")).toBe(6);
  expect(leven("levenshtein", "frankenstein")).toBe(6);
  expect(leven("distance", "difference")).toBe(5);
  expect(
    leven("因為我是中國人所以我會說中文", "因為我是英國人所以我會說英文")
  ).toBe(2);
});

const leven_wasm = require("../pkg/leven_wasm").levenshtein;

test("leven_wasm works", () => {
  expect(leven_wasm("a", "b")).toBe(1);
  expect(leven_wasm("ab", "ac")).toBe(1);
  expect(leven_wasm("ac", "bc")).toBe(1);
  expect(leven_wasm("abc", "axc")).toBe(1);
  expect(leven_wasm("kitten", "sitting")).toBe(3);
  expect(leven_wasm("xabxcdxxefxgx", "1ab2cd34ef5g6")).toBe(6);
  expect(leven_wasm("cat", "cow")).toBe(2);
  expect(leven_wasm("xabxcdxxefxgx", "abcdefg")).toBe(6);
  expect(leven_wasm("javawasneat", "scalaisgreat")).toBe(7);
  expect(leven_wasm("example", "samples")).toBe(3);
  expect(leven_wasm("sturgeon", "urgently")).toBe(6);
  expect(leven_wasm("levenshtein", "frankenstein")).toBe(6);
  expect(leven_wasm("distance", "difference")).toBe(5);
  expect(
    leven_wasm("因為我是中國人所以我會說中文", "因為我是英國人所以我會說英文")
  ).toBe(2);
});

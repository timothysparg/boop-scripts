const trim = require("../src/trim.js");

test("string should not change", () => {
  const boopState = {
    fullText: "string should not change",
  };

  trim(boopState);
  expect(boopState.fullText).toBe("string should not change");
});

test("trim beginning", () => {
  const boopState = {
    fullText: "  trim beginning",
  };

  trim(boopState);
  expect(boopState.fullText).toBe("trim beginning");
});

test("trim end", () => {
  const boopState = {
    fullText: "trim end    ",
  };

  trim(boopState);
  expect(boopState.fullText).toBe("trim end");
});


test("trim ends", () => {
  const boopState = {
    fullText: " trim    ",
  };

  trim(boopState);
  expect(boopState.fullText).toBe("trim");
});
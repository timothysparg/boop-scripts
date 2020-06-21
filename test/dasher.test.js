const dasher = require("../src/dasher.js");

test("adds dashes", () => {
  const boopState = {
    fullText: "there should be dashes",
  };

  dasher(boopState);
  expect(boopState.fullText).toBe("there-should-be-dashes");
});

test("nothing to do", () => {
  const boopState = {
    fullText: "we-have-no-spaces",
  };

  dasher(boopState);
  expect(boopState.fullText).toBe("we-have-no-spaces");
});

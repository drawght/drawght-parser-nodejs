const
  fs = require("fs"),
  drawght = require("./drawght")

describe("drawght", function() {
  test("parse variables", function() {
    var template = "{name} v{version} ({release})";
    var result = drawght.parseKeys(template, {
      name: "Drawght",
      version: "0.1.0",
      release: "2021-07-01",
    });

    expect(result).toBe(`Drawght v0.1.0 (2021-07-01)`);
  });

  test.todo("parse objects");

  test.todo("parse lists");
});

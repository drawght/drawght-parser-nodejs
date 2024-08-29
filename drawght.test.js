const
  fs = require("fs"),
  drawght = require("./drawght")

describe("drawght", function() {
  test("convert variables", function() {
    var template = "{name} v{version} ({release})";
    var result = drawght.compile(template, {
      name: "Drawght",
      version: "0.1.0",
      release: "2021-07-01",
    });

    expect(result).toBe(`Drawght v0.1.0 (2021-07-01)`);
  });

  test("convert objects", function() {
    var template = "{package.name} v{package.version} ({package.release})";
    var result = drawght.compile(template, {
      package: {
        name: "Drawght",
        version: "0.1.0",
        release: "2021-07-01",
      }
    });

    expect(result).toBe(`Drawght v0.1.0 (2021-07-01)`);
  });

  test.todo("parse lists");
});

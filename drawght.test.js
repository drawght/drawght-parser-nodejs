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
    var template = "{product.name} - {package.name} v{package.version} ({package.release})";
    var result = drawght.compile(template, {
      product: {
        name: "Drawght",
      },
      package: {
        name: "@drawght/parser",
        version: "0.1.0",
        release: "2021-07-01",
      }
    });

    expect(result).toBe(`Drawght - @drawght/parser v0.1.0 (2021-07-01)`);
  });

  test("convert list", function() {
    var template = "- {tags}"
    var result = drawght.compile(template, {
      tags: [ "Text", "Test", "Tagged" ]
    });

    expect(result).toBe("- Text\n- Test\n- Tagged")
  });

  test("convert item in a list", function() {
    var template = '{languages#2.name} site "https:{languages#2.url}" and {languages#1.name} site "https:{languages#1.url}"'
    var result = drawght.compile(template, {
      languages: [
        { name: "Go", url: "//go.dev/" },
        { name: "Ruby", url: "//www.ruby-lang.org/" },
      ]
    });

    expect(result).toBe('Ruby site "https://www.ruby-lang.org/" and Go site "https://go.dev/"')
  });

  test("convert list of objects", function() {
    var template = "- [{references:name}]({references:url})"
    var result = drawght.compile(template, {
      references: [
        { name: "Mustache", url: "//mustache.github.io" },
        { name: "Handlebars", url: "//handlebarsjs.com" },
      ]
    });

    expect(result).toBe("- [Mustache](//mustache.github.io)\n- [Handlebars](//handlebarsjs.com)")
  });
});

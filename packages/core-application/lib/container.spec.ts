import Container from "./container";

describe("container", () => {
  test("resole one", () => {
    const container = new Container();

    container.set("component1", () => ({ name: "1" }));

    expect(container.get("component1")).toEqual({ name: "1" });
  });

  test("resole two", () => {
    const container = new Container();

    container.set("component1", () => ({ name: "1" }));
    container.set("component2", () => ({
      name: "2",
      component1: container.get("component1"),
    }));

    expect(container.get("component2")).toEqual({
      name: "2",
      component1: { name: "1" },
    });
    expect(container.get("component1")).toEqual({ name: "1" });
  });

  test("resole three", () => {
    const container = new Container();

    container.set("component1", () => ({ name: "1" }));
    container.set("component2", () => ({
      name: "2",
      component1: container.get("component1"),
    }));
    container.set("component3", () => ({
      name: "3",
      component1: container.get("component1"),
    }));

    expect(container.get("component3")).toEqual({
      name: "3",
      component1: { name: "1" },
    });
    expect(container.get("component2")).toEqual({
      name: "2",
      component1: { name: "1" },
    });
    expect(container.get("component1")).toEqual({ name: "1" });
  });
});

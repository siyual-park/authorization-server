import Container from "./container";

type Initializer = () => unknown;

export default class Components {
  private readonly container = new Container<string, unknown>();

  private readonly dependencyContainer = new Container<string, void>();

  set(key: string, initializer: Initializer): Components {
    this.dependencyContainer.set(key, () => {});
    this.container.set(key, initializer);
    return this;
  }

  get<T = unknown>(key: string): T {
    this.dependencyContainer.get(key);
    return this.container.get(key);
  }

  setDependency(key: string, other: string): void {
    this.dependencyContainer.update(key, (initializer) => () => {
      initializer?.();
      this.container.get(other);
    });
  }

  has(key: string): boolean {
    return this.container.has(key);
  }
}

import CantFindComponentException from "./exception/cant-find-component-exception";

type Initializer = (container: Container) => unknown;

export default class Container {
  private readonly components: Map<string, unknown> = new Map<
    string,
    unknown
  >();

  private readonly componentInitializers: Map<string, Initializer> = new Map<
    string,
    Initializer
  >();

  set(key: string, initializer: Initializer): Container {
    this.componentInitializers.set(key, initializer);
    return this;
  }

  get<T = undefined>(key: string): T {
    if (!this.has(key)) {
      throw new CantFindComponentException("Can't find component.");
    }

    if (!this.components.has(key) && this.componentInitializers.has(key)) {
      this.components.set(key, this.componentInitializers.get(key)?.(this));
    }

    return this.components.get(key) as T;
  }

  has(key: string): boolean {
    return this.components.has(key) || this.componentInitializers.has(key);
  }
}

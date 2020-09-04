type Initializer = (container: Container) => unknown;

export default class Container {
  private readonly components: Map<string, unknown> = new Map<
    string,
    undefined
  >();

  private readonly componentInitializers: Map<string, Initializer> = new Map<
    string,
    Initializer
  >();

  add(key: string, initializer: Initializer): Container {
    this.componentInitializers.set(key, initializer);
    return this;
  }

  get(key: string): unknown | null {
    let component = this.components.get(key);
    if (component != null) return component;

    component = this.componentInitializers.get(key)?.(this);
    if (component != null) this.components.set(key, component);

    return component;
  }
}

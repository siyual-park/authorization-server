import CantFindComponentException from "./exception/cant-find-component-exception";

type Initializer<V> = () => V;

export default class Container<K, V> {
  private readonly elements: Map<K, V> = new Map<K, V>();

  private readonly componentInitializers: Map<K, Initializer<V>> = new Map<
    K,
    Initializer<V>
  >();

  set(key: K, initializer: Initializer<V>): Container<K, V> {
    this.componentInitializers.set(key, initializer);
    return this;
  }

  update(
    key: K,
    updater: (initializer?: Initializer<V>) => Initializer<V>
  ): void {
    this.componentInitializers.set(
      key,
      updater(this.componentInitializers.get(key))
    );
  }

  get<U extends V>(key: K): U {
    if (!this.elements.has(key)) {
      if (!this.componentInitializers.has(key)) {
        throw new CantFindComponentException(`Can't find ${key} component.`);
      }
      this.elements.set(key, this.componentInitializers.get(key)?.() as U);
    }

    return this.elements.get(key) as U;
  }

  has(key: K): boolean {
    return this.elements.has(key) || this.componentInitializers.has(key);
  }
}

import Module from "./module";
import Container from "./container";

export default abstract class ComponentModule<Feature> implements Module {
  readonly name: string;

  protected constructor(name: string) {
    this.name = name;
  }

  configure(components: Container): void {
    this.dependencies(components);
    components.set(this.name, (container) => this.install(container));
  }

  // eslint-disable-next-line class-methods-use-this,@typescript-eslint/no-unused-vars
  protected dependencies(components: Container): void {}

  protected abstract install(components: Container): Feature;
}

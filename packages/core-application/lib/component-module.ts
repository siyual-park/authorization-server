import Module from "./module";
import Components from "./components";

export default abstract class ComponentModule<Component> implements Module {
  readonly key: string;

  readonly dependencies: string[];

  protected constructor(key: string, dependencies: string[] = []) {
    this.key = key;
    this.dependencies = dependencies;
  }

  configure(components: Components): void {
    components.set(this.key, () => this.install(components));
    this.dependencies.forEach((dependency) =>
      components.setDependency(this.key, dependency)
    );
  }

  protected abstract install(components: Components): Component;
}

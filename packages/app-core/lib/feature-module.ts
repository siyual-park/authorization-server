import Module from "./module";
import Container from "./container";

export default abstract class FeatureModule<Feature> implements Module {
  readonly name: string;

  protected constructor(name: string) {
    this.name = name;
  }

  configure(features: Container): void {
    this.dependencies(features);
    features.set(this.name, (container) => this.install(container));
  }

  // eslint-disable-next-line class-methods-use-this
  dependencies(features: Container): void {}

  abstract install(features: Container): Feature;
}

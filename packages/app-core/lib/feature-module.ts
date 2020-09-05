import Module from "./module";
import Container from "./container";

export default abstract class FeatureModule<Feature> implements Module {
  readonly name: string;

  protected constructor(name: string) {
    this.name = name;
  }

  configure(features: Container): void {
    features.set(this.name, (container) => this.install(container));
  }

  abstract install(features: Container): Feature;
}

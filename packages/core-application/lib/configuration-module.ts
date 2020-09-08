import ComponentModule from "./component-module";

export default abstract class ConfigurationModule<T> extends ComponentModule<
  T
> {
  protected constructor(name = "configuration", dependencies: string[] = []) {
    super(name, dependencies);
  }
}

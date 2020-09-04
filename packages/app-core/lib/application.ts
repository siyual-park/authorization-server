import Container from "./container";
import Module from "./module";

export default class Application {
  private readonly features: Container = new Container();

  install(module: Module): Application {
    module.build(this.features);
    return this;
  }
}

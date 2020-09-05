import Container from "./container";
import Module from "./module";
import Launcher from "./launcher";

export default class Application {
  private readonly features: Container = new Container();

  run(): void | Promise<void> {
    const launcher = this.features.get("launcher") as Launcher;
    return launcher.launch();
  }

  install(module: Module): Application {
    module.configure(this.features);
    return this;
  }
}

import Container from "./container";
import Module from "./module";
import Launcher from "./launcher";

export default class Application {
  private readonly components: Container = new Container();

  private readonly modules: Module[] = [];

  run(): void | Promise<void> {
    const launcher = this.components.get<Launcher>("launcher");
    return launcher.launch();
  }

  install(module: Module): Application {
    this.modules.push(module);
    module.configure(this.components);
    return this;
  }
}

import Module from "./module";
import Launcher from "./launcher";
import Components from "./components";

export default class Application {
  private readonly components: Components = new Components();

  run(): void | Promise<void> {
    const launcher = this.components.get<Launcher>("launcher");
    return launcher.launch();
  }

  install(module: Module): Application {
    module.configure(this.components);
    return this;
  }

  get<T = unknown>(key: string): T {
    return this.components.get<T>(key);
  }
}

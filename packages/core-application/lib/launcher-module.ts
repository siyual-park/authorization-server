import Launcher from "./launcher";
import ComponentModule from "./component-module";

export default abstract class LauncherModule<
  T extends Launcher
> extends ComponentModule<T> {
  protected constructor(name = "launcher", dependencies: string[] = []) {
    super(name, dependencies);
  }
}

import Launcher from "./launcher";
import FeatureModule from "./feature-module";

export default abstract class LauncherModule<
  T extends Launcher
> extends FeatureModule<T> {
  protected constructor(name = "launcher") {
    super(name);
  }
}

import Launcher from "./launcher";
import FeatureModule from "./feature-module";

export default abstract class ConfigurationModule<T> extends FeatureModule<T> {
  protected constructor(name: string = "configuration") {
    super(name);
  }
}

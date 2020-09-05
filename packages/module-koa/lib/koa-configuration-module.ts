import { ConfigurationModule } from "app-core";
import KoaConfiguration from "./koa-configuration";

export default abstract class KoaConfigurationModule<
  Configuration extends KoaConfiguration
> extends ConfigurationModule<Configuration> {
  protected constructor(name = "configuration") {
    super(name);
  }
}

import { ConfigurationModule } from "core-application";
import KoaConfiguration from "./koa-configuration";

export default class KoaConfigurationModule<
  Configuration extends KoaConfiguration
> extends ConfigurationModule<Configuration> {
  private configuration?: Configuration;

  constructor(name = "configuration") {
    super(name);
  }

  set(configuration: Configuration): KoaConfigurationModule<Configuration> {
    this.configuration = configuration;

    return this;
  }

  protected install(): Configuration {
    if (this.configuration == null) {
      throw new Error("Configuration is not exist.");
    }
    return this.configuration;
  }
}

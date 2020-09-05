import Koa from "koa";
import { Container, LauncherModule } from "app-core";
import KoaLauncher from "./koa-launcher";
import KoaConfiguration from "./koa-configuration";
import KoaConfigurationModule from "./koa-configuration-module";
import KoaModule from "./koa-module";

export default class KoaLauncherModule<
  Configuration extends KoaConfiguration
> extends LauncherModule<KoaLauncher> {
  private readonly koaModule: KoaModule;

  private readonly configurationModule: KoaConfigurationModule<Configuration>;

  constructor(
    koaModule: KoaModule,
    configurationModule: KoaConfigurationModule<Configuration>
  ) {
    super("koa-launcher");
    this.koaModule = koaModule;
    this.configurationModule = configurationModule;
  }

  dependencies(features: Container) {
    super.dependencies(features);
    this.koaModule.configure(features);
    this.configurationModule.configure(features);
  }

  // eslint-disable-next-line class-methods-use-this
  install(features: Container): KoaLauncher {
    const koa = features.get<Koa>("koa");
    const configuration = features.get<KoaConfiguration>("configuration");

    return new KoaLauncher(koa, configuration);
  }
}

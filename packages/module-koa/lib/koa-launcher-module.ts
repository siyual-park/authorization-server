import Koa from "koa";
import { Container, LauncherModule } from "core-application";
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
    configurationModule: KoaConfigurationModule<Configuration>,
    name = "koa-launcher"
  ) {
    super(name);
    this.koaModule = koaModule;
    this.configurationModule = configurationModule;
  }

  protected dependencies(components: Container): void {
    super.dependencies(components);
    this.koaModule.configure(components);
    this.configurationModule.configure(components);
  }

  // eslint-disable-next-line class-methods-use-this
  protected install(components: Container): KoaLauncher {
    const koa = components.get<Koa>(this.koaModule.name);
    const configuration = components.get<KoaConfiguration>(
      this.configurationModule.name
    );

    return new KoaLauncher(koa, configuration);
  }
}

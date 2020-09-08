import Koa from "koa";
import { Components, Container, LauncherModule } from "core-application";
import { ListenOptions } from "net";
import KoaLauncher from "./koa-launcher";

export default class KoaLauncherModule extends LauncherModule<KoaLauncher> {
  readonly applicationKey: string;

  readonly options: ListenOptions;

  constructor(
    key = "koa-launcher",
    applicationKey: string,
    options: ListenOptions
  ) {
    super(key, [applicationKey]);
    this.applicationKey = applicationKey;
    this.options = options;
  }

  protected install(components: Components): KoaLauncher {
    const application = components.get<Koa>(this.applicationKey);
    return new KoaLauncher(application, this.options);
  }
}

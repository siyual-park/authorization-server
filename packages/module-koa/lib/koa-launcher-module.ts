import Koa from "koa";
import { Container, LauncherModule } from "app-core";
import KoaLauncher from "./koa-launcher";
import KoaConfiguration from "./koa-configuration";

export default class KoaLauncherModule extends LauncherModule<KoaLauncher> {
  constructor() {
    super("koa-launcher");
  }

  // eslint-disable-next-line class-methods-use-this
  install(features: Container): KoaLauncher {
    const koa = features.get<Koa>("koa");
    const configuration = features.get<KoaConfiguration>("configuration");

    return new KoaLauncher(koa, configuration);
  }
}

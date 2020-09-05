import Koa from "packages/module-koa/lib/koa-module";
import { FeatureModule } from "app-core";

export default class KoaModule extends FeatureModule<Koa> {
  constructor() {
    super("koa");
  }

  // eslint-disable-next-line class-methods-use-this
  install(): Koa {
    return new Koa();
  }
}

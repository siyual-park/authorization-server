import Koa from "koa";
import { FeatureModule } from "app-core";

export default abstract class KoaMiddlewareModule<
  StateT,
  CustomT
> extends FeatureModule<Koa.Middleware<StateT, CustomT>[]> {
  protected constructor(name = "koa-middlewares") {
    super(name);
  }
}

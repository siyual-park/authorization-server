import Koa from "koa";
import { Container, FeatureModule } from "app-core";
import KoaMiddlewareModule from "./koa-middleware-module";

export default class KoaModule extends FeatureModule<Koa> {
  private readonly middlewareModule: KoaMiddlewareModule<unknown, unknown>;

  constructor(middlewareModule: KoaMiddlewareModule<unknown, unknown>) {
    super("koa");
    this.middlewareModule = middlewareModule;
  }

  dependencies(features: Container): void {
    super.dependencies(features);
    this.middlewareModule.configure(features);
  }

  // eslint-disable-next-line class-methods-use-this
  install(container: Container): Koa {
    const middlewares = container.get<Koa.Middleware<unknown, unknown>[]>(
      "koa-middlewares"
    );
    const koa = new Koa();
    middlewares.forEach((middleware: Koa.Middleware<unknown, unknown>) =>
      koa.use(middleware)
    );
    return koa;
  }
}

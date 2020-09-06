import Koa from "koa";
import { Container, ComponentModule } from "core-application";
import KoaMiddlewareModule from "./koa-middleware-module";

export default class KoaModule extends ComponentModule<Koa> {
  private readonly middlewareModule: KoaMiddlewareModule<unknown, unknown>;

  constructor(
    middlewareModule: KoaMiddlewareModule<unknown, unknown>,
    name = "koa"
  ) {
    super(name);
    this.middlewareModule = middlewareModule;
  }

  protected dependencies(components: Container): void {
    super.dependencies(components);
    this.middlewareModule.configure(components);
  }

  // eslint-disable-next-line class-methods-use-this
  protected install(components: Container): Koa {
    const pipeline = components.get<Koa.Middleware<unknown, unknown>[]>(
      this.middlewareModule.name
    );

    const koa = new Koa();
    pipeline.forEach((middleware) => koa.use(middleware));
    return koa;
  }
}

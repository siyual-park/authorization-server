import Koa from "koa";
import { ComponentModule } from "core-application";

export default class KoaMiddlewareModule<
  StateT,
  CustomT
> extends ComponentModule<Koa.Middleware<StateT, CustomT>[]> {
  private readonly pipeline: Koa.Middleware<StateT, CustomT>[] = [];

  constructor(name = "koa-middlewares") {
    super(name);
  }

  add(
    middleware: Koa.Middleware<StateT, CustomT>
  ): KoaMiddlewareModule<StateT, CustomT> {
    this.pipeline.push(middleware);

    return this;
  }

  protected install(): Koa.Middleware<StateT, CustomT>[] {
    return this.pipeline;
  }
}

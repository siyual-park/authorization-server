import Koa from "koa";
import { ComponentModule, Components } from "core-application";

export default class KoaApplicationModule extends ComponentModule<Koa> {
  readonly middlewareKey: string;

  constructor(key = "koa", middlewareKey: string) {
    super(key, [middlewareKey]);
    this.middlewareKey = middlewareKey;
  }

  protected install(components: Components): Koa {
    const pipeline = components.get<Koa.Middleware[]>(this.middlewareKey);

    const application = new Koa();
    pipeline.forEach((middleware) => application.use(middleware));
    return application;
  }
}

import Koa, { DefaultContext, DefaultState } from "koa";
import { Components, Module } from "core-application";
import Options from "./options";
import KoaApplicationModule from "./koa-application-module";
import KoaMiddlewareModule from "./koa-middleware-module";
import KoaLauncherModule from "./koa-launcher-module";

export default class KoaModule<StateT = DefaultState, CustomT = DefaultContext>
  implements Module {
  readonly launcherModule: KoaLauncherModule;

  readonly applicationModule: KoaApplicationModule;

  readonly middlewareModule: KoaMiddlewareModule<StateT, CustomT>;

  constructor(options: Options) {
    this.middlewareModule = new KoaMiddlewareModule<StateT, CustomT>(
      options.keys?.middleware
    );
    this.applicationModule = new KoaApplicationModule(
      options.keys?.application,
      this.middlewareModule.key
    );
    this.launcherModule = new KoaLauncherModule(
      options.keys?.launcher,
      this.applicationModule.key,
      options
    );
  }

  use(middleware: Koa.Middleware<StateT, CustomT>): KoaModule<StateT, CustomT> {
    this.middlewareModule.use(middleware);

    return this;
  }

  configure(components: Components): void {
    this.middlewareModule.configure(components);
    this.applicationModule.configure(components);
    this.launcherModule.configure(components);
  }
}

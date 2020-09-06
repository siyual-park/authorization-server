import {
  KoaModule,
  KoaMiddlewareModule,
  KoaConfigurationModule,
  KoaLauncherModule,
} from "module-koa";
import { Application } from "core-application";

const koaMiddlewareModule = new KoaMiddlewareModule();
koaMiddlewareModule.add(({ response }) => {
  response.body = "hello world";
});

const koaModule = new KoaModule(koaMiddlewareModule);

const koaConfigurationModule = new KoaConfigurationModule();
koaConfigurationModule.set({
  port: 3000,
});

const koaLauncherModule = new KoaLauncherModule(
  koaModule,
  koaConfigurationModule,
  "launcher"
);

const application = new Application();
application.install(koaLauncherModule);

application.run();

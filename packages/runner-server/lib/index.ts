import { KoaModule } from "module-koa";
import { Application } from "core-application";

async function main() {
  const koaModule: KoaModule = new KoaModule({
    port: 3000,
    keys: {
      launcher: "launcher",
    },
  });

  koaModule.use(({ response }) => {
    response.body = "hello world";
  });

  const application = new Application();
  application.install(koaModule);

  await application.run();

  console.log(`Server run in port ${koaModule.launcherModule.options.port}`);
}

main().then();

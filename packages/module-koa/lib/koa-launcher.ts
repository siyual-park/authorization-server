import Koa from "koa";
import { Launcher } from "core-application";
import KoaConfiguration from "./koa-configuration";

export default class KoaLauncher implements Launcher {
  private readonly koa: Koa;

  private readonly configuration: KoaConfiguration;

  constructor(koa: Koa, configuration: KoaConfiguration) {
    this.koa = koa;
    this.configuration = configuration;
  }

  launch(): Promise<void> {
    return new Promise<void>((resolve) => {
      this.koa.listen(this.configuration.port, () => {
        resolve();
      });
    });
  }
}

import util from "util";
import Koa from "koa";
import { Launcher } from "app-core";
import KoaConfiguration from "./koa-configuration";

export default class KoaLauncher implements Launcher {
  private readonly koa: Koa;

  private readonly configuration: KoaConfiguration;

  constructor(koa: Koa, configuration: KoaConfiguration) {
    this.koa = koa;
    this.configuration = configuration;
  }

  async launch(): Promise<void> {
    return util.promisify(this.koa.listen)(this.configuration.port);
  }
}

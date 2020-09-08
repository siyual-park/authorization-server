import Koa from "koa";
import { Launcher } from "core-application";
import { ListenOptions } from "net";

export default class KoaLauncher implements Launcher {
  private readonly koa: Koa;

  readonly options: ListenOptions;

  constructor(koa: Koa, options: ListenOptions) {
    this.koa = koa;
    this.options = options;
  }

  launch(): Promise<void> {
    return new Promise<void>((resolve) => {
      this.koa.listen(this.options, () => {
        resolve();
      });
    });
  }
}

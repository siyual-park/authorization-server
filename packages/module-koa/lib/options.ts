import { ListenOptions } from "net";

interface ModuleOptions {
  keys?: {
    launcher?: string;
    application?: string;
    middleware?: string;
  };
}

type Options = ModuleOptions & ListenOptions;

export default Options;

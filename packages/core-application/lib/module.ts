import Container from "./container";

interface Module {
  configure(components: Container): void;
}

export default Module;

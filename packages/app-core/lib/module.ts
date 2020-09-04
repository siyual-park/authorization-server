import Container from "./container";

interface Module {
  build(features: Container): void;
}

export default Module;

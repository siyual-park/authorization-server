import Container from "./container";

interface Module {
  configure(features: Container): void;
}

export default Module;

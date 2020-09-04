import Container from "./container";
import Application from "./application";

describe("application", () => {
  test("resole one", () => {
    let received: string | null = null;

    const launcherModule = {
      configure(features: Container): void {
        features.set("launcher", (container) => {
          const sendMessage = container.get("sendMessage") as (
            message: string
          ) => void;

          return {
            launch(): void {
              sendMessage("test");
            },
          };
        });
      },
    };

    const sendMessageModule = {
      configure(features: Container): void {
        features.set("sendMessage", () => {
          return (message: string) => {
            received = message;
          };
        });
      },
    };

    const application = new Application();
    application.install(launcherModule);
    application.install(sendMessageModule);

    application.run();

    expect(received).toEqual("test");
  });
});

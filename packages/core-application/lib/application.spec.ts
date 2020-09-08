import Application from "./application";
import Components from "./components";

describe("application", () => {
  test("resole one", () => {
    let received: string | null = null;

    const launcherModule = {
      configure(components: Components): void {
        components.set("launcher", () => {
          const sendMessage = components.get("sendMessage") as (
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
      configure(components: Components): void {
        components.set("sendMessage", () => {
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

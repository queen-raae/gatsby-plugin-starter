import { onInitialClientRender } from "./gatsby-browser";

// Lets mock the alert function as it does not exist in a Node environment
// Allows us to check if called correctly by onInitialClientRender
global.alert = jest.fn().mockImplementation(() => {});

describe("onInitialClientRender", () => {
  afterEach(() => {
    // Clean up the mock to start fresh,
    // otherwise toBeCalledTimes would be 3 on the third test below
    jest.clearAllMocks();
  });

  describe("alert is called with the correct string", () => {
    test("invalid options", () => {
      onInitialClientRender(null, {});
      expect(global.alert).toBeCalledTimes(1);
      expect(global.alert).toBeCalledWith("undefined undefined undefined");
    });

    test("pirate options", () => {
      onInitialClientRender(null, {
        message: "A message from the pirates",
        emoji: "pirate",
      });
      expect(global.alert).toBeCalledTimes(1);
      expect(global.alert).toBeCalledWith("🏴‍☠️ A message from the pirates 🏴‍☠️");
    });

    test("princess options", () => {
      onInitialClientRender(null, {
        message: "A message from the princess",
        emoji: "princess",
      });
      expect(global.alert).toBeCalledTimes(1);
      expect(global.alert).toBeCalledWith("👸 A message from the princess 👸");
    });
  });
});

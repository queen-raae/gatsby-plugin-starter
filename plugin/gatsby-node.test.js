import { pluginOptionsSchema } from "./gatsby-node";
import { testPluginOptionsSchema } from "gatsby-plugin-utils";

describe("pluginOptionsSchema", () => {
  describe("message option", () => {
    test("strings are valid", async () => {
      const options = {
        message: "This is a valid message",
      };

      const { isValid } = await testPluginOptionsSchema(
        pluginOptionsSchema,
        options
      );

      expect(isValid).toBe(true);
    });

    test("numbers are invalid", async () => {
      const options = {
        message: 123,
      };

      const { isValid, errors } = await testPluginOptionsSchema(
        pluginOptionsSchema,
        options
      );

      expect(isValid).toBe(false);
      expect(errors).toEqual([`"message" must be a string`]);
    });
  });

  describe("emoji option", () => {
    test("pirate is valid", async () => {
      const options = {
        emoji: "pirate",
      };

      const { isValid } = await testPluginOptionsSchema(
        pluginOptionsSchema,
        options
      );

      expect(isValid).toBe(true);
    });

    test("crown is invalid", async () => {
      const options = {
        emoji: "queen",
      };

      const { isValid, errors } = await testPluginOptionsSchema(
        pluginOptionsSchema,
        options
      );

      expect(isValid).toBe(false);
      expect(errors).toEqual([
        `"emoji" must be one of [crown, pirate, princess]`,
      ]);
    });
  });
});

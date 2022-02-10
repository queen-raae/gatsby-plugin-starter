// https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/

const { EMOJIS } = require("./constants");

const validKeys = Object.keys(EMOJIS);

exports.pluginOptionsSchema = ({ Joi }) => {
  return Joi.object({
    message: Joi.string().default("Hi from the plugin"),
    emoji: Joi.string()
      .valid(...validKeys)
      .default(validKeys[0])
      .description(`Select between the emoji options`),
  });
};

// https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/

const { EMOJIS } = require("./constants");

exports.onInitialClientRender = (_, pluginOptions) => {
  const { message, emoji } = pluginOptions;
  const selectedEmoji = EMOJIS[emoji];

  alert(`${selectedEmoji} ${message} ${selectedEmoji}`);
};

// https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/

exports.pluginOptionsSchema = ({ Joi }) => {
  return Joi.object({
    option1: Joi.string()
      .valid("unicorn", "pirate")
      .default("unicorn")
      .description(`Plugin option 1`),
  });
};

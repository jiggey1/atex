const { RichEmbed } = require("discord.js");

module.exports = {
  name: "say",
  category: "moderation",
  description: "say Command",
  run: async (client, message, args) => {

        message.delete();

        if (!message.member.hasPermission("MANAGE_MESSAGES"))
            return message.reply("You don't have the required permissions to use this command.");

        if (args.length < 0)
            return message.reply("Nothing to say? Then don't use my commands /tableflip ");


        if (args[0].toLowerCase() === "embed") {
            const embed = new RichEmbed()
                .setDescription(args.slice(1).join(" "))
                .setColor(roleColor === "#000000" ? "#ffffff" : roleColor);

            message.channel.send(embed);
        } else {
            message.channel.send(args.join(" "));
        }
    }
}
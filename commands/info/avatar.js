const {Discord, MessageEmbed} = require("discord.js");

module.exports = {
  name: "avatar",
  category: "info",
  description: "avatar Command",
  run: async (client, message, args) => {

    if (message.deletable) {
        message.delete();
    }

    let msg = await message.channel.send("Grabbing avatar from the depths of Discord...").then(m => {m.delete({ timeout: 1500 })});

    let mentionedUser = message.mentions.users.first() || message.author;

        const embed = new MessageEmbed()
        .setImage(mentionedUser.displayAvatarURL())
        .setColor("00ff00")
        .setTitle("Gotcha! Here's The Avatar, Good Sir.")
        .setFooter("Searched by " + message.author.tag)

        message.channel.send(embed)
}}
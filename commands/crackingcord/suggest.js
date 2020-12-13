const { MessageEmbed, MessageFlags } = require("discord.js")
const Discord = require("discord.js");

module.exports = {
    name: "suggest",
    aliases: ["crack", "suggestion", "request"],
    category: "utility",
    description: "Suggest A Crack Command",
    run: async (client, message, args) => {

        if (message.guild.id !== '656987074196406303') {
            message.delete()
            return;
        }

        let channel = message.channel.id === "769356587402919957"

        if(!channel) {
            message.delete()
            return message.reply("Sorry! This command is only allowed in the request channel! Beep Boop.").then(msg => {
                msg.delete({ timeout: 3000 })
              })
        }

        if (!message.guild.member(client.user).hasPermission('ADD_REACTIONS')) return message.reply('Please add the "ADD_REACTIONS" permission, so I can execute this command <3')
        const sayMessage = args.join(" ");

        if (sayMessage.length < 1) return message.channel.send("Didn't provide a suggestion!")
   
      const embed = new MessageEmbed()
       .setColor(0x00A2E8)
       .setTitle("**__New Request!__**")
       .setDescription(`${sayMessage}`)
       .setFooter("Request by " + message.author.username, message.author.avatarURL)
       .setTimestamp()
        message.channel.send(embed).then(message => {
            message.react('✅')
            message.react('❌')
         })
        message.delete( {timeout: 1000} )}
    }
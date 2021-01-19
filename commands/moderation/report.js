const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "report",
  category: "moderation",
  description: "report Command",
  run: async (client, message, args) => {

        if (message.deletable) message.delete();

        let rMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if (!rMember)
            return message.reply("Couldn't find that person?");

        if (rMember.user.bot || rMember.hasPermission("MANAGE_MESSAGES"))
            return message.channel.send("You are unable to report that user. It could be staff, a bot or yourself, either way, you can't report them...");

        if (!args[1])
            return message.channel.send("Please provide a reason for the report");
        
        const channel = message.guild.channels.cache.find(c => c.name === "reports")
            
        if (!channel){
            message.delete()
            return message.channel.send("Sorry, But I've Scanned This Server And There's No #reports Channel! This Means I Could Not Complete Your Report! Mention this to a staff member, then try again! (I deleted your message for privacy)");
        }

        const embed = new MessageEmbed()
            .setColor("#ff0000")
            .setTimestamp()
            .setFooter(message.guild.name, message.guild.iconURL)
            .setAuthor("Reported member", rMember.user.displayAvatarURL)
            .setDescription(`**- Member:** ${rMember} (${rMember.user.id})
            **- Reported by:** ${message.member}
            **- Reported in:** ${message.channel}
            **- Reason:** ${args.slice(1).join(" ")}`);

        return channel.send(embed);
    }
}
const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "botinfo",
    category: "info",
    aliases: ["binfo"],
    description: "Sends Bot Information",
    run: async (client, message, args) => {

            let usersize = client.users.cache.size
            let chansize = client.channels.cache.size
            let uptimxd = client.uptime 
            let servsize = client.guilds.cache.size

            let clientembed = new MessageEmbed()
            .setColor("#00ff00")
            .setThumbnail("https://i.pinimg.com/originals/1a/9a/f1/1a9af177bdcd0bd93568e59bb7600cbe.png")
            .addField("Bot Name", ` ${client.user.username}`, true)
            .addField("Bot Owner", "jiggey#4704", true )
            .addField("Servers", `🛡 ${servsize}`, true)
            .addField("Channels", `📁 ${chansize}`, true)
            .addField("Users", ` ${usersize}`, true)
            .addField("Bot Library", " Discord.js", true)
            .addField("Created On", client.user.createdAt)
            .setFooter(`Information About: ${client.user.username}. Developed By: jiggey#4704`)
            .setTimestamp()
            
            message.channel.send(clientembed);
        
        

    }}
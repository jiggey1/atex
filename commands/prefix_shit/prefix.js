const { MessageEmbed } = require("discord.js")
const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
        name: "prefix",
        category: "prefix_shit",
        description: "Prefix Command",
        run: async (client, message, args) => {

        /*if(!message.member.hasPermission('ADMINISTRATOR')) {
        return message.channel.send("You Do Not Have The Permission: **\"ADMINISTRATOR\"**!");
        }

        if(!args[0]) {
           return message.channel.send("Please Specify A Prefix. ``Correct Usage >prefix {prefix}``");
	}

        if(args[0].length > 3) {
	  return message.channel.send("A Prefix Has To Be 3 Characters Or Less. Sorry!");
	}

        if(args[0] === db.get(`guild_${message.guild.id}_prefix`)) {
	  return message.channel.send("This Is Already Your Prefix.");
	}

        if(args[0] === ">") { 
        db.delete(`guild_${message.guild.id}_prefix`);
	  }
        db.set(`guild_${message.guild.id}_prefix`, args[0])
        return message.channel.send(`The Prefix Has Been Set To ${args[0]}`)
*/
message.delete()
        const disableEmbed = new MessageEmbed()
        .setTitle (":warning: Command Disabled :warning:")
        .setDescription("This command has been disabled until further notice. Once the bot is migrated to my server, this command will be enabled again. If you had previously set a prefix, it has been reset back to ``>``")
        message.channel.send(disableEmbed).then(m => (m.delete({ timeout: 20000 })))
}
}      
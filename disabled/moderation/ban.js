const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { promptMessage } = require("../../functions.js");


module.exports = {
    name: "ban",
    category: "moderation",
    description: "ban Command",
    run: async (client, message, args) => {

        const logChannel = message.guild.channels.cache.find(c => c.name === "logs") || message.channel;

        if (message.deletable) message.delete();

        // No args
        if (!args[0]) {
            return message.reply("Please provide a person to ban (duh).")
                ;
        }

        // No reason
        if (!args[1]) {
            return message.reply("Please provide a reason to ban. Even if it's stupid, just give me somthing to put in the logs. If you wish to skip this, use the >fban command. ")
                ;
        }

        // No author permissions
        if (!message.member.hasPermission("BAN_MEMBERS")) {
            return message.reply("❌ You do not have permissions to ban members, dummy. Please contact a staff member")
                ;
        
        }
        // No bot permissions
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) {
            return message.reply("❌ I do not have permissions to ban members. Please contact a staff member so they can be my one wish...")
                ;
        }

        const toBan = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        // No member found
        if (!toBan) {
            return message.reply("Couldn't find that member, try again!!!!11")
                ;
        }

        // Can't ban urself
        if (toBan.id === message.author.id) {
            return message.reply("You can't ban yourself... idiot")
                ;
        }

        // Check if the user's banable
        if (!toBan.bannable) {
            return message.reply("I can't ban that person due to role hierarchy, ig. dumb reason.")
                ;
        }
        
        const embed = new MessageEmbed()
            .setColor("#ff0000")
            .setThumbnail(toBan.user.displayAvatarURL)
            .setFooter(message.member.displayName, message.author.displayAvatarURL)
            .setTimestamp()
            .setDescription(stripIndents`**- baned member:** ${toBan} (${toBan.id})
            **- baned by:** ${message.member} (${message.member.id})
            **- Reason:** ${args.slice(1).join(" ")}`);

        const promptEmbed = new MessageEmbed()
            .setColor("GREEN")
            .setAuthor(`This verification becomes invalid after 30s. Be quick!`)
            .setDescription(`Do you want to ban ${toBan}?`)

        // Send the message
        await message.channel.send(promptEmbed).then(async msg => {
            // Await the reactions and the reactioncollector
            const emoji = await promptMessage(msg, message.author, 30, ["✅", "❌"]);

            // Verification stuffs
            if (emoji === "✅") {
                msg.delete();

                toBan.ban(args.slice(1).join(" "))
                    .catch(err => {
                        if (err) return message.channel.send(`Well.... the ban didn't work out. Here's the error (don't worry if you don't understand it :P) ${err}`)
                    });

                logChannel.send(embed);
            } else if (emoji === "❌") {
                msg.delete();

                message.reply(`Ban Request Stopped.`)
                    .then(m => m.delete(10000));
            }
        });
    }
};
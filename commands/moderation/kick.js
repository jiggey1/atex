const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { promptMessage } = require("../../functions.js");


module.exports = {
    name: "kick",
    category: "moderation",
    description: "kick Command",
    run: async (client, message, args) => {

        const logChannel = message.guild.channels.cache.find(c => c.name === "logs") || message.channel;

        if (message.deletable) message.delete();

        // No args
        if (!args[0]) {
            return message.reply("Gotta give me a person to kick, otherwise I just don't know what you're waffling about.")
                ;
        }

        // No reason
        if (!args[1]) {
            return message.reply("Please provide me a reason, or use >fkick to skip this $#!t.")
                ;
        }

        // No author permissions
        if (!message.member.hasPermission("KICK_MEMBERS")) {
            return message.reply("❌ You do not have permissions to kick members. Don't try be smart, bucko!")
                ;
        }

        // No bot permissions
        if (!message.guild.me.hasPermission("KICK_MEMBERS")) {
            return message.reply("❌ I do not have permissions to kick members. Please contact a staff member!")
                ;
        }

        const toKick = message.mentions.members.first() || message.guild.members.get(args[0]);

        // No member found
        if (!toKick) {
            return message.reply("Couldn't find that member, please try again.")
                ;
        }

        // Can't kick urself
        if (toKick.id === message.author.id) {
            return message.reply("You can't kick yourself... dumbass")
                ;
        }

        // Check if the user's kickable
        if (!toKick.kickable) {
            return message.reply("I can't kick that person due to role hierarchy, I suppose. F")
                ;
        }
                
        const embed = new MessageEmbed()
            .setColor("#ff0000")
            .setThumbnail(toKick.user.displayAvatarURL)
            .setFooter(message.member.displayName, message.author.displayAvatarURL)
            .setTimestamp()
            .setDescription(stripIndents`**- Kicked member:** ${toKick} (${toKick.id})
            **- Kicked by:** ${message.member} (${message.member.id})
            **- Reason:** ${args.slice(1).join(" ")}`);

        const promptEmbed = new MessageEmbed()
            .setColor("GREEN")
            .setAuthor(`This verification becomes invalid after 30s.`)
            .setDescription(`Do you want to kick ${toKick}?`)

        // Send the message
        await message.channel.send(promptEmbed).then(async msg => {
            // Await the reactions and the reaction collector
            const emoji = await promptMessage(msg, message.author, 30, ["✅", "❌"]);

            // The verification stuffs
            if (emoji === "✅") {
                msg.delete();

                toKick.kick(args.slice(1).join(" "))
                    .catch(err => {
                        if (err) return message.channel.send(`Well.... the kick didn't work out. Here's the error ${err}`)
                    });

                logChannel.send(embed);
            } else if (emoji === "❌") {
                msg.delete();

                message.reply(`Kick Command Stopped.`)
                    .then(m => m.delete(10000));
            }
        });
    }
};
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "unmute",
    category: "moderation",
    description: "Mute Command",
    run: async (client, message, args) => {

    let muted = message.guild.roles.cache.find(role => role.name === 'Muted');
    let tounmute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if (!message.member.hasPermission("MUTE_MEMBERS")) return message.reply(":no_entry_sign: **Error:** You don't have the **Mute Members** permission!");

    if (!args[0]) return message.reply('You must mention someone to unmute them.').catch(console.error);

    if(!muted) { 
        return message.reply(`:no_entry_sign: I cannot unmute that member`).catch(console.error);
    }
    
    tounmute.roles.remove(muted);

    const embed = new MessageEmbed()
    .setColor("0xFF0000")
    .setTimestamp()
    .addField('Action:', 'Unmute')
    .addField('Member:', `${tounmute}`)
    .addField('Moderator:', `${message.author.tag}`)
     message.channel.send(`:hammer: Bippity boppity **UNMUTED**!`)

}}
const ms = require('ms')
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "mute",
    category: "moderation",
    description: "Mute Command",
    run: async (client, message, args) => {

let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

if (!message.member.hasPermission("KICK_MEMBERS")) {
    return message.reply("NO PERMISSIONS! sorry for yelling, people like you make me angry...");
}

if(!tomute) return message.reply("Couldn't find user.");  

if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Can't mute them!");   
let muterole = message.guild.roles.cache.find(muterole => muterole.name === "Muted");  
        if(!muterole){
        try{
            muterole = await message.guild.roles.create({
                data: {
                    name: "Muted",
                    color: "#000000",
                    permissions: [],
                },
            });
            message.guild.channels.cache.forEach(async (channel, id) => {
                await channel.updateOverwrite(muterole, {
                    SEND_MESSAGES: false,
                    SPEAK: false,
                    ADD_REACTIONS: false
                })
            });
        }catch(e){
      console.log(e.stack);
        }}

        let muteTime = args[1];
        if(!muteTime) return message.reply("Please Specify a time.");


        await(tomute.roles.add(muterole));
        const mEmbed = new MessageEmbed()
        .setTitle("Muted")
        .addFields({ name: "Member", value: tomute, inline: false },
        { name: "Time", value: muteTime })
        .setTimestamp()
        .setColor("RED")
        message.channel.send(mEmbed)

        setTimeout(function() {
            tomute.roles.remove(muterole);
            message.channel.send(`<@${tomute.id}> has been unmuted`);
        }, ms(muteTime))

  }}
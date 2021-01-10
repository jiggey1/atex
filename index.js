const { Client, Collection, MessageAttachment, Structures, MessageEmbed } = require("discord.js");
const config = require("./config.json");
const fs = require("fs");
const Canvas = require('canvas');
const path = require('path');
const db = require('quick.db');
const { prefix, token } = require('./config.json');
const { Stream } = require("stream");

const client = new Client({
    disableEveryone: true,
    partials: ["CHANNEL", "MESSAGE", "REACTION"]
});

client.commands = new Collection();
client.aliases = new Collection();

["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.on("ready", async (message, member) => {
    client.user.setPresence({ activity: { name: '(>help) | v1.2', status: 'away' }});
    console.log(`Atex Is Now Online And Working For ${client.guilds.cache.size} Servers. Below Are Logs and Errors: `);
          
    //This is now the code for member count on Crackingcord
              let myGuild = client.guilds.cache.get('656987074196406303');
              let memberCount = myGuild.memberCount;
              let memberCountChannnel  = myGuild.channels.cache.get('756937546688364605');
              memberCountChannnel.setName('Members: ' + memberCount)
              .catch(error => console.log(error));

})

client.on('messageDelete', async (message) => {
  db.set(`snipemsg_${message.channel.id}`, message.content)
  db.set(`snipesender_${message.channel.id}`, message.author.id)
})

    client.on('guildMemberAdd', async member => {

      const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome');
      if (!channel) return;
      
      const canvas = Canvas.createCanvas(700, 250);
      const ctx = canvas.getContext('2d');
    
      const background = await Canvas.loadImage('./wallpaper.jpg');
      ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    
      ctx.strokeStyle = '#74037b';
      ctx.strokeRect(0, 0, canvas.width, canvas.height);
    
      // resized the text above the users name
      ctx.font = '26px Sans';
      ctx.fillStyle = '#ffffff';
      ctx.fillText('Welcome to the server,', canvas.width / 3.2, canvas.height / 3.5);
    
      // pass canvas width and resize so name will fit inside of the image.
      const applyText = (canvas, text) => {
        const ctx = canvas.getContext('2d');

      // base size for the font
        let fontSize = 60;

        do {
            // assign the font (Sans only one i tested)
            ctx.font = `${fontSize -= 8}px Sans`;
            // resize (dont change)
          } while (ctx.measureText(text).width > canvas.width - 300);

        // return to nnormal canvas size (resize)
        return ctx.font;
    };
      
      ctx.font = applyText(canvas, `${member.displayName}!`);
      ctx.fillStyle = '#ffffff';
      ctx.fillText(`${member.displayName}!`, canvas.width / 2.9, canvas.height / 1.8);
      
      ctx.beginPath();
      ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.clip();
    
      const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
      ctx.drawImage(avatar, 25, 25, 200, 200);
    
      const attachment = new MessageAttachment(canvas.toBuffer(), 'welcome-image.png');

      member.roles.add(member.guild.roles.cache.find(role => role.name == "Member"), "auto added.");
    
      channel.send(`${member} just joined the server. Welcome!`, attachment);

                //This is now the code for member count on Crackingcord
                let myGuild = client.guilds.cache.get('656987074196406303');
                let memberCount = myGuild.memberCount;
                let memberCountChannnel  = myGuild.channels.cache.get('756937546688364605');
                memberCountChannnel.setName('Members: ' + memberCount)
                .catch(error => console.log(error));

    });

    client.on('guildMemberRemove', member => {
        
      //This is now the code for member count on Crackingcord
      let myGuild = client.guilds.cache.get('656987074196406303');
      let memberCount = myGuild.memberCount;
      let memberCountChannnel  = myGuild.channels.cache.get('756937546688364605');
      memberCountChannnel.setName('Members: ' + memberCount)
      .catch(error => console.log(error));

  });


client.on("message", async message => {
  const prefix = db.get(`guild_${message.guild.id}_prefix`) || ">";
    
    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.substring(prefix.length).split(" ")
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    
    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    if (command) 
        command.run(client, message, args);
    
      });

client.login(config.token);
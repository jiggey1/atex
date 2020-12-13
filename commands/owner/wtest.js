const Discord = require('discord.js');
const { MessageAttachment } = require("discord.js");
const fs = require("fs");
const Canvas = require('canvas');
const path = require('path');

module.exports = {
    name: "wtest",
    category: "owner",
    description: "Welcome Message Test",
    run: async (client, message, args) => {

if (!message.author.id === '350692507199209494') {
    return message.channel.send("This command is only accessible to my owner, jiggey#4704. **__Please Don't Try To Use This. It's just embarrassing__**")
}

let member = message.member

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

channel.send(`${member} just joined the server. Welcome!`, attachment).then(m => {m.delete({ timeout : 10000 })});

}}
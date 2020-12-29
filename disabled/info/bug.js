const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "bugreport",
    category: "info",
    description: "Sends A Bug Report",
    run: async (client, message, args) => {


let bug = args.join(" ").slice(0);
let user = message.author.tag;
let guild = message.guild.name;
let channel = client.channels.cache.get("787785834791174174")

if(!args[0]) {
    const errorEmbed = new MessageEmbed()
    .setTitle("Syntax Error!")
    .setDescription("Correct Usage : >bugreport {Bug Goes Here. Explain in detail.}")
    return message.channel.send(errorEmbed).then(m => {m.delete ({ timeout: 5000})})
}

let embed = new MessageEmbed()
.setTitle("Bug Report")
.setThumbnail("https://img.discogs.com/HExAQOyMDLeKYhxzFmPSyBc66sI=/432x432/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-5572032-1493531546-1963.jpeg.jpg")
.addField("Bug", bug)
.addField("Reported By", user)
.addField("Reported in", guild)
.setColor("#f49542")

message.channel.send("**| Your bug has been reported to Atex's developers. It will be reviewed, and hopefully resolved soon. Please be patient. We thank you for improving Atex. |**").then(m => {m.delete({ timeout: 5000})})
channel.send(embed).then(i => i.react("⏳"))

  
}}
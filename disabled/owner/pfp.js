
module.exports = {
    name: "pfp",
    category: "owner",
    description: "Change PFP Command",
    run: async (client, message, args) => {

if (!message.author.id === '350692507199209494') {
    return message.channel.send("This command is only accessible to my owner, jiggey#4704. **__Please Don't Try To Use This. It's just embarrassing__**")
}

if(!args[0]) {
    return message.channel.send("No Link Presented :(")
}

client.user.setAvatar(`${args[0]}`);
message.channel.send("Thanks For The New Pic, Bossman")

}}
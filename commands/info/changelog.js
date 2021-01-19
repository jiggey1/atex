const { MessageEmbed} = require('discord.js')

module.exports = {
    name: "changes",
    category: "info",
    aliases: ["changes"],
    description: "Help Command",
    run: async (client, message, args) => {

        const embed = new MessageEmbed()
        .setTitle("Changelog | Current Version: 1.2")
        .setColor('DARK_PURPLE')
        .addField("v1.2: ", "- The bot has been completely re-coded. This will now give me room to add more games, add stabability to the current games and also add more features in the future.\n- Added The Hangman Game (``>hangman``)\n- Added The Akinator Game (``>akinator``)\n- Added Guess The Pokemon (``>pokemon``)")
        .addField("Smaller Changes:", "- Games have been disabled due to bugs breaking them.\n- Added more packages to the bot and also improved some message response times.\n- Changed some responses so the message is automatically deleted after X seconds.\n- Changed some of the bots \"language\" so it will respond with some jokey, sarcastic and playful responses.\n- Added and removed some command aliases, to make them easier to understand.\n -Changed the 'janitor' commands success message.\n- Fixed typo's, bugs, console errors on my end, removed unused packages, other small things too.\n- Changed some of the command descriptions in `>help`\n- Disabled Some Information Commands.")
        .setFooter("Atex | v1.2 | jiggey#4704")
        message.channel.send(embed)

    }}
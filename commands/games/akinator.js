const { AkiGame } = require("djs-aki");

module.exports = {
    name: "akinator",
    category: "games",
    description: "Akinattor Game",
    run: async (client, message, args) => {

new AkiGame(message)
.setLanguage("en")
.setTime(60000 * 6)
.on("end", game => console.log(`${game.message.author.tag} is ${game.win ? "winner" : "loser"}.`))
.on("start", game => console.log(`${game.message.author.tag} started a game.`))
.run(); 
}}
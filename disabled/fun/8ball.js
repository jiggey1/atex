module.exports = {
    name: "8ball",
    category: "fun",
    description: "The holy 8ball",
    run: async (client, message, args) => {

let answers = [
    //Postive
    "this is it chief", "can i get an amen", "OwO, YEZZIR", "UwU, Yerp", "Indede, it is so", "yeet", "yes", `YES!!`, "that's absolutely correct",
    "i agree", "heeyy we have something in common", "Yeah, why not", "Only if you say please",

    //Maybe??
    "ask canny", "i guess??", "with the way things are, who knows", "¯\\_(ツ)_/¯", "not enough info", "i don't want to answer that", `how would i know that huh`,
    "you might wanna reconsider your life choices", "how about you watch anime instead", "Maybe", "if you pray hard enough",

    //Negative
    "this is not it chief", "that's a no from me chief", "leave me alone, i'm tired", "i got some words for you pal, GO AWAY :( im currently sulking.", `u serious`,
    "how about you shut up", "simply put, no", "not gonna happen", "i dont think so", "ask again in 5 minutes",
];

let answer = answers[Math.floor(Math.random() * answers.length)];

if (args[0]) {
    message.channel.send(answer);
} else {
    message.delete()
    message.reply("Give me a question first, dumbo!").then(m => {m.delete({timeout: 5000})});
}
}
}
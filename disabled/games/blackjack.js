var draw1;
var draw2;
var players = [];
var credits = [];
var cardNums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"];
var royals = ["Jack", "Queen", "King"];
var card3 = Math.floor(Math.random() * 13);
var game = false;
var total = 0;
var c3f = ["10", "Jack", "Queen", "King"];

module.exports = {
    name: "blackjack",
    category: "games",
    description: "BJ :D",
    run: async (client, message, args) => {

if(!args[0]) {
message.channel.send("Starting new game...");
if (!players.includes(message.author.id)) {
    players.push(message.author.id);
    credits.push(200);
}
credits[players.indexOf(message.author.id)] -= 50;
draw1 = Math.floor(Math.random() * 13);
draw2 = Math.floor(Math.random() * 13);
if (draw1 > 10) {}
game = true;
total = 0;
message.channel.send("--Commands--\n>blackjack hit - draws new card to add to total\n>blackjack stand - keeps current cards for final amount.\n**This Is A BETA Command.**");

if (draw1 > 9 && draw2 > 9) {
    if (draw2 = 10) {
        total = 1 + draw1 + draw2;
    } else if (draw = 11) {
        total = draw1 + draw2;
    } else {
        total = draw1 + draw2 - 1;
    }
    if (draw2 = 10) {
        total += 1;
    } else {
        total -= 1;
    }
    message.channel.send("You pulled a " + royals[(draw2) - 10] + " and a " + royals[(draw1) - 10] + " for a total of 20");

} else if (draw1 > 9) {
    if (draw1 = 10) {
        total = 1 + draw1 + draw2;
    } else if (draw1 = 11) {
        total = draw1 + draw2;
    } else {
        total = draw1 + draw2 - 1
    }
    message.channel.send("You pulled a " + cardNums[draw2] + " and a " + royals[(draw1) - 10] + " for a total of " + total);

} else if (draw2 > 9) {
    if (draw2 = 10) {
        total = 1 + draw1 + draw2;
    } else if (draw2 = 11) {
        total = draw1 + draw2;
    } else {
        total = draw1 + draw2 - 1
    }
    message.channel.send("You pulled a " + royals[(draw2) - 10] + " and a " + cardNums[draw1] + " for a total of " + total);

} else {
    total = 2 + draw1 + draw2;
    message.channel.send("You pulled a " + cardNums[draw2] + " and a " + cardNums[draw1] + " for a total of " + total);
}

    }

if(args[0] === "hit") {
card3 = Math.floor(Math.random() * 13);
if (card3 >= 10) {
    card3 = 10;
    c3f[Math.floor(Math.random() * 3)];
    message.channel.send("You pulled a " + c3f[Math.floor(Math.random() * 3)] + " and had " + total);
    total += card3;
} else {
    message.channel.send("You pulled a " + cardNums[card3] + " and had a total of " + total);
    total = total + 1 + card3
}
message.channel.send("Your new Total is " + total);
if (total > 21) {
    message.channel.send("Bust!");
    game = false;
}}

if(args[0] === "stand") {
var dealerTotal = Math.floor(Math.random() * 6) + 17;
message.channel.send("You stood at a final total of " + total);
message.channel.send("The dealer stood with a total of " + dealerTotal);
if (total <= dealerTotal && dealerTotal <= 21) {
    message.channel.send("You Lose");
} else {
    message.channel.send("You Win!");
    credits[players.indexOf(message.author.id)] += 100;
}
game = false;
}



}}

const { Client, MessageEmbed } = require('discord.js')
const { Menu } = require('discord.js-menu');

module.exports = {
    name: "help",
    category: "info",
    description: "Help Command",
    run: async (client, message, args) => {

        let helpMenu = new Menu(message.channel, message.author.id, [
        {
            name: 'pg1',
            content: new MessageEmbed({
                title: 'Help menu',
                color: 'RANDOM',
                description: 'This Lists Everything The Bot Has To Offer! (If you changed the prefix, use that instead of \'>\'',
            fields: [
                {
                    name: ">help",
                    value: "Shows This Helpful(ish) Menu!"
                },
                {
                    name: ">prefix :warning: **__DISABLED__**",
                    value: "Change the prefix of the bot, to whatever you want!"
                },
                {
                    name: ">botinfo",
                    value: "This shows the bots statistics!"
                },
                {
                    name: ">serverinfo",
                    value: "Shows the current servers statistics!"
                },
                {
                    name: ">bugreport",
                    value: "Use this command, if you experience a bug, or an issue with my bot. It is sent directly to me (jig) to investigate."
                },
                {
                    name: ">snipe",
                    value: "Scopes out the last deleted message, and shoots it right back to where the command was executed from."
                }
            ]
            }),
            reactions: {
                '⏹': 'delete',
                '▶': 'next'
            }
        },
        {
            name: 'pg2',
            content: new MessageEmbed({
                title: 'Help menu',
                color: 'RANDOM',
                description: 'This Lists Everything The Bot Has To Offer! (If you changed the prefix, use that instead of \'>\'',
            fields: [
                {
                    name: ">ban @[user] [Reason]",
                    value: "This will ban a user you tag, please provide a reason!"
                },
                {
                    name: ">kick @[user] [Reason]",
                    value: "This will kick a user you tag. Make sure to provide a reason!"
                },
                {
                    name: ">fban",
                    value: "Force Ban Command. This doesn't require a reason, and executes the ban instantly!"
                },
                {
                    name: ">fkick",
                    value: "Force Kick Command. This doesn'y require a reason, and executes the kick instantly!"
                },
                {
                    name: ">mute",
                    value: "Mutes the member you tag."
                },
                {
                    name: ">unmute",
                    value: "This unmutes the tagged member."
                },
                {
                    name: ">janitor / >purge / >nuke",
                    value: "Will nuke up to 100 messages (if less than 14 days old, blame Discord, not me <3)"
                }
            ]
            }),
            reactions: {
                '⏹': 'delete',
                '◀': 'previous'
            }
        },
        {
            name: 'pg3',
            content: new MessageEmbed({
                title: 'Help menu',
                color: 'RANDOM',
                description: 'This Lists Everything The Bot Has To Offer! (If you changed the prefix, use that instead of \'>\'',
            fields: [
                {
                    name: ">tictactoe",
                    value: "Play A Game Of TicTacToe With A Friend :D"
                },
                {
                name: ">meme",
                    value: "Pulls a completely random meme from r/dankmemes!"
                }
            ]
            }),
            reactions: {
                '⏹': 'delete',
                '▶': 'next'
            }
        }
    ], 450000)
    helpMenu.start()


}}
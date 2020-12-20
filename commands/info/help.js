const { id } = require('common-tags');
const { Client, MessageEmbed, Message } = require('discord.js')

module.exports = {
    name: "help",
    category: "info",
    description: "Help Command",
    run: async (client, message, args) => {

        if(!args[0]) {
            const pageOne = new MessageEmbed()
            .setTitle("Help Menu!")
            .setDescription("**Please Choose From One Of The Following:**")
            .addField("``>help fun``", "This displays the \"Fun\" commands.")
            .addField("``>help info``", `This displays the "Information" commands.`)
            .addField("``>help moderation``", "This shows staff only commands.")
            .setFooter("Remember to replace '>' for you custom prefix, if you have chosen one. | Atex")
            return message.channel.send(pageOne)
        }

        if(args[0] == "fun") {
            const funPage = new MessageEmbed()
            .setTitle("Fun Commands")
            .addField("``>meme``", "Chooses a completely random post from r/dankmemes")
            .addField("``>tictactoe``", "Play TicTacToe with a friend!")
            .setFooter("More Commands Coming Soon, I Promise | Atex")
            return message.channel.send(funPage)
        }

        if(args[0] == "info") {
            const infoPage = new MessageEmbed()
            .setTitle("Information Commands")
            .addField("``>avatar @user``", "This will grab anyones avatar, and send it to the chat!")
            .addField("``>botinfo``", "This displays the bots information.")
            .addField("``>bugreport (Bug Goes Here)``", "This command sends your bug directly to me.")
            .addField("``>help``", "Sends The Help Menu!")
            .addField("``>changelog``", "This will log every change made to the bot, on new versions.")
            .addField("``>invite``", "Sends a link to invite me to your own server (Temporarily)")
            .addField("``>serverinfo``", "This sends current server information.")
            .addField("``>snipe``", "Grabs the latest deleted message from the server, and send it again.")
            .setFooter("Atex by jiggey#4704")
            return message.channel.send(infoPage)
        }

        if(args[0] == "moderation") {
            const modPage = new MessageEmbed()
            .setTitle("Moderation Commands")
            .addField("``>ban @user {reason}``", "Bans the desired user.")
            .addField("``>fban @user``", "This removes the requirement of a reason, and doesnt ask for verification.")
            .addField("``>kick @user {reason}``", "This will kick a user, requires a reason")
            .addField("``>fkick @user``", "This will kick a user, doesn't require a reason, or verification.")
            .addField("``>janitor (numb.)`` / ``>nuke (numb.)`` / ``>purge (numb.)`` ", "Will remove upto 100 messages in one go, if were sent within 14 days (blame Discord, not me)")
            .addField("``>mute @user``", "This prevents the member from sending messages in any channel, and talking in VC's.")
            .addField("``>unmute @user``", "This removes the 'Mutes' role that is given to members, when the '>mute' command is used.")
            .setFooter("Atex by jiggey#4704")
            return message.channel.send(modPage)
        }


    }}

        /*        let helpMenu = new Menu(message.channel, message.author.id, [
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
                '▶': 'next',
                '⏩': 'last'
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
                '◀': 'previous',
                '▶': 'next'
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
                '⏪': 'first',
                '◀': 'previous'
            }
        }
    ], 450000)
    helpMenu.start()


}}*/
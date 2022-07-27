const {getCooldown, addCooldown} = require('../database.js') //relative path to the database.js file
const Discord = require('discord.js');
const { unbemote } = require('../config.json');
function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }
module.exports = {
    name: 'nitro',
    description: 'Open a nitro box and win a prize',
    async execute(message) {
        if(!message.member.roles.cache.has("724388249803554890")) return message.channel.send("Sorry you need to be a server booster to run this command")
        var cooldown = getCooldown("nitro", message.guild.id, message.author.id);
        if(cooldown != null){
            //There is still a cooldown, tell the user something
            //The cooldown variable is the date when the cooldown ends
            const cooldown = new Discord.MessageEmbed()
			.setColor('#00bfff')
			.setDescription(`Sorry you still have a cooldown`)
			.setTimestamp()
			.setFooter('Reply by ReubenDollmanYT#4106', 'https://images-ext-1.discordapp.net/external/vNk-U4RsiwjXTLQNe9KnTYmQ_B69E4XEyA9bOUgrxRg/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/781305692371157034/06e0739ec3da06c65e2022359317ddf3.png' );
			message.channel.send({ embeds: [cooldown], reply: {
    messageReference: message,
    failIfNotExists: false
}, allowedMentions: {
    repliedUser: false
} });
            return;
        }
        const payout = random(200,400);
        await message.client.unb.editUserBalance(message.guild.id, message.author.id, {cash:payout}, "For Boosting the server")
        addCooldown("nitro", message.guild.id, message.author.id, 48 * 3600);
        const nitro = new Discord.MessageEmbed()
        .setColor('#93bfe6')
        .setDescription(`Thanks for being a awesome server Booster here's ${payout} ${unbemote}`)
        .setTimestamp()
		.setFooter('Reply by ReubenDollmanYT#4106', 'https://images-ext-1.discordapp.net/external/vNk-U4RsiwjXTLQNe9KnTYmQ_B69E4XEyA9bOUgrxRg/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/781305692371157034/06e0739ec3da06c65e2022359317ddf3.png' );
        message.channel.send({ embeds: [nitro], reply: {
    messageReference: message,
    failIfNotExists: false
}, allowedMentions: {
    repliedUser: false
} });
    },
}; 
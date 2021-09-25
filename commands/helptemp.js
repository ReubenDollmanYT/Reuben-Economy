const {getCooldown, addCooldown} = require('../database.js') //relative path to the database.js file
const Discord = require('discord.js');
function random(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
	}
module.exports = {
	name: 'help',
	description: 'Tempoary',
	async execute(message) {
		const info = new Discord.MessageEmbed()
        .setColor('#00bfff')
        .setTitle('Help')
        .setDescription(`Bot's Current Commands`)
        .addFields(
            { name: '`re!ping`', value: 'Displays the bots Ping', inline: true },
            { name: 're!help', value: 'Displays this', inline: true },
        )
        message.channel.send({ embeds: [info] });
        const unb = new Discord.MessageEmbed()
        .setColor('#00bfff')
        .setDescription(`Unb giveing Commands`)
        .addFields(
            { name: '`re!books`', value: 'Ever 12H', inline: true },
            { name: '`re!code`', value: 'Ever 12H', inline: true },
            { name: '`re!daily`', value: 'Ever 24H', inline: true },
            { name: '`re!hourly`', value: 'Ever 1H', inline: true },
            { name: '`re!ally`', value: 'Ever 24H', inline: true },
            { name: '`re!partner`', value: 'Ever 24H', inline: true },
            { name: '`re!staffpay`', value: 'Ever 24H', inline: true },
        )
		.setTimestamp()
		.setFooter('Prefix is `re!`' );
        message.channel.send({ embeds: [unb] });
	},
};
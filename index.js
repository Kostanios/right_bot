const express = require('express');
const Discord = require('discord.js');

const client = new Discord.Client();
const PORT = process.env.PORT || 3000;

const token = require('./static/token.js');

const app = express();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
    if (message.content === '!ping') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('Pong.');
    }
	console.log(message.content);
});

client.login(`${token}`);

async function start() {
    try{
        app.listen(PORT, ()=> {});
    }
    catch(e) {
        console.log(e);
    }
}
start();
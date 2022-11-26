import { TextChannel } from "discord.js";
import { ICommand } from "wokcommands";

export default {
category :'configuration' ,
description :'Sends a mesage!', 
slash:"both", 
minArgs:2,
expectedArgs:'<channel> <text>',
expectedArgsTypes:['CHANNEL', 'STRING'],
testOnly:true,
guildOnly:true, // not within dms
callback :async({message,interaction,args})=>{
    const channel =  (message ? message.mentions.channels.first() : interaction.options.getChannel('channel') )as TextChannel
    if(!channel || channel.type!== 'GUILD_TEXT'){
        return 'Please mention a text channel'
    }
args.shift()
const text = args.join(' ')
 await channel.send(text)
if(interaction){
    interaction.reply({
        content:`sent a message in ${channel}`,
        ephemeral:true
    })
}
    },

} as ICommand 
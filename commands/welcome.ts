import DiscordJS from 'discord.js'
import { AggregationCursor, Schema } from 'mongoose';
import { ICommand } from "wokcommands";
import schema from '../models/welcome-schema'
export default {
    category:'testting',
    description:'sets up welcome',
    permissions:['ADMINISTRATOR'],
 minArgs:2,
 expectedArgs:'<channel><Text>',
 options:[
     {
         name:'channel',
         description:'Welcome channel',
         required:true,
         type:DiscordJS.Constants.ApplicationCommandOptionTypes.CHANNEL
     },{
         name:'text',
         description:'Trget text',
         required:true,
         type:DiscordJS.Constants.ApplicationCommandOptionTypes.STRING
     }
 ],
 slash:"both",
 testOnly:true,

callback:async({message,interaction,guild,args})=>{
    if(!guild){
return 'Please use this command within a server'
    }
const target =  message ? message.mentions.channels.first() : interaction.options.getChannel('channel')
if(!target || target.type !== 'GUILD_TEXT'){
    return 'please enter a text channel'
}
let text = interaction?.options.getString('text')
if(message){
args.shift()
text = args.join(" ")
}
await schema.findOneAndUpdate({
    _id:guild.id
},{
    _id:guild.id,
    text,
    channelID:target.id
},{upsert:true})
return 'you are all set'
}



} as ICommand
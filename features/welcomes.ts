import { Channel, Client, MessageEmbed, TextChannel } from "discord.js";
import { Schema } from "mongoose";
import schema from  '../models/welcome-schema'
// accesss to text,chsnnel,guild id storing in local memory
const welcomeData ={} as {
    // guild id: Channel,message
    [key:string] : [TextChannel,string]
}
export default (client:Client) =>{
    client.on('guildMemberAdd' , async member =>{
const {guild,id} = member

let data = welcomeData[guild.id] //fetch data from local memory
// data not in lcal memory then fetch it from db
if(!data){
const results = await schema.findById(guild.id)
if(!results){
    return //no welcome figured for this channel
}
const {channelID ,text} = results
const channel = guild.channels.cache.get(channelID) as TextChannel
data = welcomeData[guild.id] = [channel,text] //fetch data from local memory

}
const embed = new MessageEmbed()
.setImage("https://images.ctfassets.net/hrltx12pl8hq/4plHDVeTkWuFMihxQnzBSb/aea2f06d675c3d710d095306e377382f/shutterstock_554314555_copy.jpg")
data[0].send({
    content:data[1].replace(/@/g, `<@${id}>`),
    allowedMentions:{
        
    },
    files:[
  "https://images.ctfassets.net/hrltx12pl8hq/4plHDVeTkWuFMihxQnzBSb/aea2f06d675c3d710d095306e377382f/shutterstock_554314555_copy.jpg"
       
    ]
   
})
    })
}
export const config = {
    displayName :'Welcome Channel',
    dbName:'Welcome_Channel'
}
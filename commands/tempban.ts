import{ User } from 'discord.js'
import { ICommand } from "wokcommands";
import pschema from '../models/punish-schema'
export default {
category:'moderation',
description:'bans temporarily',
permissions:['ADMINISTRATOR'],
minArgs:3, //args = string array of arguments
expectedArgs:'<user> <duration> <reason>',
expectedArgsTypes:['USER', 'STRING', 'STRING'], //in slash we can mention
slash:'both',
testOnly:true,
callback:async({member:staff,interaction,args,guild,message,client})=>{
if(!guild){
    return 'You can use this only in a server'
}
let userId =args.shift()! //removes user and then return it
const duration = args.shift()!
const reason = args.join(' ')
let user: User | undefined
if(message){
user  = message.mentions.users?.first()
}
else{
    user  =  interaction.options.getUser('user') as User
}
if(!user){
    userId = userId.replace(/[<@!>]/g, '')
    user = await client.users.fetch(userId).catch(() => undefined)
    console.log(user)
    if(!user){
        return `Could not find the user with ID ${userId}`
    }
}
userId = user.id
let time 
let type
try {
    const split = duration.match(/\d+|\D+/g)
    time = parseInt(split![0])
    type = split![1].toLowerCase()
} catch (e) {
    return `Invalid time format! Example format: \"10d\" where 'd' = days' , h = 'hours' and 'm' = minutes.`
}
if(type === "h"){
    time *=60
}
else if(type === "d"){
    time *=60*24
}
else if(type !== "m"){
   return 'Please use "m","h","d" for minutes,hours and days respectively'
}
const expires = new Date()
expires.setMinutes(expires.getMinutes()+time)
const result = await pschema.findOne({
    guildId : guild.id,
    userId,
    type:'ban'
})
if(result){
  return  `<@${userId}> is already banned in this server.`
}
try{
    await guild.members.ban(userId,{days:7,reason}) //messages to delete
    
    await new pschema({
        userId,
        guildId : guild.id,
        staffId:staff.id,
        reason,
        expires,
        type:'ban'
    }).save()
}
catch(ignored){
return `Can not ban <@${userId}>`
}

 return   `<@${userId}> has been banned for "${duration}"`
}
} as ICommand
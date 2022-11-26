import { ICommand } from "wokcommands";

export default {
category :'moderation' ,
description :'Deletes messages', 
permissions:['ADMINISTRATOR'],
slash:"both", 
testOnly:true,
guildOnly:true,
// minArgs:1,
maxArgs:1, // optional arg if set min arg then it will be vital
expectedArgs:'[amount]',
callback :async({message,interaction,args,channel})=>{
 const amount = args.length?parseInt(args.shift()!) :10 //if the option is optional and not entered deletes 10 msgs
//  const amount = args.length?parseInt('args.shift()') :10 //if the option is optional and not entered deletes 10 msgs
if(message){
    await message.delete() //deletes the command message
} 
const {size} =await  channel.bulkDelete(amount,true) //doesnt delete messages older thsn 2weeks
 const reply = `Deleted ${size} message(s).`
 if(interaction){
     return reply
 }
 channel.send(reply)
},

} as ICommand 
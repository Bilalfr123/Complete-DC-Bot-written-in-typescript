// import { GuildMember, MessageActionRow, MessageButton } from "discord.js";
// import { ICommand } from "wokcommands";

// export default {
//     category:'TESTING',
//     description:"kicks a member",
//     requireRoles:true,
//     slash:"both",
//     testOnly:true,
//     guildOnly:true,
//     minArgs:2,
//     expectedArgs:'<user> <reason>',
//     expectedArgsTypes:['USER','STRING'],
//     callback:({message,interaction,args,channel})=>{
//         const target =  message ? message.mentions.members?.first() : interaction.options.getMember('user') as GuildMember
//         if(!target){
//             return 'Please mention someone'
//         }
//         if(!target.kickable){
// return {
//     custom:true,
//     content: 'cant kick this member',
//     ephemeral:true
   
// }
//         }
//         args.shift()
//         const reason =   args.join(' ')
//         target.kick(reason)
    
//         return{
//             custom:true,
//             content:`Successfully kicked <@${target.id}>`,
//             ephemeral:true,
//         }
     
//     }
// } as ICommand

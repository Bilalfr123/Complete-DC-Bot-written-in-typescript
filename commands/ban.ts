import { GuildMember } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category:'TESTING',
    description:"ban a member",
    requireRoles:true,
    slash:"both",
    testOnly:true,
    guildOnly:true,
    minArgs:2,
    expectedArgs:'<user> <reason>',
    expectedArgsTypes:['USER','STRING'],
    callback:({message,interaction,args})=>{
        const target =  message ? message.mentions.members?.first() : interaction.options.getMember('user') as GuildMember
        if(!target){
            return 'Please mention someone'
        }
        if(!target.bannable){
return {
    custom:true,
    content: 'cant ban this member',
    ephemeral:true
   
}
        }
        args.shift()
        const reason =   args.join(' ')
        target.ban({
            reason,
            days:0
        })
        return{
            custom:true,
            content:`Successfully baned <@${target.id}>`,
            ephemeral:true
        }
    }
} as ICommand

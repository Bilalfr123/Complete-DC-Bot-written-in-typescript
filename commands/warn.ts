import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";
import warnSchema from '../models/warn-schema'
export default {
    category:'Moderation',
    description:'Adds a warning',
    permissions:['ADMINISTRATOR'],
    slash:true,
    testOnly:true,
    options:[{
        name:'add',
        description:'Adds warning to a user',
        type:"SUB_COMMAND",
        options:[
            {
                name:'user',
                description:'The user to add the warning to',
                type:"USER",
                required:true
            },
            {
                name:'reason',
                description:'The reason for warning',
                type:"STRING",
                required:true
            },
        ]
        
    },{
        name:'remove',
        description:'removes warning to a user',
        type:"SUB_COMMAND",
        options:[
            {
                name:'user',
                description:'The user to remove the warning from',
                type:"USER",
                required:true
            },
            {
                name:'id',
                description:'The Id of warning to be removed',
                type:"STRING",
                required:true
            },
        ]
        
    },{
        name:'list',
        description:'Lists the warning of a user',
        type:"SUB_COMMAND",
        options:[
            {
                name:'user',
                description:'The user to list the warning for',
                type:"USER",
                required:true
            }
        ]
        
    },  
],
callback:async({guild,member:staff,interaction,client})=>{
const subCommand =interaction.options.getSubcommand() //when command ran first subcommand appears then ,other
const user  =  interaction.options.getUser('user')
const reason  =  interaction.options.getString('reason')
const id  =  interaction.options.getString('id')
if(subCommand === 'add'){
    const warning = await warnSchema.create({
        userId :user?.id,
        staffId:staff.id,
        guildId:guild?.id,
        reason,
    })
    return{
        custom:true,
        content:`Added warning ${warning.id} to <@${user?.id}>`,
        allowedMentions:{
            user:[]
        }
    }
}
else if(subCommand === 'remove'){
    const warning = await warnSchema.findByIdAndDelete(id).catch(() => null)
    if(!warning){
        return 'please enter valid warning id'
    }
    return{
        custom:true,
        content:`Removed warning ${warning.id} from <@${user?.id}`,
        allowedMention:{
            user:[]
        }
      
    }
    
}
else if(subCommand === 'list'){
    const warnings = await warnSchema.find({
        userId :user?.id,
        guildId:guild?.id,
    })
    let description = `The warnings for <@${user?.id} are :\n\n`
    for(const warn of warnings){
description += `**ID:** ${warn._id}\n`
description +=`**DATE:** ${warn.createdAt.toLocaleString()}\n`
description += `**  Reason:** ${warn.reason}\n`
description += `**Staff:** ${warn.staffId}\n\n`
    }
  
    const embed = new MessageEmbed().setDescription(description)
    return embed
}
}
} as ICommand
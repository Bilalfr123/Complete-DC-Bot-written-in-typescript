import { GuildMember, MessageActionRow, MessageAttachment, MessageButton } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category:'TESTING',
    description:"kicks a member",
    requireRoles:true,
    slash:"both",
    testOnly:true,
    guildOnly:true,
    minArgs:2,
    expectedArgs:'<user> <reason>',
    expectedArgsTypes:['USER','STRING'],
    callback: ({message,interaction,args,channel})=>{
        const target =  message ? message.mentions.members?.first() : interaction.options.getMember('user') as GuildMember
        if(!target){
            return 'Please mention someone'
        }
        if(!target.kickable){
return {
    custom:true,
    content: 'cant kick this member',
    ephemeral:true
   
}
        }
        const row = new MessageActionRow()
 .addComponents(
new MessageButton()
 .setCustomId('ban_yes')
 .setLabel('Confirm')
 .setStyle("SUCCESS")
 .setEmoji('🧨')
 )
 .addComponents(
 new MessageButton()
.setCustomId('ban_no')
.setLabel('Cancel')
.setStyle('DANGER')
 )
        args.shift()
        const reason =   args.join(' ')
        if(interaction){
            
           interaction.reply({
                content:'Are you sure about that?',
                ephemeral:true,
                components:[row],
                files:['https://i.makeagif.com/media/2-26-2017/IjaWcm.gif'],
            })
        }
        else{
            target.kick(reason)
            message.reply({
            content:`Successfully kicked <@${target.id}>`,
         
        })
        }
     
        const collector = channel.createMessageComponentCollector({ componentType: 'BUTTON', time: 15000 });
        collector.on('collect', i => {
            if (i.user.id === interaction.user.id && i.customId ==='ban_yes' )   {
                i.reply({
                    
                    content:`Successfully kicked <@${target.id}>`,
                    // files:[MessageAttachment]
                })
                target.kick(reason)
	}
    else if(i.user.id === interaction.user.id && i.customId ==='ban_no'){
i.reply({
    content:`Operation cancelled by the user <@${i.user.id}> `
})
    } else {
		i.reply({ content: `These buttons aren't for you!`, ephemeral: true });
	}
});

 collector.on('end', async(collect) => {
	console.log(`Collected ${collect.size} interactions.`);
});
    }
} as ICommand

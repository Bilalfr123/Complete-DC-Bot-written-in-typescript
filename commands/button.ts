import { Message, MessageActionRow, MessageButton } from "discord.js";
import { ICommand } from "wokcommands";

export default{
    category:'testting',
    description:'testting',
    slash:"both",
    testOnly:true,
    callback:async({interaction,message,channel})=>{
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
.setLabel('cancel')
.setStyle('DANGER')
 )
 const newRow = new MessageActionRow()
 .addComponents(
     new MessageButton()
     .setURL('https://wornoffkeys.com')
     .setLabel('Visit')
     .setStyle('LINK')
    
 )
 await interaction.reply({
     content:'Are you sure?',
     components:[row,newRow],
     ephemeral:true
 })
//  return {
//     content:'Are you sure?',
//     components:[row,newRow],
//     ephemeral:true
// }
const collector = channel.createMessageComponentCollector({ componentType: 'BUTTON', time: 15000 });
collector.on('collect', i => {
	if (i.user.id === interaction.user.id) {
		i.reply(`${i.user.id} clicked on the ${i.customId} button.`);
	} else {
		i.reply({ content: `These buttons aren't for you!`, ephemeral: true });
	}
});

 collector.on('end', async(collect) => {
	console.log(`Collected ${collect.size} interactions.`);
});
await interaction.editReply({
    content:'action already taken?',
    components:[]
})
    }
} as ICommand
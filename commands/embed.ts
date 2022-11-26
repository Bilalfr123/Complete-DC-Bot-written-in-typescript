import { Message, MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default{
    names:'emded',
    description:'embeds message', 
    slash:'both',
    testOnly:true,
    category:'testing',
    permissions:['ADMINISTRATOR'],
    callback:async ({message,text,interaction})=>{
        // const json = JSON.parse(text)
        // console.log(json)
const Embed =new MessageEmbed()
.setTitle('Basic guide')
.setDescription('Here you will find guide')
.setAuthor({
    name:'bilal',
    iconURL:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/How_to_use_icon.svg/1200px-How_to_use_icon.svg.png',
    url:'https://www.youtube.com/'
})
.setColor('BLUE')
.setURL('https://www.youtube.com/')
.setFooter({
    text:'this is end',
    iconURL:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/How_to_use_icon.svg/1200px-How_to_use_icon.svg.png'
})
.setImage('https://images.ctfassets.net/hrltx12pl8hq/4plHDVeTkWuFMihxQnzBSb/aea2f06d675c3d710d095306e377382f/shutterstock_554314555_copy.jpg')
.addFields([{
name:'first coulmn',
value:'1st',
inline:true
},{
    name:'second group',
    value:'2nd',
    inline:true
}])
.addField('group3','3rd',true)
.setThumbnail('https://images.ctfassets.net/hrltx12pl8hq/4plHDVeTkWuFMihxQnzBSb/aea2f06d675c3d710d095306e377382f/shutterstock_554314555_copy.jpg')
.setTimestamp()
const newMessage=  await message.reply({
    
    embeds:[Embed]
})
 await new Promise(resolve=> setTimeout(resolve,5000))
const newEmbed = newMessage.embeds[0]
newEmbed.setTitle('hello')
// message.reply({
//     embeds:[newEmbed]
// })
newMessage.edit({
    embeds:[newEmbed]
})
    }
} as ICommand
// import { ICommand } from "wokcommands";

// export default{
//     category:"testing",
//     description:'testting',
//     callback:({message,channel})=>{
// message.reply('Enter your username.')
// const filter = message=> m.author.id === message.author.id;
// const collector = channel.createMessageCollector({
//     max:1,
//     time:1000*5
// })
// collector.on('collect' , (m)=>{
//     console.log(message.content)
// if(m.author.id === message.author.id){
// }
// })
// collector.on("end",(collected)=>{
//     console.log(collected.size)
// if(collected.size === 0){
// message.reply('You didnt enter your username')
// }
// let text = 'collected:\n\n'
// message.channel.send(text+=collected)
// })
//     }
// } as ICommand

import DiscordJS, { Intents, Interaction, UserFlags } from 'discord.js'
import dotenv from 'dotenv'
import WOKCommands from 'wokcommands'
import mongoose from 'mongoose'
import path from 'path'
import 'dotenv/config'
dotenv.config() //use variables from env as environment variables
// import schema from './test-schema'
const client = new DiscordJS.Client({
    intents : [
        Intents.FLAGS.GUILDS ,
        Intents.FLAGS.GUILD_MESSAGES ,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_MEMBERS

    ]
})
client.on('ready' , ()=> {
    // await mongoose.connect(process.env.MONGO_URI || '',{
    //     keepAlive:true
    console.log('ok')

    console.log('The bot is ready') //whenever client/bot is online 
    new WOKCommands(client, {
        // The name of the local folder for your command files
        commandsDir: path.join(__dirname, 'commands'),
        featuresDir: path.join(__dirname, 'features'),
        // Allow importing of .ts files if you are using ts-node
        typeScript: true,
        mongoUri:process.env.MONGO_URI,
        // dbOptions:{
        //     keepAlive:true //coneection stay alive as bot is online
        // },
        testServers:['943082932174725153'],
        botOwners:['944648102680330250']
      })
      .setDefaultPrefix(';')
    //   setTimeout( async()=>{
    //       await new testSchema({
    //           message:'ji'
    //       }).save()
    //   },1000)
//     const guildId = '943082932174725153'
//     const guild = client.guilds.cache.get(guildId)
//   
//     let commands
//     if(guild){
//         commands = guild.commands
//     
//     }
//     else{
//         commands = client.application?.commands
       
//     }
//   commands?.create({
//       name:'ping',
//       description:'Replies with pong.'
//   })
//   commands?.create({
//       name:'server',
//       description:'Replies with  server info'
//   })
//   commands?.create({
//       name:'user',
//       description:'Replies with user info'
//   })
//   commands?.create({
//       name:'add',
//       description:'Add two number.' ,
//       options : [
//           { name : 'num1' ,
//         description:'This is num1.' ,
//     required: true ,
//     type: DiscordJS.Constants.ApplicationCommandOptionTypes.NUMBER
//     } ,
//           { name : 'num2' ,
//         description:'hi' ,
//     required: true ,
//     type: DiscordJS.Constants.ApplicationCommandOptionTypes.NUMBER
//     }
//       ]
//   })
})
// client.on('interactionCreate' , async(interaction)=>{
//     if(!interaction.isCommand()){
//         return
//     }
//     const { commandName , options } = interaction
//     if(commandName === 'ping'){
//         // interaction.reply( 'pong')
//         interaction.reply( {
//             content : 'pong' ,
//             ephemeral: true
//         })
//     }
//      else if(commandName === 'server'){
//         interaction.reply( {
//             content : 'server info' , 
//             ephemeral: true
//         })
//     }
//     else if(commandName === 'user'){
//         interaction.reply( {
//             content : 'pong' ,
//             ephemeral: true
//         })
//     }
//     else if(commandName === 'add'){
// const num1  = options.getNumber('num1')!
// const num2  = options.getNumber('num2')!
// interaction.deferReply({
//     ephemeral: true
// })
//  new Promise(resolve => setInterval(resolve,5000))
//         interaction.editReply( {
//             content : ` The sum is ${num1 + num2} ` 
//         })
//     }
// })
// client.on('messageCreate' , (message)=>{
// if( message.content === 'ping'){
// // message.reply('pong')
// message.reply({
//     content: 'pong'
// })
// }
// })

client.login(process.env.Token) //login bot


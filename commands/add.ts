import DiscordJS, { Options } from 'discord.js'
import { ICommand } from "wokcommands";

export default{
    category:'add',
    description:'add two numbers of your choice',
    expectedArgs:'<number1> <number2>' ,
// minArgs:2,
// maxArgs:2,
    slash:'both',
    testOnly:true,
    callback:({args})=>{
        
        const number1 = parseInt(args[0])
        const number2 = parseInt(args[1])
        const sum = number1 + number2
        console.log(sum)
        return sum 
    }
} as ICommand
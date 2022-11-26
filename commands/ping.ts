import { ICommand } from "wokcommands";

export default {
category :'blah' ,
description :' Replies with pong!!!!.', 
slash:"both", 
testOnly:true,
cooldown: '60s',
callback :()=>{
    return  'ping'
},

} as ICommand 
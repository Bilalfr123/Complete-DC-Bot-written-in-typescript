import { ICommand } from "wokcommands";

export default{
    category:"test",
    description:'sets bot status',
    minArgs:1,
    expectedArgs:'<status>',
    slash:'both',
    // ownerOnly:true,
    testOnly:true,
    callback:({client,text})=>{
//client=bot,text=args as string
client.user?.setPresence({
    status:"idle",
    activities:[{
        name:text,url:("https://youtube.com"),type:"STREAMING"
    }
    ],
    // afk:true
})
return 'Status Updated'
    }
} as ICommand
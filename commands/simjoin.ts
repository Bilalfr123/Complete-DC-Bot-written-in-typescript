import { ICommand } from "wokcommands";

export default {
    category:'testing',
    description:'testting',
    slash:'both',
    testOnly:true,
    callback:({client,member})=>{
        client.emit('guildMemberAdd', member)
        return 'simulated a join'

    }
} as ICommand

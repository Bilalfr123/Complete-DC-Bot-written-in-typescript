import { Client } from "discord.js";

export default (client:Client) =>{
    const statusOptions  = [
        'hello',
        'working',
        'bye'
    ]
    let counter= 0
    const updateStatus = ()=>{
        client.user?.setPresence({
            status:"dnd",
            activities:[{
                name:statusOptions[counter],url:("https://youtube.com"),type:'LISTENING'
            }
            ],
        })
        if(++counter >= statusOptions.length){
            counter = 0
        }
        setTimeout(updateStatus,1000*3)
    }
    updateStatus()
}

export const config={
    displayName:'Status Changer',
    dbName:'Status_Changer',
}
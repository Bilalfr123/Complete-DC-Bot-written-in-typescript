import axios from 'axios'
import { ICommand } from 'wokcommands'
export default {
    category:'',
    description:'',
    maxArgs:1,
    expectedArgs:'<Id>',
    expectedArgsTypes:['NUMBER'],
    callback:async ({args})=>{
let uri ='https://jsonplaceholder.typicode.com/posts'
if(args.length){ //means arguments passed
    uri += `/${args[0]}` //link + 1,2,3
}
const{ data} =await axios.get(uri)
console.log(data)
    }

} as ICommand
import axios from 'axios'
import { ICommand } from 'wokcommands'
export default {
    category:'',
    description:'',
    maxArgs:1,
    expectedArgs:'<Id>',
    expectedArgsTypes:['NUMBER'],
    callback:async ({args})=>{
let uri ='https://jsonplaceholder.typicode.com/posts?name:alex&age:28'


const{ data} =await axios.post(uri,
  {
      title:'title',
      body:'var',
      userId:'pop'
  },{
      headers:{
          'Content-type':'application/json'
      }
  }  )
console.log(data)
    }

} as ICommand
import  mongoose  from "mongoose"
const reqString = {
    type: 'string',
    required:true
}
const pschema = new mongoose.Schema({
    // _id= guild id
    userId :reqString,
    staffId:reqString,
    guildId:reqString,
    reason:reqString,
    expires:Date,
    type:{
type:'string',
required:true,
enum:['ban', 'mute']
    }
   },
   {
       timestamps:true
   });
export default mongoose.model('punishment', pschema,'punishment');
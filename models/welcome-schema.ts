import  mongoose  from "mongoose"
const reqString = {
    type: 'string',
    required:true
}
const schema = new mongoose.Schema({
    // _id= guild id
    _id :reqString,
    channelID:reqString,
    text:reqString
   });
 export default mongoose.model('welcome', schema,'welcome');
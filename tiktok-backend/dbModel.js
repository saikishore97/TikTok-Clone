const mongoose=require('mongoose');

const tiktokSchema = mongoose.Schema({
    url:String,
    channel:String,
    description:String,
    song:String,
    likes:String,
    shares:String,
    messages:String,
});


module.exports=mongoose.model('tiktokVideos',tiktokSchema);
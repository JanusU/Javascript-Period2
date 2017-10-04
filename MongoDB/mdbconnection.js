var mongoose = require("mongoose");
var mongoDB = "mongodb://janus:janus123@ds151014.mlab.com:51014/jdatabase";
mongoose.Promise = global.Promise;
mongoose.connect(mongoDB,{useMongoClient:true});

mongoose.connection.on("connected",function(){
    console.log("Mongoose connected to DB");
});
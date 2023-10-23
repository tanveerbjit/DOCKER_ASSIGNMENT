const mongoose = require("mongoose");
require("dotenv").config();


class DBServer{

    async connect(callback){

        try{
            if(true){

                this.url = "mongodb://172.17.0.2:27017/BJIT";
                const client = await mongoose.connect(this.url);
                
                if(client){

                    console.log("DB server is running");
                    callback()

                }else{

                    console.log("DB server is not running");

                }
            }

        }catch(err){

            console.log(`Database does not connect`);

        }

    }
}

module.exports = new DBServer();
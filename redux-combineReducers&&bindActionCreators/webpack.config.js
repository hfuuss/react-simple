const path = require("path");
module.exports  ={
    entry:"./app/main",
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"bundle.js"
    },
    watch:true,
    module:{
        rules:[
            {
                test: /\.js$/,
                loader:"babel-loader",
                include:[
                    path.resolve(__dirname,"app")
                ],
                exclude:[
                    path.resolve(__dirname,"node_modules")
                ],
                options:{
                    presets:["env","react"],
                    plugins:["transform-object-rest-spread"]
                }
            }
        ]
    }
}
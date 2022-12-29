const mongoose = require("mongoose")



//to connect to mongoDb(data base)
mongoose.set("strictQuery",true) // this is so that only the field that you create are adde to your schema(document)
mongoose.connect(`mongodb+srv://root:root@mearnprojects-1.vhrzvbi.mongodb.net/jokes_db?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err))

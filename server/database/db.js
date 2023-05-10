import mongoose from "mongoose"


const Connection = async (username, password) =>{
    const URL = `mongodb+srv://${username}:${password}@cluster0.l8ltnso.mongodb.net/CRUD?retryWrites=true&w=majority`

    try {
        await mongoose.connect(URL, {useNewUrlParser : true});
        console.log('Connected')

    } catch (error) {
        console.log("Error while connectiong with database: ", error)
    }



}


export default Connection;
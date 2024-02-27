const client = require("../connection/connection");

 
 

 const dataservice={
    findData:async({query,collectionName,typeofQuery})=>{
        console.log("query",query);
        try {
            await client.connect();
            const database =await client.db('graphqldb');
            const collection =await database.collection(collectionName);
            // console.log(collection)
            // Query for a movie that has the title 'Back to the Future'
            const data = await collection.find(query).toArray();
            console.log(data);
            return data
          } 
          finally {
            // Ensures that the client will close when you finish/error
            await client.close();
          }
    }
}
module.exports =dataservice
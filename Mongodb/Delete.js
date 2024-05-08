const { MongoClient } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017/';
const client = new MongoClient(uri);

async function connectToMongoDB() {
    try {
        await client.connect();

        const db = client.db('Aspire')
        const collection = db.collection('Employee')

        // Delete one document----------------------------------------------->
        const queryDeleteOne = { emp_name :"Harish" };
        const resultDeleteOne = await collection.deleteOne(queryDeleteOne);
        console.log(`${resultDeleteOne.deletedCount} document deleted`);
        
        // Delete many documents--------------------------------------------->
        const queryDeleteMany = { emp_name: "Harish" }; 
        const resultDeleteMany = await collection.deleteMany(queryDeleteMany);
        console.log(`${resultDeleteMany.deletedCount} documents deleted`);

    
        const cursor = collection.find({})
        await cursor.forEach(record => {
            console.log(record)
        })
        await client.close()
        console.log('Connected to MongoDB successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

connectToMongoDB();
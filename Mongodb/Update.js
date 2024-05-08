
const { MongoClient } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017/';
const client = new MongoClient(uri);

async function connectToMongoDB() {
    try {
        await client.connect();

        const db = client.db('Aspire')
        const collection = db.collection('Employee')

        
        //update------------------------------------------------------------->

        const queryOne = { emp_name: "Harish" };
        const updateOne = { $set: { salary: 30000 } };
        const resultOne = await collection.updateOne(queryOne, updateOne);
        console.log(`${resultOne.matchedCount} document matched, ${resultOne.modifiedCount} document modified`);
        

        //updateMany-------------------------------------------------------->
        const queryMany = { emp_name: "Hubert" };
        const updateMany = { $set: { emp_dept: "HR", salary: 25000 }};
        const resultMany = await collection.updateMany(queryMany, updateMany);
        console.log(`${resultMany.matchedCount} document matched, ${resultMany.modifiedCount} document modified`);
        
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

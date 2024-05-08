const { MongoClient } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017/';
const client = new MongoClient(uri);

async function connectToMongoDB() {
    try {
        await client.connect();

        const db = client.db('Aspire')
        const collection = db.collection('Employee')

        const cursor = collection.find({})

        const akresult = await collection.insertMany([{
            id: 1,
            emp_name: "Harish",
            emp_dept: "IT",
            salary: 25000
        },{
            id: 2,
            emp_name: "Hubert",
            emp_dept: "Sales Mangament",
            salary: 15000
        }])

        console.log('the inserted id ' + akresult.insertedId)

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
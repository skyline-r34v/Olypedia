const express = require('express')
const {MongoClient} = require('mongodb')
const dotenv = require('dotenv')

dotenv.config({ path:'config.env'})
const url = process.env.MONGODB_URL

const database = 'tutorial';
const client = new MongoClient(url);

const showdb = async function getdata()
{
    let result = await client.connect();
    let db = result.db(database);
    let collection = db.collection("users")
    let response = await collection.find({}).toArray();
    console.log(response);
}

module.exports = showdb
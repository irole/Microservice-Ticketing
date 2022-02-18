import {MongoMemoryServer} from 'mongodb-memory-server';
import mongoose from 'mongoose';
import request from 'supertest';
import app from "../src";

let mongo: any;

before('db', async () => {
    mongo = await MongoMemoryServer.create();
    const uri = mongo.getUri();
    await mongoose.connect(uri, {
        // @ts-ignore
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    const collections = await mongoose.connection.db.collections();

    for (let collection of collections) {
        await collection.deleteMany({});
    }

})

describe('test', async () => {
    it('should', async () => {
        request(app).post('/api/users/register').send({email: 'a@a.com', password: 12345678}).then(value => {
            let cookie = value.get('Set-Cookie');
            console.log(cookie)
        });
    });

});

after('', async () => {
    const collections = await mongoose.connection.db.collections();

    for (let collection of collections) {
        await collection.deleteMany({});
    }
    await mongo.stop();
    await mongoose.connection.close();
})

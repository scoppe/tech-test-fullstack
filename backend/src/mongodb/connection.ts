import { GraphQLError } from 'graphql';
import { MongoClient } from 'mongodb';

const MONGODB_URL = "mongodb://root:example@localhost:27017/dataviz?authSource=admin";

let connection: MongoClient | null = null;

export async function getConnection(): Promise<MongoClient> {
    if (connection !== null && connection.isConnected()) {
        return connection;
    }
    try {
        connection = await MongoClient.connect(MONGODB_URL);
    } catch (error) {
        console.error(error);
        throw new GraphQLError('Something went wrong');
    }
    return connection;
}
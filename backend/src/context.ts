import MongoDb from './mongodb';
import { ApolloContext } from './types';

export function getApolloContext(): ApolloContext {
    return {
        mongodb: new MongoDb()
    }
}
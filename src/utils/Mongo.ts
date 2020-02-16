import MongoClient from 'mongodb';
import Logger from './Logger';

export default class Mongo {
  static collectionName = {
    message: 'message'
  }
  static async getDB(callback: (db: MongoClient.Db) => Promise<void>) {
    try {
      const database = await MongoClient.connect(`mongodb://localhost:27017/typescript_node`, { useNewUrlParser: true });
      let dbo = database.db("typescript_node");
      await callback(dbo);
      await database.close();
    } catch (error) {
      Logger.warn(error);
      process.kill(process.pid, "SIGINT");
    }
  }
}

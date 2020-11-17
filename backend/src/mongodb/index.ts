import { getConnection } from "./connection";
import { EstateRow } from "./types";

export default class MongoDb {
  async getEstatesCollection() {
    const mongo = await getConnection();
    const db = await mongo.db();
    return db.collection("estates");
  }

  async listEstates() : Promise<EstateRow[]> {
    const collection = await this.getEstatesCollection();
    const items = await collection.find().limit(25).toArray();
    console.log(items);
    return items.map((item) => ({
      _id: item._id,
      MarketValue: item.MarketValue,
      AddressStreet: item.AddressStreet,
      AddressPostalCode: item.AddressPostalCode,
      AddressCity: item.AddressCity,
      AreaInSqm: item.AreaInSqm,
      Longitude: item.Longitude,
      Latitude: item.Latitude,
    }))
  }
}

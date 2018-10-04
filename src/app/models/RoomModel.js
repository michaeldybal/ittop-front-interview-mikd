import Model from './Model';

export default class RoomModel extends Model {
    constructor(fields) {
        super(fields);
        this.name = fields.name || null;
        this.width = fields.width || null;
        this.height = fields.height || null;
        this.data = fields.data || null;
    }

    static getObjectsCollection(dataCollection) {
        return dataCollection.map(i => {
          i.data = i.data.map((r) => [r, false]);
          return new RoomModel(i);
        });
    }
}

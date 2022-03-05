// Packages
import * as Mongoose from "mongoose";

const autoBind = require('auto-bind');

export default class Service {

    model: any;

    constructor(model: Mongoose.Model<any>) {
        this.model = model;
        autoBind(this);
    }

    async find(where: object, populate = null, sort = {createdAt: 1}) {
        return await this.model.find(where).populate(populate).sort(sort).exec();
    }

    async findAll() {
        return this.model.find({});
    }

    async findById(id: any, populate = null) {
        return await this.model.findById(id).populate(populate).exec();
    }

    async findByIdAndUpdate(id: any, update: object) {
        return await this.model.findByIdAndUpdate(id, update);
    }

    async remove(id: any) {
        await this.model.findByIdAndDelete(id);
    }

    async findOneAndDelete(where: object) {
        return await this.model.findOneAndDelete(where);
    }

    async findByIdAndDelete(id: any) {
        return await this.model.findByIdAndDelete(id);
    }

    async findOneAndUpdate(where: object, update: object) {
        return await this.model.findOneAndUpdate(where, update);
    }

    async findOne(where = {}, populate = null) {
        return await this.model.findOne(where).populate(populate).exec();
    }

    async insert(values: object) {
        let newModel = await new this.model(values);
        return await newModel.save();
    }

    async insertWithoutSave(values: object) {
        return await new this.model(values);
    }

    async insertMany(values: any) {
        return await this.model.insertMany(values);
    }

    async paginate(where = {}, page: any, sort = {createdAt: 1}, limit = 10, populate = null) {
        return await this.model.paginate(where, {page, sort, limit, populate});
    }

}

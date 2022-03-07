const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const ticketSchema = Schema({
    title: {type: String, unique: true, required: true},
    price: {type: Number, required: true},
    userId: {type: Schema.Types.ObjectId, required: true}
}, {
    timestamps: true, toJSON: {
        transform(doc: any, ret: any) {
            ret.id = ret._id
            delete ret._id;
        },
        virtuals: true,
        versionKey: false
    }
});

export default mongoose.model('Ticket', ticketSchema);

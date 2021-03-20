import mongoose from './implementations/Conexao'

export interface ILicenseModel extends mongoose.Document {
    _id: { type: string },
    customer: { _id: string },
    clients: [
        {
            _id: { type: string }
        }
    ],
    description: String,
    ipAssign: String,
    dataAssign: Date,
    license: String,
    users: [
        {
            _id: { type: string }
        },
    ],
    services: [
        {
            _id: { type: string },
            description: String,
            value: Number,
        }
    ],
    totalLicense: Number,
    Status: Number,
    createdAt: Date,
    updatedAt: Date,
}

const schema = new mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        required: true
    },
    clients: Array(
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Customer',
            require: true
        }
    ),
    description: String,
    ipAssign: String,
    dataAssign: Date,
    license: String,
    users: Array(
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'User',
            require: true
        }
    ),
    services: [
        {
            description: String,
            value: Number,
        }
    ],
    totalLicense: Number,
    Status: Number,
    createdAt: Date,
    updatedAt: Date,

})

export const LicenseSchema = mongoose.model<ILicenseModel>('License', schema)

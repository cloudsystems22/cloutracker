import mongoose from './implementations/Conexao';

export interface IUserModel extends mongoose.Document{
    _id:{ type: string };
    userId: number;
    userName: string;
    firstName: string;
    lastName: string;
    email: string;
    cell:string;
    password: string;
    passwordResetToken: string;
    active: number;
    nivel: string;
    permitions:[
        {
            path: string,
            module: string,
        }
    ];
    createdAt: Date;
    updatedAt: Date;

}

const schema = new mongoose.Schema({
    userId:{
        type: Number,
        require:true
    },
    userName:{
        type: String,
        require:true,
    },
    firstName: String,
    lastName: String,
    email: String,
    cell: String,
    password:{
        type: String,
        require: true
    },
    passwordResetToken:String,
    active: Number,
    nivel: String,
    permitions: Array(
        {
            path: String,
            module: String,
        }
    ),
    createdAt: Date,
    updatedAt: Date,
});

export const UserSchema = mongoose.model<IUserModel>('User', schema)
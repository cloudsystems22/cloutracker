import { IUserModel, UserSchema } from '../../entities/User';
import { IUsersRepository } from '../IUsersReporitory';

export class MongodbUserRepository implements IUsersRepository{
    async save(user:IUserModel): Promise<IUserModel> {
        const updateUser = await UserSchema.findByIdAndUpdate({_id:user.id}, user, { new: true });
        return updateUser!
    }

    async create(user:IUserModel): Promise<IUserModel> {
        const newUser = await UserSchema.create(user);
        return newUser
    }

    async findByEmail(email:string): Promise<IUserModel> {
        const userExist = await UserSchema.findOne({ email })
        return userExist!;
    }

    async findById(id:string): Promise<IUserModel>{
        const userExist = await UserSchema.findById({ _id:id });
        return userExist!
    }

    async showAll(): Promise<IUserModel[]>{
        const usersAll = await UserSchema.find({})
        return usersAll
    }

    async search(descript:string): Promise<IUserModel[]>{
        const userRegex = new RegExp(descript, 'i')
        const userSearch = await UserSchema.find({ 
            $or:[
                { userName: userRegex },
                { email: userRegex }
            ]
        });
        return userSearch
    }
}
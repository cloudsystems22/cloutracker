import { IUserModel, UserSchema } from '../../entities/User';
import { IAuthRepository } from '../IAuthRepository';
import { ICodeDTO } from '../../useCases/Auth/ICodeDTO'
import bcrypt from 'bcrypt';

export class MongodbAuthRepository implements IAuthRepository{
    async login(email:string, password:string): Promise<IUserModel>{
        const userExist = await UserSchema.findOne({ email, active:0 })
        if(!userExist) return undefined!

        if(bcrypt.compareSync(password, userExist.password)){
            return userExist    
        } 
        return undefined!
    }

    async recover(email:string): Promise<IUserModel>{
        const userExist = await UserSchema.findOne({ email })
        if(!userExist) return undefined!

        return userExist
    }
    
    async unloack(user:IUserModel, code:ICodeDTO): Promise<IUserModel>{
        const userExist = await UserSchema.findOne({ email:user.email })
        if(!userExist) return undefined!
        
        if(bcrypt.compareSync(code.code, userExist.passwordResetToken)){
            const updateUser = await UserSchema.findByIdAndUpdate({_id:userExist.id}, user);
            return updateUser!
        }
        
        return undefined!
    }
    
    async updatepassword(user:IUserModel, code:ICodeDTO): Promise<IUserModel>{
        const userExist = await UserSchema.findOne({ email:user.email })
        if(!userExist) return undefined!

        if(bcrypt.compareSync(code.code, userExist.passwordResetToken)){
            const updateUser = await UserSchema.findByIdAndUpdate({_id:userExist.id}, user);
            return updateUser!
        }

        return undefined!

    }

    async passwordToken(user:IUserModel): Promise<IUserModel>{
        const passwordToken = await UserSchema.findByIdAndUpdate({_id:user.id}, user, {new:true})
        return passwordToken!
    }
    
}
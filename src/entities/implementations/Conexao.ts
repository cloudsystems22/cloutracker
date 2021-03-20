import mongoose from 'mongoose';
import endpoint from '../../endpoint.config'

//const uri = 'mongodb://localhost:27017/cloudtracker';
mongoose.connect(endpoint.mongoUri, { useNewUrlParser: true })
mongoose.Promise = global.Promise;
export default mongoose;
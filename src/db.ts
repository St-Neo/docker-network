import mongoose, { Schema, model } from 'mongoose';

const mongoUrl: string = 'mongodb://mongo:27017/myDatabase';// docker run -d -v volume_database:/data/db --name mongo(thisi si what is being resolved)  --network zaid_docker -p 27017:27017 mongo

// Connect to MongoDB
mongoose.connect(mongoUrl)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define a User schema
interface IUser {
  name: string;
  age: number;
  email: string;
}

const UserSchema: Schema = new Schema<IUser>({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true }
});

// Create a User model
export const User = model<IUser>('User', UserSchema);
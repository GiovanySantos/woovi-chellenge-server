import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

export const connect = async () => {
  await mongoose
    .connect(process.env.MONGODB_API as string)
    .then(() => console.log('DB connected'))
    .catch((error) => console.log(error));
};

export const disconnect = async () => {
  await mongoose.connection
    .close()
    .then(() => console.log('DB Disconnected'))
    .catch((error) => console.log(error));
};

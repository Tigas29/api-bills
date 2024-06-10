//config mongoose/connection with database
import mongoose from 'mongoose';

export async function setupMongo(): Promise<void> {
  try {
    if (mongoose.connection.readyState === 1) {
      return;
    }
    console.log('🎲connecting to DB...');
    await mongoose.connect(process.env.MONGO_URL as string);
    console.log('❗Db connected!');
  } catch (error) {
    console.error(error);
    throw new Error('❌Error DB not connected');
  }
}

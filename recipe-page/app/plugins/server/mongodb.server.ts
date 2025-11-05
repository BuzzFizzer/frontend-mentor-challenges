import mongoose from "mongoose"

export default defineNitroPlugin(async () => {
  console.log("Initializing MongoDB connection...")
  const config = useRuntimeConfig()

  if (!config.mongodbURI) {
    throw new Error("MongoDB URI is not defined in runtime config")
  }

  try {
    await mongoose.connect(config.mongodbURI)
    console.log("Connected to MongoDB successfully")
  } catch (error) {
    console.error("Error connecting to MongoDB:", error)
  }
})

import mongoose from "mongoose";

const conection = async () => {
  const URL = `{paste the mongo db cluster url}`;

  //MongoDB database running on the local machine
  const local_URL = `mongodb://127.0.0.1/shop`;

  try {
    await mongoose.connect(local_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("connected successfully");
  } catch (error) {
    console.log(error, "hi");
  }
};

export default conection;

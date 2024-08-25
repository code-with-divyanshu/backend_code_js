// require("dotenv").config({ path: "/.env" });
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "/.env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at Port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Mongo db connection Failed !! ", err);
  });

/* first approach
(async () => {
  try {
    await mongoose.connect(`${process.env.MONOGODB_URI}/${DB_NAME}`);
  } catch (error) {
    console.log(error);
    throw error ;
  }
})();
*/

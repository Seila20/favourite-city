import mongoose from "mongoose";

const CitySchema = new mongoose.Schema(
  {
    cityName: {
      required: true,
      type: String,
    },
  },
  { collection: "cities" }
);
const City = mongoose.models.City || mongoose.model("City", CitySchema);

export default City;

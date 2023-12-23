import { NextResponse } from "next/server";
import { connectDB } from "@/lib/connectDB";
import City from "@/models/City";

export async function POST(req, { params }) {
  try {
    await connectDB();
    const cityName = params.cityName[0];
    const city = await City.findOne({ cityName });

    if (!city) {
      await City.create({
        cityName,
      });
      return NextResponse.json({
        success: true,
      });
    } else {
      return NextResponse.json({
        success: true,
      });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
    });
  }
}

export async function DELETE(req, { params }) {
  try {
    await connectDB();
    const cityName = params.cityName[0];
    const deletedCity = await City.findOneAndDelete({ cityName });

    if (deletedCity) {
      return NextResponse.json({
        success: true,
      });
    } else {
      return NextResponse.json({
        success: true,
      });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: false,
    });
  }
}

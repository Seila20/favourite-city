import React from "react";
import Link from "next/link";
import { connectDB } from "@/lib/connectDB";
import City from "@/models/City";

const Favourite = async () => {
  await connectDB();
  const city = await City.find();

  return (
    <div className="min-h-screen">
      <h1 className="text-3xl font-bold m-2 text-center p-1">
        Favourite &nbsp;
        <span className="mb-1.5 text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Cities
        </span>
      </h1>
      <div className="flex flex-wrap justify-center mt-10">
        {city &&
          city.map((city) => (
            <li key={city} className="p-4 max-w-sm list-none mt-15">
              <div className="flex rounded-lg h-full bg-gray-500 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-0 inline-flex items-center justify-center rounded-full text-white flex-shrink-0">
                    <Link
                      href={`/${city.cityName}`}
                      className="text-white text-lg font-medium"
                    >
                      {city.cityName}
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          ))}
      </div>
    </div>
  );
};

export default Favourite;

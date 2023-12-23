"use client";
import React from "react";
import { useRouter } from "next/navigation";
import bg from "../public/city-bg.jpg";

export default function Home() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const cityName = new FormData(e.target);
    const search = cityName.get("city");
    router.push(`/${search}`);
  };

  return (
    <div
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${bg.src})`,
        height: "100vh",
      }}
    >
      <h1 className="font-extrabold text-4xl center-text">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Explore Your City
        </span>
        <br />
        Navigate, Discover, Embrace
      </h1>

      <form className="search" onSubmit={handleSubmit}>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            name="city"
            id="default-search"
            className="w-full p-4 ps-10 text-sm text-slate-100 bg-[#d7c8c766] border rounded-xl"
            placeholder="Search..."
            autoComplete="off"
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-600 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

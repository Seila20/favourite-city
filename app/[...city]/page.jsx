"use client";
import { React, useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import Card from "@/components/Card";

export default function City({ params }) {
  const [data, setData] = useState();
  const [notFound, setNotFound] = useState(false);
  const [time, setTime] = useState();
  const router = useRouter();
  const apiUrl = "https://geocoding-api.open-meteo.com/v1/search";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}?name=${params.city}`);
        const res = await response.json();

        if (res.results && res.results.length > 0) {
          setData(res);
          setNotFound(false);
        } else {
          setNotFound(true);
        }
      } catch (error) {
        console.log(error);
        setNotFound(true);
      }
    };
    fetchData();
  }, [params.city]);

  const cityName = data?.results[0].name;
  const latitude = data?.results[0].latitude;
  const longitude = data?.results[0].longitude;
  const country = data?.results[0].country;
  const population = data?.results[0].population;
  const timezone = data?.results[0].timezone;
  const elevation = data?.results[0].elevation;

  const Map = useMemo(
    () =>
      dynamic(() => import("@/components/Map"), {
        loading: () => <p>loading...</p>,
        ssr: false,
      }),
    []
  );

  const getFormattedTime = () => {
    return new Date().toLocaleTimeString("en-US", {
      timeZone: timezone,
    });
  };

  useEffect(() => {
    const updateTime = () => {
      setTime(getFormattedTime());
    };

    const intervalId = setInterval(() => {
      updateTime();
    }, 1000);

    return () => clearInterval(intervalId);
  });

  const handleAddFavourite = async () => {
    try {
      const response = await fetch(`/api/favourite/${cityName}`, {
        method: "POST",
      });

      if (response.ok) {
        await response.json();
        router.push("/favourite");
      } else {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteFavourite = async () => {
    try {
      const response = await fetch(`/api/favourite/${cityName}`, {
        method: "DELETE",
      });

      if (response.ok) {
        await response.json();
        router.push("/");
      } else {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {notFound ? (
        <h2 className="text-2xl font-bold text-center m-5">
          No Results Found <span>&#128542;</span>
        </h2>
      ) : (
        <>
          <h1 className="text-3xl font-bold m-2 text-center p-1">
            {cityName}
            <span className="mb-1.5 text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              {" "}
              · {country}
            </span>
          </h1>

          <Card
            population={population}
            elevation={elevation}
            timezone={timezone}
            time={time}
          />

          <div className="map p-3 my-5 grid place-items-center">
            <Map latitude={latitude} longitude={longitude} />
          </div>

          <div className="flex flex-row justify-center">
            <button
              className="inline-flex text-center items-center px-4 py-2 text-base font-medium rounded-full text-blue-700 border border-blue-700 hover:bg-blue-800 hover:text-white focus:ring-1 focus:outline-none focus:ring-blue-800"
              onClick={handleAddFavourite}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13.5,3.188C7.805,3.188,3.188,7.805,3.188,13.5S7.805,23.813,13.5,23.813S23.813,19.195,23.813,13.5 S19.195,3.188,13.5,3.188z M19,15h-4v4h-3v-4H8v-3h4V8h3v4h4V15z"
                ></path>
              </svg>
              Add {cityName} to Favourite
            </button>
            <button
              className="inline-flex text-center items-center px-4 py-2 text-base font-medium rounded-full text-red-700 border border-red-700 hover:bg-red-800 hover:text-white focus:ring-1 focus:outline-none focus:ring-red-800"
              onClick={handleDeleteFavourite}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
              Delete {cityName} from Favourite
            </button>
          </div>
        </>
      )}
    </div>
  );
}

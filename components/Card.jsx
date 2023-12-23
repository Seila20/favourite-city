import Image from "next/image";

export default function Card({ population, timezone, elevation, time }) {
  return (
    <div className="flex flex-wrap justify-center mt-10">
      <div className="p-4 max-w-sm">
        <div className="flex rounded-lg h-full bg-gray-500 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full text-white flex-shrink-0">
              <Image
                src="/population.png"
                alt="ppulation"
                width={30}
                height={30}
                className="mr-0 sm:mr-6"
              />
            </div>
            <h1 className="text-white text-lg font-medium">Population</h1>
          </div>
          <div className="flex flex-col justify-between flex-grow">
            <h2 className="leading-relaxed text-base text-white text-center">
              {population}
            </h2>
          </div>
        </div>
      </div>
      <div className="p-4 max-w-sm">
        <div className="flex rounded-lg h-full bg-gray-500 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full text-white flex-shrink-0">
              <Image
                src="/timezone.png"
                alt="timezone"
                width={60}
                height={50}
                className="mr-2"
              />
            </div>
            <h1 className="text-white text-lg font-medium">Timezone</h1>
          </div>
          <div className="flex flex-col justify-between flex-grow">
            <h2 className="leading-relaxed text-base text-white text-center">
              {timezone}
            </h2>
          </div>
        </div>
      </div>
      <div className="p-4 max-w-sm">
        <div className="flex rounded-lg h-full bg-gray-500 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full text-white flex-shrink-0">
              <Image
                src="/elevation.png"
                alt="elevation"
                width={200}
                height={200}
                className="mr-2"
              />
            </div>
            <h1 className="text-white text-lg font-medium">Elevation</h1>
          </div>
          <div className="flex flex-col justify-between flex-grow">
            <h2 className="leading-relaxed text-base text-white text-center">
              {elevation}
            </h2>
          </div>
        </div>
      </div>
      <div className="p-4 max-w-sm">
        <div className="flex rounded-lg h-full bg-gray-500 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full text-white flex-shrink-0">
              <Image
                src="/time.png"
                alt="time"
                width={24}
                height={30}
                className="mr-2"
              />
            </div>
            <h1 className="text-white text-lg font-medium">Time</h1>
          </div>
          <div className="flex flex-col justify-between flex-grow">
            <h2 className="leading-relaxed text-base text-white text-center">
              {time}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

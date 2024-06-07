import { IlMaga } from "@/assets";

export default function HomeHeroSection() {
  return (
    <section className="flex flex-col items-center px-4 md:flex-row md:px-8">
      <div className="relative flex-1 order-last md:order-first">
        <IlMaga
          alt="Pepe Maga"
          className="-ml-8"
        />
      </div>
      <div className="flex flex-col space-y-4 md:w-2/4">
        <div>
          <h1 className="text-4xl font-extrabold">Pepe Taking Over Dogs</h1>
          <p className="">
            The most memeable memecoin in existence. The dogs have had their
            day, it's time for Pepe to take reign.
          </p>
        </div>
        <div>
          <button className="px-8 py-2 bg-green-700">Buy</button>
        </div>
      </div>
    </section>
  );
}

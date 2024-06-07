import { IlPepe } from "@/assets";
import { socials } from "@/config/socials";

export default function LayoutFooter() {
  return (
    <footer className="flex flex-col bg-black text-white p-8">
      <div className="flex-1 flex  space-x-2">
        <div className="flex-1 items-center">
          <p className="text-4xl font-extrabold text-green-700/50">Pepe</p>
        </div>
        {socials.map((social, index) => (
          <button
            key={index}
            className="p-4 bg-green-950 rounded-full text-xl"
          >
            <social.icon />
          </button>
        ))}
      </div>
      <div className="flex items-end">
        <IlPepe
          alt="Pepe Logo"
          width={256}
          className="-ml-16"
          style={{ transform: "scaleX(-1)" }}
        />
        <p className="text-white/50 text-sm text-center">
          This token is simply a memecoin with no intrinsic value or expectation
          of financial return.
        </p>
      </div>
    </footer>
  );
}

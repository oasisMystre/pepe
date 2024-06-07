import { layoutNavigations } from "@/config";
import Link from "next/link";

export default function LayoutHeader() {
  return (
    <header className="flex items-center px-4 md:px-8">
      <div>
        <h1 className="text-2xl font-4xl font-extrabold text-green-950">
          Pepe
        </h1>
      </div>
      <nav className="flex-1 flex items-center justify-center">
        {layoutNavigations.map((navigation, index) => (
          <Link
            href={navigation.href}
            key={index}
            className="px-2 py-4 md:px-4"
          >
            {navigation.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}

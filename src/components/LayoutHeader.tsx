import LayoutHeaderClient from "./LayoutHeaderClient";

export default function LayoutHeader() {
  return (
    <header className="flex items-center px-4 md:px-8">
      <div className="flex-1 md:flex-none">
        <h1 className="text-2xl font-4xl font-extrabold text-green-950">
          Pepe
        </h1>
      </div>
      <LayoutHeaderClient />
    </header>
  );
}

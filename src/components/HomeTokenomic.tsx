export default function HomeTokenomic() {
  return (
    <section className="flex flex-col space-y-4 p-8 bg-green-950 backdrop-blur-3xl text-white md:flex-row md:space-x-4 md:space-y-0">
      <div className="flex-1 flex flex-col">
        <p className="text-2xl font-bold">Token Supply</p>
        <p className="text-white/80">1B+ PEPE</p>
      </div>
      <div className="flex-1 flex flex-col">
        <p className="text-2xl font-bold">Tax</p>
        <p className="text-white/80">0/0</p>
      </div>
      <div className="flex-1 flex flex-col">
        <p className="text-2xl font-bold">Burnt Lp Token</p>
        <p className="text-white/80">1B+ Tokens</p>
      </div>
    </section>
  );
}

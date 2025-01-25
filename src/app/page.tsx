import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col">
      <h1 className="font-display text-3xl font-bold">Rory McMeekin</h1>
      <h2 className="font-body">
        Design engineer exploring life, the internet, and everything.
      </h2>
      <p className="font-mono">Hello world!</p>
    </div>
  );
};

export default Home;

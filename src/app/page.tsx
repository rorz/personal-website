import { NextPage } from "next";

const AboutPage: NextPage = () => {
  return (
    <div className="size-full flex flex-col">
      <h1 className="font-display text-2xl font-bold">Rory McMeekin</h1>
      <h2 className="font-body">
        Design engineer exploring life, the internet, and everything.
      </h2>
      <p className="font-mono">Hello world!</p>
    </div>
  );
};

export default AboutPage;

import { NextPage } from "next";
import Image from "next/image";
import barbicanImg from "./barbican.webp"

const AboutPage: NextPage = () => {
  return (
    <div className="size-full flex flex-col gap-y-4">
      <figure>
        <Image
          src={barbicanImg}
          alt="An image of an elevated walkway in the Barbican complex, which has been heavily modified with glitch effects so that the figures in the distance and deatils of the buildings are hard to make out."
          priority
          className="aspect-square object-cover object-center border border-2 border-black"
        />
        <figcaption className="text-right text-sm pt-1 text-gray-600">
          A Barbican bridge
        </figcaption>
      </figure>
      <h1 className="font-display text-2xl font-bold pb-2 pt-6">
        Rory McMeekin
      </h1>
      <p>
        Design engineer exploring life, the internet, and everything. I
        co-founded and work at{" "}
        <a href="//kenobi.ai" target="_blank" className="underline">
          Kenobi.ai
        </a>{" "} (formerly Verdn), which is backed by
        {" "}
        <a
          href="//ycombinator.com/companies/kenobi"
          target="_blank"
          className="underline"
        >
          Y Combinator.
        </a>{" "}I have lived in London for almost 15 years, taking various breaks from the city to travel and work remotely.
      </p>
      <p>
        I am most interested in the intersection between computers and art, and
        as such I enjoy making software, music, and images.
      </p>
      <p>
        You can reach out to me by sending an email to any username @ this
        domain.
      </p>
    </div>
  );
};

export default AboutPage;

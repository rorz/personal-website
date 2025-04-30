import { NextPage } from "next";
import Image from "next/image";
import heroImage from "./home.png";

const AboutPage: NextPage = () => {
  return (
    <div className="size-full flex flex-col gap-y-4">
      <figure>
        <Image
          src={heroImage}
          alt="Abstract lights. Shot on iPhone."
          priority
        />
        <figcaption className="text-right text-sm pt-1 text-gray-600">
          Abstract lights
        </figcaption>
      </figure>
      <h1 className="font-display text-2xl font-bold pb-2 pt-6">
        Rory McMeekin
      </h1>
      <p>
        Design engineer exploring life, the internet, and everything. I
        co-founded and work at{" "}
        <a href="//verdn.com" target="_blank" className="underline">
          Verdn,
        </a>{" "}
        which went through{" "}
        <a
          href="//ycombinator.com/companies/verdn"
          target="_blank"
          className="underline"
        >
          Y Combinator
        </a>{" "}
        in 2022. I lived in London for 12 years before deciding to leave
        indefinitely.
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

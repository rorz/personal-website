import { NextPage } from "next";
import { BandcampWidget } from "../_ui/bandcamp-widget";
import Image from "next/image";

const WorkPage: NextPage = () => {
  return (
    <div className="size-full flex flex-col gap-y-6">
      <h1 className="font-display text-2xl font-bold pb-2">My Work</h1>
      <div className="flex flex-col gap-y-3">
        <h2 className="font-display text-xl font-light">Code</h2>
        <p className="italics">Coming soon...</p>
      </div>
      <div className="flex flex-col gap-y-3">
        <h2 className="font-display text-xl font-light">Music</h2>
        <p>
          Creating music has been a formative experience for me, and continues
          to be the primary way I express myself. I play piano; Logic Pro is my
          preferred{" "}
          <a
            href="https://en.wikipedia.org/wiki/Digital_audio_workstation"
            target="_blank"
          >
            DAW.
          </a>{" "}
          For the past decade I{" "}
          <a
            href="https://soundcloud.com/4-loop"
            className="underline"
            target="_blank"
          >
            posted select creations on SoundCloud,
          </a>{" "}
          but have since moved to Bandcamp.
        </p>
        <figure className="flex flex-col gap-y-1">
          <BandcampWidget trackId={1287360924} />
          <figcaption className="text-sm text-gray-500">
            I wrote this track at the end of summer 2023.
          </figcaption>
        </figure>
      </div>
      <div className="flex flex-col gap-y-3">
        <h2 className="font-display text-xl font-light">
          Photography + drawings
        </h2>
        <h3 className="font-display text-lg font-bold">
          Japan (2025, ongoing)
        </h3>
        <figure className="flex flex-col gap-y-1">
          <a href="/photography/japan/looking-down.jpg" target="_blank">
            <Image
              src="/photography/japan/looking-down.jpg"
              width={400}
              height={600}
              alt="Looking Down"
            />
          </a>
          <figcaption className="text-sm text-gray-500">
            <i>Looking Down</i>
          </figcaption>
        </figure>
        <figure className="flex flex-col gap-y-1">
          <a
            href="/photography/japan/industrial-reflection.jpg"
            target="_blank"
          >
            <Image
              src="/photography/japan/industrial-reflection.jpg"
              width={400}
              height={550}
              alt="Industrial Reflection"
            />
          </a>
          <figcaption className="text-sm text-gray-500">
            <i>Industrial Reflection</i>
          </figcaption>
        </figure>
        <figure className="flex flex-col gap-y-1">
          <a href="/photography/japan/botanical-orchid.jpg" target="_blank">
            <Image
              src="/photography/japan/botanical-orchid.jpg"
              width={400}
              height={400}
              alt="Botanical Orchid"
            />
          </a>
          <figcaption className="text-sm text-gray-500">
            <i>Botanical Orchid</i>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default WorkPage;

import { NextPage } from "next";
import { BandcampWidget } from "../_ui/bandcamp-widget";

const WorkPage: NextPage = () => {
  return (
    <div className="size-full flex flex-col gap-y-6">
      <h1 className="font-display text-2xl font-medium pb-2">My Work</h1>
      <div className="flex flex-col gap-y-3">
        <h2 className="font-display text-lg font-bold">Code</h2>
        <p className="italics">Coming soon...</p>
      </div>
      <div className="flex flex-col gap-y-3">
        <h2 className="font-display text-lg font-bold">Music</h2>
        <p>
          Creating music has been a formative experience for me, and continues
          to be the primary way I express myself. I used to{" "}
          <a
            href="https://soundcloud.com/4-loop"
            className="underline"
            target="_blank"
          >
            post my tracks to SoundCloud,
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
        <h2 className="font-display text-lg font-bold">
          Photography + drawings
        </h2>
        <p className="italics">Coming soon...</p>
      </div>
    </div>
  );
};

export default WorkPage;

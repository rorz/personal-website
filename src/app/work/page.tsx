import { NextPage } from "next";
import { BandcampWidget } from "../_ui/bandcamp-widget";
import Image from "next/image";
import { FunctionComponent, ReactNode } from "react";
import { cx } from "class-variance-authority";

interface FigureProps {
  children: ReactNode;
  caption?: string;
}

const Figure: FunctionComponent<FigureProps> = ({ children, caption }) => {
  return (
    <figure className="flex flex-col gap-y-1">
      {children}
      <figcaption className="text-sm text-gray-500">
        <i>{caption}</i>
      </figcaption>
    </figure>
  );
};

interface SectionProps {
  title: string;
  children: ReactNode | ReactNode[];
}

const Section: FunctionComponent<SectionProps> = ({ children, title }) => {
  return (
    <div className="flex flex-col gap-y-3">
      <h2 className="font-display text-xl font-light">{title}</h2>
      {children}
    </div>
  );
};

interface PhotoSectionProps {
  title: string;
  photos: {
    title: string;
    url: string;
    className?: string;
  }[];
}

const PhotoSection: FunctionComponent<PhotoSectionProps> = ({
  title,
  photos,
}) => {
  return (
    <div className="flex flex-col gap-y-3">
      <h3 className="font-display text-lg font-bold">{title}</h3>
      <div className="flex flex-col gap-y-2">
        {photos.map((photo) => (
          <Figure key={photo.url} caption={photo.title}>
            <a href={photo.url} target="_blank">
              <Image
                src={photo.url}
                width={400}
                height={600}
                alt={photo.title}
                className={cx(photo.className)}
              />
            </a>
          </Figure>
        ))}
      </div>
    </div>
  );
};

const WorkPage: NextPage = () => {
  return (
    <div className="size-full flex flex-col gap-y-6">
      <h1 className="font-display text-2xl font-bold pb-2">Work</h1>
      <Section title="Music">
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
        <Figure caption="This track is a combination of ElevenLabs music generation and the Paulstretch algorithm">
          <BandcampWidget trackId={1333294678} />
        </Figure>
        <Figure caption="I wrote this track at the end of summer 2023.">
          <BandcampWidget trackId={1287360924} />
        </Figure>
      </Section>
      <Section title="Web">
        <p>What's up</p>
      </Section>
      <Section title="Artwork">
        <PhotoSection
          title="Pens"
          photos={[
            {
              url: "/artwork/ringolevio.jpg",
              title: "Ringolevio (NYC)",
              className: "border-16 border-black",
            },
            {
              url: "/artwork/seoul-tower.jpg",
              title: "Tower (Seoul)",
              className: "border-16 border-black",
            },
            {
              url: "/artwork/borough-church.jpg",
              title: "Church (Borough)",
              className: "border-16 border-black",
            },
          ]}
        />
      </Section>
      <Section title="Film">
        <Figure caption="nara (2025)">
          <video controls>
            <source src="/film/nara.m4v" />
          </video>
        </Figure>
        <Figure caption="hiroshima (2025)">
          <video controls>
            <source src="/film/hiroshima.m4v" />
          </video>
        </Figure>
      </Section>

      <Section title="Photography">
        <PhotoSection
          title="Japan (2025, ongoing)"
          photos={[
            {
              url: "/photography/japan/conductor.jpg",
              title: "Conductor",
              className: "border-2 border-black",
            },
            {
              url: "/photography/japan/train-view.jpg",
              title: "Train View",
              className: "border-2 border-black",
            },
            {
              url: "/photography/japan/gallery-room.jpg",
              title: "Gallery Room",
              className: "border-2 border-black",
            },
            {
              url: "/photography/japan/gallery-smoke.jpg",
              title: "Gallery Smoke",
              className: "border-2 border-black",
            },
            {
              url: "/photography/japan/looking-down.jpg",
              title: "Looking Down",
              className: "border-2 border-black",
            },
            {
              url: "/photography/japan/go-down.jpg",
              title: "Go Down",
              className: "border-2 border-black",
            },
            {
              url: "/photography/japan/kyoto-clock.jpg",
              title: "Kyoto Clock",
              className: "border-2 border-black",
            },
            {
              url: "/photography/japan/kyoto-roof.jpg",
              title: "Kyoto Roof",
              className: "border-2 border-black",
            },
            {
              url: "/photography/japan/kyoto-tower.jpg",
              title: "Kyoto Tower",
              className: "border-2 border-black",
            },

            {
              url: "/photography/japan/fishes-in-glasshouses.jpg",
              title: "Fishes in Glasshouses",
              className: "border-2 border-black",
            },
            {
              url: "/photography/japan/shibuya-hd.jpg",
              title: "Shibuya HD",
              className: "border-2 border-black",
            },
          ]}
        />
      </Section>
      <p className="text-sm font-bold text-zinc-700">
        Media on this page -- © All rights reserved unless otherwise specified.
      </p>
    </div>
  );
};

export default WorkPage;

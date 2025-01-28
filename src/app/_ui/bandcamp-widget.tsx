import { FunctionComponent } from "react";

interface BandcampWidgetProps {
  trackId: number;
}

export const BandcampWidget: FunctionComponent<BandcampWidgetProps> = ({
  trackId,
}) => {
  const iframeSrc = `https://bandcamp.com/EmbeddedPlayer/track=${trackId}/size=large/bgcol=ffffff/linkcol=333333/tracklist=false/artwork=small/transparent=true/`;

  return (
    <iframe className="border-none w-full h-[120px]" src={iframeSrc} seamless />
  );
};

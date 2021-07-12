import React from "react";

import { Container, InviteIcon, SettingsIcon, SpeakerIcon } from "./styles";

export interface Props {
  channelName: string;
  selected?: boolean;
}

const ChannelButtonVolume: React.FC<Props> = ({ channelName, selected }) => {
  return (
    <Container className={selected ? "active" : ""}>
      <div>
        <SpeakerIcon />
        <span>{channelName}</span>
      </div>
      <div>
        <InviteIcon />
        <SettingsIcon />
      </div>
    </Container>
  );
};

export default ChannelButtonVolume;

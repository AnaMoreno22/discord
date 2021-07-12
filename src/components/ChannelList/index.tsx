import React from "react";

import ChannelButton from "../ChannelButton";
import ChannelButtonVolume from "../ChannelButton";

import { Container, Category, AddCategoryIcon } from "./styles";

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="Musica" />
      <ChannelButton channelName="Chat" />
      <ChannelButtonVolume channelName="Amingos" />
      <ChannelButton channelName="Jogos" />
    </Container>
  );
};

export default ChannelList;

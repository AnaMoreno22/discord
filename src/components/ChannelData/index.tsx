import React, { useRef, useEffect } from "react";

import ChannelMessage, { Mention } from "../ChannelMessage";

import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) div.scrollTop = div.scrollHeight;
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        <ChannelMessage
          author="Dudda Campos"
          date="21/06/2021"
          content="ta bugado o meu audio "
        />
        <ChannelMessage
          author="Gomes"
          date="21/06/2021"
          content="Não aguento mais vocês "
        />
        <ChannelMessage
          author="Dudda Campos"
          date="21/06/2021"
          content="como que arruma? "
        />
        <ChannelMessage
          author="Ana Moreno"
          date="21/06/2021"
          content={
            <>
              <Mention>@Dudda Campos</Mention>, vê o whats
            </>
          }
          hasMention
        />

        <ChannelMessage
          author="Marcos Will"
          date="21/06/2021"
          content={
            <>
              <Mention>@Ana Moreno</Mention>, passa a call
            </>
          }
          hasMention
        />
        <ChannelMessage
          author="Ana Moreno"
          date="21/06/2021"
          content={
            <>
              <Mention>@Marcos Will</Mention> um momento
            </>
          }
          hasMention
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder=" #chat" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;

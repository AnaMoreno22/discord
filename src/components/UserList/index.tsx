import React from "react";

import { Container, Role, User, Avatar } from "./styles";

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? "bot" : ""} />
      <strong>{nickname}</strong>
      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 6</Role>
      <UserRow nickname="Ana Moreno" />
      <UserRow nickname="Marcos Will" />
      <UserRow nickname="Dudda Campos" />
      <UserRow nickname="Musica" isBot />
      <UserRow nickname="Gomes" />
      <UserRow nickname="Fritz" />

      <Role>offline - 15</Role>
      <UserRow nickname="Lais" />
      <UserRow nickname="Gaby" />
      <UserRow nickname="Laurinha" />
      <UserRow nickname="Paulin" />
      <UserRow nickname="Emily" isBot />
      <UserRow nickname="Dudinha" />
      <UserRow nickname="Jean" />
      <UserRow nickname="Leo" />
      <UserRow nickname="Dani" />
      <UserRow nickname="Jutex" />
      <UserRow nickname="Gigi" />
      <UserRow nickname="Gabizinha" />
      <UserRow nickname="Matheus" />
      <UserRow nickname="William" isBot />
      <UserRow nickname="Junior" />
    </Container>
  );
};

export default UserList;

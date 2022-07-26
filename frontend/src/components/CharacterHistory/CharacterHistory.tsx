import React from "react";
import { Character } from "../../interfaces/Character";
import { Btn, Container, Img, Row, Text } from "./CharacterHistory.style";

const CharacterHistory: React.FC<{
  history: Character[];
  onClick: (id: number) => void;
}> = ({ history, onClick }) => {
  const characters = history.map(({ image, name, id }) => (
    <Row>
      <Img src={image} />
      <Text fontSize="1.5em">{name}</Text>
      <Btn onClick={() => onClick(id)}>View</Btn>
    </Row>
  ));

  return (
    <Container width="100%">
      <Text fontSize="3em">History</Text>
      <Container width="80%">{characters}</Container>
    </Container>
  );
};

export default CharacterHistory;

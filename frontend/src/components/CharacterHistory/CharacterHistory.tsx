import React from "react";
import { Character } from "../../interfaces/Character";
import {
  Btn,
  Container,
  DataContainer,
  Img,
  Row,
  Text,
} from "./CharacterHistory.style";

const CharacterHistory: React.FC<{
  history: Character[];
  onClick: (id: number) => void;
}> = ({ history, onClick }) => {
  const characters = history.map(({ image, name, id }) => (
    <Row key={id}>
      <DataContainer>
        <Img src={image} />
        <Text fontSize="1.5em" margin="0 0.5em">
          {name}
        </Text>
      </DataContainer>
      <Btn onClick={() => onClick(id)}>View</Btn>
    </Row>
  ));

  return (
    <Container width="100%">
      {!!history.length && (
        <Text fontSize="3em" margin="0 1em 1em">
          History
        </Text>
      )}
      <Container width="70%">{characters}</Container>
    </Container>
  );
};

export default CharacterHistory;

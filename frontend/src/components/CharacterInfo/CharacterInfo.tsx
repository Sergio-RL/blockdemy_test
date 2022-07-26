import React from "react";
import { Character } from "../../interfaces/Character";
import {
  CharacterData,
  Container,
  Img,
  Row,
  Heading,
  Text,
  Hr,
} from "./CharacterInfo.style";

const CharacterInfo: React.FC<{ character: Character | undefined }> = ({
  character,
}) => {
  // This constants are like computed in Vue
  const data = [
    { text: "Status:", value: character?.status || "unknown" },
    { text: "Species:", value: character?.species },
    { text: "Type:", value: character?.type || "unknown" },
    { text: "Gender:", value: character?.gender },
    { text: "Origin:", value: character?.origin },
    { text: "Location:", value: character?.location },
    { text: "Created At:", value: character?.created.toDateString() },
  ];

  const rows = data.map(({ text, value }, i) => (
    <>
      {i ? <Hr width="90%" margin="5%" /> : null}
      <Row>
        <b>{text}</b> <Text>{value}</Text>
      </Row>
    </>
  ));

  return !character ? (
    <Text fontSize="2em" padding="4em" textAlign="center">
      No se ha cargado ningún personaje
    </Text>
  ) : (
    <Container>
      <Img src={character?.image} />
      <CharacterData>
        <Heading>
          <Text fontSize="1.25em" fontWeight="900">
            {character?.name}
          </Text>
          <Text fontSize="0.7em" fontWeight="900">
            CHARACTER ID: {character?.id}
          </Text>
        </Heading>
        <Hr />
        {rows}
      </CharacterData>
    </Container>
  );
};

export default CharacterInfo;

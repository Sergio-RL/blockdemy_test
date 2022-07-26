import React, { useEffect, useState } from "react";
import { client } from "../../apollo.config";
import CharacterHistory from "../../components/CharacterHistory/CharacterHistory";
import CharacterInfo from "../../components/CharacterInfo/CharacterInfo";
import { Character } from "../../interfaces/Character";
import { Button, Navbar } from "./Characters.style";
import { CHARACTER } from "./query";

const Characters: React.FC = () => {
  const [history, setHistory] = useState<Character[]>([]);
  const [currentCharacter, setCurrentCharacter] = useState<Character>();

  const generateRandomNumber = (): number => {
    const ids = history.map(({ id }) => id);
    const max = 826;
    let randomNumber = Math.floor(Math.random() * max) + 1;
    if (max === ids.length) throw new Error("Max elements reached");
    return ids.includes(randomNumber) ? generateRandomNumber() : randomNumber;
  };

  const fetchCharacter = async () => {
    const randomNumber = generateRandomNumber();
    const {
      data: { character },
      loading,
    } = await client.query({
      query: CHARACTER,
      variables: { id: randomNumber },
    });

    const characterData = {
      ...character,
      location: character.location.name,
      origin: character.origin.name,
      episode: character.episode.map(({ name }: { name: string }) => name),
      created: new Date(character.created),
    };
    setCurrentCharacter(characterData);
    // setHistory((old) => [...old, characterData]);
  };

  return (
    <div>
      <Navbar>
        Rick and Morty Characters{" "}
        <Button onClick={fetchCharacter}>GENERATE</Button>{" "}
      </Navbar>
      <CharacterInfo character={currentCharacter} />
      <CharacterHistory />
    </div>
  );
};

export default Characters;

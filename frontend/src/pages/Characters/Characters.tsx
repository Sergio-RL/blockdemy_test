import React, { useEffect, useState } from "react";
import { client } from "../../apollo.config";
import CharacterHistory from "../../components/CharacterHistory";
import CharacterInfo from "../../components/CharacterInfo";
import { Character } from "../../interfaces/Character";
import { Navbar } from "./Characters.style";
import { CHARACTER } from "./query";

const Characters: React.FC = () => {
  const [history, setHistory] = useState<Character[]>([]);
  const [loadingData, setLoadingData] = useState<boolean>(false);
  const [characterId, setCharacterId] = useState<number>();

  const currentCharacter = history.find(
    ({ id }: Character) => id === characterId
  );

  const generateRandomNumber: () => number = (): number => {
    const ids = history.map(({ id }) => id);
    const max = 826;
    let randomNumber = Math.floor(Math.random() * max) + 1;
    if (max === ids.length) throw new Error("Max elements reached");
    return ids.includes(randomNumber) ? generateRandomNumber() : randomNumber;
  };

  const fetchCharacter = async () => {
    const randomNumber = generateRandomNumber();
    setLoadingData(true);
    const {
      data: { character },
      loading,
    } = await client.query({
      query: CHARACTER,
      variables: { id: randomNumber },
    });
    setLoadingData(loading);
    setHistory((old) => [
      {
        ...character,
        location: character.location.name,
        origin: character.origin.name,
        episode: character.episode.map(({ name }: { name: string }) => name),
        created: new Date(character.created),
      },
      ...old,
    ]);
  };

  useEffect(() => {
    const { id } = history[0] || 0;
    setCharacterId(id);
  }, [history]);

  const onClick = (id: number) => {
    setCharacterId(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <Navbar>Rick and Morty Characters </Navbar>
      <CharacterInfo
        character={currentCharacter}
        generateCharacter={fetchCharacter}
        loadingData={loadingData}
      />
      <CharacterHistory history={history} onClick={onClick} />
    </div>
  );
};

export default Characters;

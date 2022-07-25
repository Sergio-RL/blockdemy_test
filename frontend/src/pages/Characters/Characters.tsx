import { gql } from "@apollo/client";
import React, { useCallback, useEffect, useState } from "react";
import { client } from "../../apollo.config";
import CharacterHistory from "../../components/CharacterHistory/CharacterHistory";
import CharacterInfo from "../../components/CharacterInfo/CharacterInfo";
import { Character } from "../../interfaces/Character";
import { Navbar } from "./Characters.style";

const Characters: React.FC = () => {
  const [history, setHistory] = useState<Character[]>([]);
  const [currentCharacter, setCurrentCharacter] = useState<Character>();

  const fetchCharacter = useCallback(async () => {
    const {
      data: { character },
    } = await client.query({
      query: gql`
        {
          character(id: 1) {
            id
            name
            status
            species
            type
            gender
            origin {
              name
            }
            location {
              name
            }
            image
            episode {
              name
            }
            created
          }
        }
      `,
    });
    const characterData = {
      ...character,
      location: character.location.name,
      origin: character.origin.name,
      episode: character.episode.map(({ name }: { name: string }) => name),
      created: new Date(character.created),
    };
    setCurrentCharacter(characterData);
    setHistory((old) => [...old, characterData]);
  }, [setCurrentCharacter]);

  useEffect(() => {
    fetchCharacter();
  }, [fetchCharacter]);

  useEffect(() => {
    console.log(currentCharacter?.created);
  }, [currentCharacter]);

  return (
    <div>
      <Navbar>Rick and Morty Characters</Navbar>
      <CharacterInfo />
      <CharacterHistory />
    </div>
  );
};

export default Characters;

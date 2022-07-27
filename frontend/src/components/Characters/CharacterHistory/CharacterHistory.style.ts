import styled from "styled-components";
import { TextParams } from "../../../interfaces/TextParams";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${({ width }: { width: string }) => width || "100%"};
`;

export const Row = styled.div`
  width: 100%;
  background-color: #141414;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1em;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0px 0px 10px grey;
  }
`;

export const DataContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Img = styled.img`
  width: 6em;
`;

export const Text = styled.p`
  font-weight: 900;
  font-size: ${({ fontSize }: TextParams) => fontSize || "1em"};
  margin: ${({ margin }: TextParams) => margin || 0};
`;

export const Btn = styled.button`
  margin-right: 1em;
  padding: 0.75em 1em;
  font-size: 1.25em;
  border-radius: 9px;
  border: none;
`;

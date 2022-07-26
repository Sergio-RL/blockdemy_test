import styled from "styled-components";
import { TextParams } from "../../interfaces/TextParams";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${({ width }: { width: string }) => width || "100%"};
`;

export const Row = styled.div`
  background-color: #141414;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Img = styled.img`
  width: 7em;
`;

export const Text = styled.p`
  font-weight: 900;
  font-size: ${({ fontSize }: TextParams) => fontSize || "1em"};
`;

export const Btn = styled.button`
  padding: 1em 1.5em;
  border-radius: 9px;
  border: none;
`;

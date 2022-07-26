import styled from "styled-components";

interface TextParams {
  margin?: string;
  padding?: string;
  fontSize?: string;
  fontWeight?: string;
  textAlign?: "center" | "left" | "right";
}

interface HrParams {
  margin?: string;
  width?: string;
}

export const Heading = styled.div`
  margin: 0.5em 1em;
`;

export const Text = styled.p`
  margin: ${({ margin }: TextParams) => margin || "0"};
  padding: ${({ padding }: TextParams) => padding || "0"};
  font-size: ${({ fontSize }: TextParams) => fontSize || "1em"};
  font-weight: ${({ fontWeight }: TextParams) => fontWeight || "500"};
  text-align: ${({ textAlign }: TextParams) => textAlign || "left"};
`;

export const Container = styled.div`
  display: flex;
  padding: 2em;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
`;

export const CharacterData = styled.div`
  display: flex;
  background-color: #141414;
  flex-direction: column;
  width: 27em;
`;

export const Row = styled.div`
  padding: 0.25em 1em;
  display: flex;
  justify-content: space-between;
`;

export const Hr = styled.hr`
  height: 2px;
  margin: 0 ${({ margin }: HrParams) => margin};
  width: ${({ width }: HrParams) => width || "100%"};
  color: gray;
  background-color: #888;
  border: none;
`;

export const Img = styled.img`
  border-radius: 3em;
  width: 30em;
  margin: 0 2em 2em;
  @media (min-width: 601px) and (max-width: 1000px) {
    width: 17em;
  }
  @media (max-width: 600px) {
    width: 10em;
  }
`;

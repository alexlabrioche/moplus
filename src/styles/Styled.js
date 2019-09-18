import styled, { css } from 'styled-components';

const StyledApp = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledHome = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 1rem 0;
`;

const StyledCell = styled.div`
  height: 2.6rem;
  width: 2.6rem;
  border-radius: 50%;
  color: grey;
  font-weight: 700;
  font-size: 1.5rem;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.35rem solid white;
  box-shadow: 4px 4px 4px rgba(0,0,0,0.2);
  transition: all 0.3 ease-in-out;
  ${(p) =>
    p.actions.isUnknown &&
    css`
      border: 0.35rem solid grey;
      transition: all 0.3 ease-in-out;
    `}
  ${(p) =>
    p.actions.isGood &&
    css`
      border: 0.35rem solid yellow;
      transition: all 0.3 ease-in-out;
    `}
  ${(p) =>
    p.actions.isPerfect &&
    css`
      border: 0.35rem solid green;
      transition: all 0.3 ease-in-out;
    `}
  ${(p) =>
    p.actions.isWrong &&
    css`
      border: 0.35rem solid red;
      transition: all 0.3 ease-in-out;
    `}
  ${(p) =>
    p.actions.oldRow &&
    css`
      opacity: 0.5;
      box-shadow: none;
      transition: all 0.3 ease-in-out;
    `}
  ${(p) =>
    p.actions.prevRow &&
    css`
      box-shadow: none;
      transition: all 0.3 ease-in-out;
    `}
  ${(p) =>
    p.actions.nextRow &&
    css`
      border: 0.35rem solid lightgrey;
      box-shadow: none;
      transition: all 0.3 ease-in-out;
    `}
`;

const StyledFireEndGame = styled.div`
  height: 100vh;
  width: 100vw;
  z-index: 10;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 10vw;
  }
  h3 {
    font-size: 4vw;
  }
  .result-container {
    height: 75%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: white;
    ${(p) =>
      p.isWon
        ? css`
            background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
          `
        : css`
            background-image: linear-gradient(
              to right,
              #f78ca0 0%,
              #f9748f 19%,
              #fd868c 60%,
              #fe9a8b 100%
            );
          `};
  }
`;
export { StyledApp, StyledHome, StyledRow, StyledCell, StyledFireEndGame };

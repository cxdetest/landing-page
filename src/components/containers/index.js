import styled from 'styled-components';

//Containers
export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 40px;
  text-align: justify;
  padding: 80px;

  @media (max-width: 768px) {
    flex-flow: column wrap;
    gap: 40px 0;
  }
`;
export const GridContainer = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const FlexContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 20px;

  @media (max-width: 768px) {
    flex-flow: column wrap;
    width: 100%;
    height: auto;
  }
`;
export const MediumContainer = styled.section`
  min-height: 100vh;
  width: 50%;
`;

//Target
export const Card = styled.section`
  background: rgb(33, 33, 33);
  padding: 10px;
  border-radius: 10px;
  height: 40vh;
  width: 25vw;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 80%;
    margin: 20px auto;
  }
`;

//Button
export const Button = styled.button`
  padding: 10px 15px;
  background-color: rgb(33, 33, 33);
  border-radius: 10px;
  color: aliceblue;
  cursor: pointer;

  &:hover {
    color: rgb(22, 122, 209);
  }
`;

//ProgressBar
export const ProgressBar = styled.section.attrs((props) => ({
  style: {
    width: props.w + '%',
  },
}))`
  position: fixed;
  top: 0;
  height: 5px;
  background-color: rgb(22, 122, 209);

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

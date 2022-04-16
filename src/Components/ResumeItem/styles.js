import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  padding: 5px 15px;
  width: 30%;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);

  @media (max-width: 750px) {
    width: 20%;

  p {
    font-size: 12px;
  }

  span {
    font-size: 20px;
  }

  svg {
      display: none;
  }
}
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  gap: 10px;

  svg {
    width: 24px;
    height: 24px;
    color: #495057;
  }
`;

export const HeaderTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #495057;
`;

export const Total = styled.span`
  font-size: 30px;
  font-weight: bold;
  color: #3a86ff;
`;

import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  margin: 20px auto;
  width: 98%;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  padding: 15px 0px;
  gap: 10px;

  @media (max-width: 768px) {
    display: grid;
  }
`;

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label``;

export const Input = styled.input`
  outline: none;
  border-radius: 10px;
  padding: 5px 10px;
  font-size: 15px;
  border: 1px solid #e2eafc;
`;

export const RadioGorup = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  font-weight: 500;

  input {
    margin-left: 20px;
    margin-right: 5px;
    accent-color: #3a86ff;
    margin-top: 0;
    cursor: pointer;
  }
`;

export const Button = styled.button`
  padding: 5px 10px;
  font-weight: 600;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  color: #fff;
  background-color: #3a86ff;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0466c8;
  }
`;

import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

interface IPageProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected: string;
}

export const Container = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5rem;
`;

export const Page = styled.button`
  background: none;
  border: none;

  font-family: Poppins, sans-serif;
  font-size: 1.4rem;
  font-weight: bold;

  color: ${(props: IPageProps) =>
    props.children?.toString().toLowerCase() === props.selected
      ? "#0077e4"
      : "inherit"};

  transition: 0.2s;

  &:hover {
    color: #3096f2;
  }
`;

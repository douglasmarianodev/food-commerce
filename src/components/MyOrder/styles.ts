import { darken } from 'polished';
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  position:  absolute;
  right: 1.5rem;
  top: 0.5rem;
  z-index: 999;

  background: ${({theme}) => theme.colors.red};
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;

  display: flex;
  gap: .5rem;
  align-items: center;

  transition: background 0.3s;

  &:hover {
    background: ${darken(0.1, '#aa2424')};
  }

  span {
    font-weight: 500;
  }

  span:last-child {
    color: ${({theme})=> theme.colors.yellow}
  }

  @media (max-width: 720px) {
    span:first-child {
      display: none;
    }
  }
`

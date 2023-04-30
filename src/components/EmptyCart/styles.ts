import styled from "styled-components";
import { Link } from "react-router-dom";
import { darken } from "polished";
export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  padding: 1.125rem;

  h2 {
    max-width: 500px;
    font-size: 2rem;
  }

  img {
    width: 100%;
    max-width: 32rem;
  }
`

export const Button = styled(Link)`
  display: block;

  background: ${({theme})=> theme.colors.red};
  width: 100%;
  max-width: 10rem;
  height: 3rem;

  border-radius: 8px;
  margin: 1rem 0;
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 3rem;
  transition: background .3s;

  &:hover {
    background: ${darken(0.1, "#aa2424")};
  }
`

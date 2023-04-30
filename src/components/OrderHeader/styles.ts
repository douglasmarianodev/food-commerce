import styled from "styled-components";

export const Container = styled.header`
  margin-bottom: 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 8rem;
  }

  > div {
    display: flex;
    gap: .5rem;

    align-items: center;

    div {
      text-align: right;

      h3 {
        margin-bottom: .125rem;
        font-weight: 500;
        color: ${({theme})=> theme.colors.white};
      }

      span {
        color: ${({theme}) => theme.colors.yellow};
        strong {
          font-weight: 500;
          font-size: 1.25rem;
        }
      }
    }

  }
`

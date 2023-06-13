import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* min-width: 360px; */
  width: 100%;
  height: 100%;
  background-color: ${ ( {theme} ) => theme.bgColor };
`
export const Card = styled.div`
  position: relative;
  min-width: 35%;
  padding: 2rem 1rem;
  background-image: linear-gradient(to right bottom,
    ${ ( {theme} ) => theme.cardColor1 },
    ${ ( {theme} ) => theme.cardColor2 }),url(${ ( {theme} ) => theme.cardImage });
  background-size: cover;
  box-shadow: ${ ( {theme} ) => theme.boxShadow };
  border-radius: 5px;
` 


export const SearchLocation = styled.div`
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;

  .location, .search {
    font-size: var(--fs-big-100);
    color: ${ ( {theme} ) => theme.titleColor };
  }

  .search {
    cursor: pointer;
  }

`

export const Input = styled.select`
  font-size: var(--fs-big-basic);
  color: ${ ( {theme} ) => theme.titleColor };
  border: none;
  border-bottom: 1px solid ${ ( {theme} ) => theme.titleColor };
  background-color: transparent;

  :focus {
    outline: none;
  }
  
`
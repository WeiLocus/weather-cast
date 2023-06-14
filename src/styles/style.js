import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  position: relative;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;

  .search {
    font-size: var(--fs-big-100);
    color: ${ ( {theme} ) => theme.titleColor };
    cursor: pointer;

    :hover {
      transform: scale(1.1);
    }
  }

  .wrapper {
    width: 25%;
    z-index: 0;
    
    &::after {
      content: '';
      border-style: solid;
      border-width: 7px 4px 0 4px;
      border-color: ${ ( {theme} ) => theme.titleColor } transparent transparent transparent;
      position: absolute;
      top: 50%;
      /*以自己y軸的高度，移動-50%*/
      transform: translateY(-50%);
      z-index: -1;
    }
  }
`

export const Input = styled.select`
  -webkit-appearance: none;
  padding-right: 3px;
  height: 2rem;
  font-size: var(--fs-big-basic);
  color: ${ ( {theme} ) => theme.titleColor };
  border: none;
  background-color: transparent;
  cursor: pointer;

  :focus {
    outline: none;
  }
`

export const StyleLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${ ( {theme} ) => theme.bgColor };

  svg {
    width: 5rem;
    height: auto;
    color: ${ ( {theme} ) => theme.titleColor };
  }
`

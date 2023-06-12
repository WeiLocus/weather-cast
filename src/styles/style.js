import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 360px;
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

export const TopCard = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`

export const BottomCard = styled.div`
  margin-bottom: 1rem;
  color: ${ ( {theme} ) => theme.textColor };
`


export const Location = styled.div`
  margin-bottom: 1.2rem;
  font-size: var(--fs-big-200);
  color: ${ ( {theme} ) => theme.titleColor };
`

export const Temperature = styled.div`
  display: flex;
  color: var(--color-temp);
  font-size: var(--fs-big-500);
  font-weight: 300;
`;

export const Description = styled.div`
  margin-bottom: 1.875rem;
  font-size: var(--fs-basic);

`;

export const Celsius = styled.div`
  font-weight: normal;
  font-size: var(--fs-big-300);
`;

export const AirFlow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.25rem;
  font-size: var(--fs-basic);
  font-weight: 300;
    
  svg {
    width: 1.6rem;
    height: auto;
    margin-right: 0.6rem;
  }
`;

export const Rain = styled.div`
  display: flex;
  align-items: center;
  font-size: var(--fs-basic);
  font-weight: 300;

  svg {
    width: 1.6rem;
    height: auto;
    margin-right: 0.6rem;
  }
`;

export const Refresh = styled.div`
  position: absolute;
  right: 1rem;
  bottom: 0.8rem;
  display: inline-flex;
  align-items: flex-end;
  font-size: var(--fs-small);

  svg {
    width: 1.2rem;
    height: auto;
    margin-left: 0.3rem;
  }

`;

export const ThemeIcon = styled.div`
  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: .5;
    }
  }

  svg {
    position: absolute;
    bottom: 0.6rem;
    left: 1rem;
    font-size: var(--fs-big-100);
    color: ${ ( {theme} ) => theme.textColor };

    &:hover {
      animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
      color: #c54d4d;
    }
  }
`
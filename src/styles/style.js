import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 360px;
  height: 100%;
  background-color: var(--color-bg);
`
export const Card = styled.div`
  position: relative;
  min-width: 35%;
  padding: 2rem 1rem;
  background-image: linear-gradient(to right bottom,
    rgba(114,185,220, 0.4),
    rgba(238,238,238, 0.4)),url("./images/bg-card.jpg");
  background-size: cover;
  box-shadow: 0 0.3rem 0.6rem 0 #999999;
  border-radius: 5px;
` 

export const TopCard = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`

export const BottomCard = styled.div`
  color: var(--color-secondary);
`

export const Location = styled.div`
  margin-bottom: 1.2rem;
  font-size: var(--fs-big-100);
  color: #212121;
`

export const Temperature = styled.div`
  color: var(--color-temp);
  font-size: var(--fs-big-500);
  font-weight: 300;
  display: flex;
`;

export const Description = styled.div`
  font-size: var(--fs-basic);
  margin-bottom: 1.875rem;
`;

export const Celsius = styled.div`
  font-weight: normal;
  font-size: var(--fs-big-200);
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
  bottom: 1rem;
  display: inline-flex;
  align-items: flex-end;
  font-size: var(--fs-small);

  svg {
    width: 1.2rem;
    height: auto;
    margin-left: 0.3rem;
  }
  
`;
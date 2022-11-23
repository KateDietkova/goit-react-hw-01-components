import styled from 'styled-components';



export const FriendListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.space[3] + 4}px;
  align-items: center;
  border-radius: ${props => props.theme.radii.normal};
`;
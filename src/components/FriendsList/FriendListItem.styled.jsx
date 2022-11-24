import styled from 'styled-components';


export const FriendItemStyled = styled.li`
  display: flex;
  align-items: center;
  min-width: 200px;
  padding-left: ${props => props.theme.space[4]}px;
  padding-right: ${props => props.theme.space[4]}px;
  padding-top: ${props => props.theme.space[2]}px;
  padding-bottom: ${props => props.theme.space[2]}px;
  border-radius: ${props => props.theme.radii.normal};
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0px 2px 3px 1px #888888;
`;


export const Status = styled.span`
  border-radius: ${props => props.theme.radii.round};
  width: 15px;
  height: 15px;
  background-color: ${props => {
    return props.status
      ? props.theme.colors.online
      : props.theme.colors.offline;
  }};
  margin-right: ${props => props.theme.space[3]}px;
`;

export const FriendAvatar = styled.img`
  border-radius: ${props => props.theme.radii.roundedSquere};
  margin-right: ${props => props.theme.space[3]}px;
  width: 48px;
  height: 48px;
  box-shadow: 0px 1px 4px -1px;
`;

export const FriendName = styled.p`
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.medium};
`;

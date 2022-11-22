import styled from 'styled-components';
import { StatsItem } from 'components/Profile/Profile.styled';

export const Title = styled.h2`
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => props.theme.fontSizes.l};
  padding: ${props => props.theme.space[5]}px;
  text-transform: upperCase;
  text-align: center;
  color: ${props => props.theme.colors.title};
`;

export const StatList = styled.ul`
  display: flex;
`;


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


export const StatInfo = styled(StatsItem)`
  width: calc(100% / 4);
  padding-left: ${props => props.theme.space[3]}px;
  padding-right: ${props => props.theme.space[3]}px;
  font-size: ${props => props.theme.fontSizes.xs};
  color: ${props => props.theme.colors.white};
  background-color: ${getRandomHexColor};
  border: ${props => props.theme.borders.none};
`;

export const StatPercentage = styled.span`
  font-size: ${props => props.theme.fontSizes.m};
  margin-top: ${props => props.theme.space[2]}px;
`;

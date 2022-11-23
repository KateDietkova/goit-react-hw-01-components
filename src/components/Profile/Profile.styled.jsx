import styled from 'styled-components';

export const Avatar = styled.img`
  border-radius: ${props => props.theme.radii.round};
  width: 100px;
  height: 100px;
  margin-bottom: ${props => props.theme.space[4]}px;
`;

export const Name = styled.p`
  font-size: ${props => props.theme.fontSizes.l};
  font-weight: ${props => props.theme.fontWeights.bold};
  margin-bottom: ${props => props.theme.space[2]}px;
  color: ${props => props.theme.colors.text};
`;

export const Tag = styled.p`
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.medium};
  margin-bottom: ${props => props.theme.space[3]}px;
  color: ${props => props.theme.colors.secondary};
`;

export const Location = styled(Tag)`
  margin-bottom: ${props => props.theme.space[0]}px;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% / 3);
  font-size: ${props => props.theme.fontSizes.s};
  padding-top: ${props => props.theme.space[4]}px;
  padding-bottom: ${props => props.theme.space[4]}px;
  padding-left: ${props => props.theme.space[3]}px;
  padding-right: ${props => props.theme.space[3]}px;
  border: ${props => props.theme.borders.normal};
  border-color: ${props => props.theme.colors.borderColor};

  color: ${props => props.theme.colors.secondary};
`;

export const StatsQuantity = styled.span`
  margin-top: ${props => props.theme.space[2]}px;
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.text};
`;

import styled from 'styled-components';

export const TransactionHistoryStyled = styled.table`
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${props => props.theme.space[4]}px;
  background-color: ${props => props.theme.colors.white};
  border-collapse: collapse;
  width: 600px;
  border-radius: ${props => props.theme.radii.normal};
  box-shadow: 0px 5px 9px -3px;
`;

export const TableHead = styled.thead`
  background-color: ${props => props.theme.colors.accent};
`;

export const TableHeadItem = styled.th`
  border-right: ${props => props.theme.borders.normal};
  border-color: ${props => props.theme.colors.borderColor};
  padding-top: ${props => props.theme.space[4]}px;
  padding-bottom: ${props => props.theme.space[4]}px;
  padding-left: ${props => props.theme.space[4]}px;
  padding-right: ${props => props.theme.space[4]}px;
  width: calc(100% / 3);
  text-align: center;
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.xs};
  letter-spacing: 1.5px;
`;

export const TransactionHistoryRow = styled.tr`
  border: ${props => props.theme.borders.normal};
  border-color: ${props => props.theme.colors.borderColor};

  &:not(:first-child):nth-last-child(2n + 1) {
    background-color: ${props => props.theme.colors.backgroundTable};
  }
`;

export const TransactionHistoryColumn = styled.td`
  border-right: ${props => props.theme.borders.normal};
  border-color: ${props => props.theme.colors.borderColor};
  padding-top: ${props => props.theme.space[3]}px;
  padding-bottom: ${props => props.theme.space[3]}px;
  padding-left: ${props => props.theme.space[4]}px;
  padding-right: ${props => props.theme.space[4]}px;
  width: calc(100% / 3);
  color: ${props => props.theme.colors.secondary};
  font-size: ${props => props.theme.fontSizes.xs};

  text-align: center;

  &:first-child {
    padding-left: ${props => props.theme.space[7]}px;
    text-align: left;
  }
`;

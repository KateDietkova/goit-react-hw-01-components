import { TransactionHistoryColumn } from './TransactionHistory.styled';

export const TransactionHistoryItem = ({
  item: { type, amount, currency },
}) => {
  return (
    <>
      <TransactionHistoryColumn>{toUpperCaseType(type)}</TransactionHistoryColumn>
      <TransactionHistoryColumn>{amount}</TransactionHistoryColumn>
      <TransactionHistoryColumn>{currency}</TransactionHistoryColumn>
    </>
  );
};



function toUpperCaseType(type) {
    const wordSplit = type.split("");
    const firstLetter = wordSplit[0].toUpperCase();
    wordSplit.splice(0, 1);
    return [firstLetter, ...wordSplit].join("");
}
import { Box } from 'components/Box/Box';
import {
  Title,
  StatList,
  StatInfo,
  StatPercentage,
} from 'components/Statistics/Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Box
      bg="white"
      display="flex"
      flexDirection="column"
      width="300px"
      mr="auto"
      ml="auto"
      borderRadius="normal"
      fontFamily="body"
      boxShadow="1px 1px 4px -2px #888888"
      as="section"
    >
      <Title>{title}</Title>
      <StatList>
        {stats.map(statItem => (
          <StatInfo key={statItem.id}>
            <span>{statItem.label}</span>
            <StatPercentage>{statItem.percentage}%</StatPercentage>
          </StatInfo>
        ))}
      </StatList>
    </Box>
  );
};

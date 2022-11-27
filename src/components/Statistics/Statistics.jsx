import { Box } from 'components/Box/Box';
import PropTypes from 'prop-types';
import {
  Title,
  StatList,
  StatInfo,
  StatPercentage,
} from 'components/Statistics/Statistics.styled';

export const Statistics = ({ title = null, stats }) => {
  return (
    <Box
      bg="white"
      display="flex"
      flexDirection="column"
      width="300px"
      mr="auto"
      ml="auto"
      mb={4}
      borderRadius="normal"
      fontFamily="body"
      boxShadow="1px 1px 4px -2px #888888"
      as="section"
    >
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatInfo key={id}>
            <span>{label}</span>
            <StatPercentage>{percentage}%</StatPercentage>
          </StatInfo>
        ))}
      </StatList>
    </Box>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};

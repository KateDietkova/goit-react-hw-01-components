import { Box } from 'components/Box/Box';
import PropTypes from 'prop-types';
import {
  Avatar,
  Name,
  Tag,
  Location,
  StatsItem,
  StatsQuantity,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Box
      bg="white"
      display="flex"
      flexDirection="column"
      width="300px"
      mb={4}
      borderRadius="normal"
      fontFamily="body"
      boxShadow="1px 1px 4px -2px #888888"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        pt={5}
        pb={6}
      >
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Box>

      <Box
        display="flex"
        justifyContent="space-between"
        bg="backgroundSecondary"
        as="ul"
      >
        <StatsItem>
          <span>Followers</span>
          <StatsQuantity>{stats.followers}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <span>Views</span>
          <StatsQuantity>{stats.views}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <span>Likes</span>
          <StatsQuantity>{stats.likes}</StatsQuantity>
        </StatsItem>
      </Box>
    </Box>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

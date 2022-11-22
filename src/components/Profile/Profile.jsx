import { Box } from 'components/Box/Box';
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
      mr="auto"
      ml="auto"
      borderRadius="normal"
      fontFamily="body"
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

      <Box display="flex" justifyContent="space-between" bg="backgroundSecondary" as="ul">
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

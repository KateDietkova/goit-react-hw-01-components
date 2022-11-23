import { FriendListItem } from './FriendListItem';
import { FriendItemStyled } from './FriendListItem.styled';
import { FriendListStyled } from './FriendList.styled';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <FriendListStyled>
      {friends.map(friend => (
        <FriendItemStyled key={friend.id}>
          <FriendListItem friend={friend} />
        </FriendItemStyled>
      ))}
    </FriendListStyled>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

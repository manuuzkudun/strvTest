
const INITIAL_STATE = {
  userName: 'John Doe',
  userId: 3,
  userPictureUrl: 'https://randomuser.me/api/portraits/thumb/men/7.jpg'
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    default:
      return state;
  }
};

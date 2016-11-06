export const initialComments = [
  {
    id: 0,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet magna cursus, finibus tortor a, dapibus ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;',
    parentComment: null,
    user: {
      userId: 1,
      userName: 'Mike Jones',
      userPictureUrl: 'https://randomuser.me/api/portraits/thumb/men/55.jpg'
    },
    date: new Date("November 05, 2016 07:13:00"),
  },
  {
    id: 1,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet magna cursus, finibus tortor a, dapibus ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;',
    parentComment: null,
    user: {
      userId: 2,
      userName: 'Bob Reilly',
      userPictureUrl: 'https://randomuser.me/api/portraits/thumb/men/82.jpg'
    },
    date: new Date("November 05, 2016 11:55:15"),
  }
];

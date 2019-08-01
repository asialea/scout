const User = [
  {
    first:'Asia',
    last:'Taylor',
    type:'work'
  },
];

export function fetchUser() {
  return {
    type: 'FETCH_USER',
    payload: userReducer
  };
}

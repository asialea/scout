
const INITIAL_STATE = {
  type:'business',
  avi:require('../images/Aaron_Asia2.jpeg'),
  name:'Asia',
  email:'asia@test.com',
  username:'asiat',
  rate:'',
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
};

export default userReducer;

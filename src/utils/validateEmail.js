import axios from './axios';
import getMessages from '../views/Message/messages';

const validateEmail = async (token) => {
  try {
    const response = await axios.get('/validate?token=' + token);
    // return getMessages('validate')[response.data.succes ? 'success' : 'error'];
    return getMessages('validate')[response.status === 200 ? 'success' : 'error'];
  } catch (error) {
    console.log(error);
    return getMessages('validate')['error'];
  }
};

export default validateEmail;

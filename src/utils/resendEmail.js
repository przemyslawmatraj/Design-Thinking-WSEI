import axios from './axios';
import getMessages from '../views/Message/messages';

const resendEmail = async (email) => {
  try {
    const response = await axios.get('/resendEmail?email=' + email);
    //return getMessages('resendEmail')[response.data.succes ? 'success' : 'error'];
    console.log('wysylam resendEmail');
    return getMessages('resendEmail')[response.status === 200 ? 'success' : 'error'];
  } catch (error) {
    console.log(error);
    return getMessages('resendEmail')['error'];
  }
};

export default resendEmail;

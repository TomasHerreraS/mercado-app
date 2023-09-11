import axios from 'axios';
import { userData } from '../utils/type';

export const createUser = async(data: userData) => {
  try {
    await axios.post('http://localhost:3001/addUser', data).then((response) => {
      console.log(response.data);
    }, (error) => {
      console.log(error);
    });
  } catch (error) {
    console.error(error);
  }
}

export const signIn = async(email: string, password: string) => {
  try {
    const res = await axios.get('http://localhost:3001/signIn', {
      params: {email: email, password: password}
    });
    return res;
  }catch(error) {
    console.error(error);
  }
}

export const getUsers = async() => {
  const res = await axios.get('http://localhost:3001/getUser');
  return res;
}
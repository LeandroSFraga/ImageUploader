import { useUserStore } from 'hooks/useUserStore';
import { axiosToken } from './axios';

export default function getByToken() {
  try {
    axiosToken
      .request({
        url: '/user/byToken',
      })
      .then((response) => {
        const user = response.data.response;
        useUserStore.setState({ user: user });
      });
  } catch (err) {
    console.log(err);
  }
}

import { getToken } from 'auth/token';
import List from 'components/list';
import { useEffect } from 'react';
import getByToken from 'services/api/getByToken';

export interface listSearchProps {
  search: string;
}

export default function HomePage({ search }: listSearchProps) {
  console.log(getToken());
  useEffect(() => {
    getByToken();
  }, []);

  return (
    <div>
      <List search={search} />
    </div>
  );
}

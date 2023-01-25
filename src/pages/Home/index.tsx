import { getToken } from 'auth/token';
import List from 'components/list';

export interface listSearchProps {
  search: string;
}

export default function HomePage({ search }: listSearchProps) {
  console.log(getToken());
  return (
    <div>
      <List search={search} />
    </div>
  );
}

import List from 'components/list';

export interface listSearchProps {
  search: string;
}

export default function HomePage({ search }: listSearchProps) {
  return (
    <div>
      <List search={search} />
    </div>
  );
}

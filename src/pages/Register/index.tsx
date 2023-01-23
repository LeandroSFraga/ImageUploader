import LoginCard from 'components/registercard/logincard';

export interface LoginProps {
  setToken: React.Dispatch<React.SetStateAction<string>>;
}

export default function Login({ setToken }: LoginProps) {
  return (
    <div>
      <LoginCard setToken={setToken} />
    </div>
  );
}

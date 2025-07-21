import { useState } from 'react';
import Input from './components/share/Input';

export default function App() {
  const [password, setPassword] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <div>
        테스트
        <Input
          label='비밀번호'
          value={password}
          onChange={handlePasswordChange}
          type='password'
          required
          helperText='8자 이상 입력하세요'
          size='sm'
        />
      </div>
    </>
  );
}

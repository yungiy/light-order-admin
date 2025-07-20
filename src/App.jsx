import Button from './components/share/Button';
import Input from './components/share/Input';
import { useState } from 'react';

export default function App() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [input4, setInput4] = useState('');

  return (
    <>
      <Button color='primary' size='sm'>
        안녕하세요
      </Button>
      <Button color='danger' size='md' rounded>
        안녕하세요
      </Button>
      <Button color='custom' size='lg' outline>
        안녕하세요
      </Button>
      <Button disabled>안녕하세요</Button>

      <div className='flex-col gap-6 max-w-sm mt-10'>
        {/* 기본 primary */}
        <div>
          <label className='block mb-2 text-sm text-gray-600'>
            Primary Input
          </label>
          <Input
            placeholder='Primary input'
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
          />
        </div>

        {/* secondary, outline, sm */}
        <div>
          <label className='block mb-2 text-sm text-gray-600'>
            Secondary Small, Outline
          </label>
          <Input
            placeholder='Secondary small outline'
            size='sm'
            color='secondary'
            outline
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
          />
        </div>

        {/* danger, lg, rounded */}
        <div>
          <label className='block mb-2 text-sm text-gray-600'>
            Danger Large, Rounded
          </label>
          <Input
            placeholder='Danger large, rounded'
            size='lg'
            color='danger'
            rounded
            value={input3}
            onChange={(e) => setInput3(e.target.value)}
          />
        </div>

        {/* 비활성화(disabled) 예시 */}
        <div>
          <label className='block mb-2 text-sm text-gray-600'>Disabled</label>
          <Input
            placeholder='Disabled input example'
            disabled
            value={input4}
            onChange={(e) => setInput4(e.target.value)}
          />
        </div>
      </div>
    </>
  );
}

import GreetingWithClass from './components/class/ClassExample';
import GreetingWithFunction from './components/function/FuncExample';
import Input from './components/ui/Input';
import styles from './app.module.scss';
import Button from './components/ui/Button/';
import { InputProps } from './constant/InputProps';
import { useState } from 'react';

const inputStyle = { marginLeft: '10px' };

function App() {
  // state loading
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div>
      <GreetingWithClass name='daniel' />
      <GreetingWithClass />
      <GreetingWithFunction name='sena' />
      {/* input */}
      <Input
        className={styles.input}
        type='text'
        placeholder='input'
        style={inputStyle}
      />
      <Button onClick={() => setIsLoading(!isLoading)} variant='primary'>
        test
      </Button>
      <Button variant='secondary'>test</Button>
      <Input className={styles.input} {...InputProps} />
    </div>
  );
}

export default App;

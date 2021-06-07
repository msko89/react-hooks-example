import { createRef, useState, useRef } from 'react';

export default function UseRefExample() {
  const [value, setValue] = useState('');
  const inputCreateRef = createRef();
  const inputUseRef = useRef();

  console.log(inputCreateRef.current, inputUseRef.current);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <input value={value} onChange={handleChange} />
      <input ref={inputCreateRef} />
      <input ref={inputUseRef} />
    </div>
  );
}

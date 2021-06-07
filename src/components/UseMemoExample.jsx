import { useState, useMemo, useCallback } from 'react';

function sum(persons) {
  console.log('sum...');
  return persons.map((person) => person.age).reduce((acc, cur) => acc + cur);
}

export default function UseMemoExample() {
  const [value, setValue] = useState('');
  const [persons] = useState([
    { name: 'Mark', age: 39 },
    { name: 'Hanna', age: 28 },
  ]);

  const count = useMemo(() => {
    return sum(persons);
  }, [persons]);

  const handleClick = useCallback(() => {
    console.log(value);
    return true;
  }, []);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <input value={value} onChange={handleChange} />
      <p>{count}</p>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

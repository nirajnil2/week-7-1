import React from 'react';
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import countAtom, { evenSelector } from './store/atoms/count';

// Root App Component
function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
        <CountRenderer />
      </RecoilRoot>
    </div>
  );
}

// Count Component
function Count() {
  return (
    <div>
      <Button />
    </div>
  );
}

// CountRenderer Component
function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return (
    <div>
      <p>{count}</p>
      <EvenCountRenderer />
    </div>
  );
}

// EvenCountRenderer Component
function EvenCountRenderer() {
  const isEven = useRecoilValue(evenSelector);

  return (
    <div>
      {isEven ? " It is even " : null}
    </div>
  )
 
}
// Button Component
function Button() {
  const [count, setCount] = useRecoilState(countAtom);
  console.log("Button re-render");
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

export default App;


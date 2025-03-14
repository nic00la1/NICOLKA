import React, { useState, useEffect, useReducer, useMemo } from 'react';

// Custom hook to log render count
function useRenderCount() {
  const renderCount = React.useRef(0);
  useMemo(() => {
    renderCount.current += 1;
    console.log(`Render count: ${renderCount.current}`);
  },[renderCount.current]);
}

// ShowAll component
function ShowAll() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <label>
        <input type="checkbox" checked={show} onChange={() => setShow(!show)} />
        Pokaż wszystko
      </label>
      {show && <div>Tekst do pokazania</div>}
    </div>
  );
}

// FormWithButton component
function FormWithButton() {
  const [text, setText] = useState('');
  const [number, setNumber] = useState(0);
  const [result, setResult] = useState('');

  const handleSubmit = () => {
    setResult(text.repeat(number));
  };

  return (
    <div>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <input type="number" value={number} onChange={(e) => setNumber(Number(e.target.value))} />
      <button onClick={handleSubmit}>Submit</button>
      <div>{result}</div>
    </div>
  );
}

// FormWithoutButton component
function FormWithoutButton() {
  const [text, setText] = useState('');
  const [number, setNumber] = useState(0);

  return (
    <div>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <input type="number" value={number} onChange={(e) => setNumber(Number(e.target.value))} />
      <div>{text.repeat(number)}</div>
    </div>
  );
}

// ToggleWindows component
function ToggleWindows() {
  const [window1, setWindow1] = useState(false);
  const [window2, setWindow2] = useState(false);

  return (
    <div>
      <button onClick={() => { setWindow1(true); setWindow2(false); }}>Okno 1</button>
      <button onClick={() => { setWindow2(true); setWindow1(false); }}>Okno 2</button>
      <button onClick={() => { setWindow1(false); setWindow2(false); }}>Zamknij</button>
      {window1 && <div style={{ backgroundColor: 'red' }}>Okno 1</div>}
      {window2 && <div style={{ backgroundColor: 'blue' }}>Okno 2</div>}
    </div>
  );
}

// App component
function App() {
  useRenderCount();

  return (
    <div>
      <ShowAll />
      <FormWithButton />
      <FormWithoutButton />
      <ToggleWindows />
    </div>
  );
}

export default App;
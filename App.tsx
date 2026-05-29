import { CounterProvider } from './CounterContext';
import Counter from './Counter';

function App() {
  return (
    <CounterProvider>
      <main className="app">
        <Counter onIncrement={() => {}} />
      </main>
    </CounterProvider>
  );
}

export default App;
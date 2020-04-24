import React from 'react';
import ChartExample from './components/chartExample'
import StoreProvider from './context'

function App() {
  return (
    <StoreProvider>
    <div className="border">
      <ChartExample />
    </div>
    </StoreProvider>
  );
}

export default App;

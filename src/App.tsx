import React from 'react';
import {HRInfoCardPage} from './pages/HRInfoCardPage'
import StoreProvider from './context'

function App() {
  return (
    <StoreProvider>
    <div className="border">
      <HRInfoCardPage/>
    </div>
    </StoreProvider>
  );
}

export default App;

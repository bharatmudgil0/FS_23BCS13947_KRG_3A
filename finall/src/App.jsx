import { useState } from 'react'
import Header from "./Header";

function App() {
  const username = "Bharat";

  return (
    <div>
      <Header username={username} />
    </div>
  );
}

export default App;

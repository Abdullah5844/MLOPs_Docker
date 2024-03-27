// src/App.js
import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('http://localhost:5000/store', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email }),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;

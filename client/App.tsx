import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [greetings, setGreetings] = useState('');

  useEffect(() => {
    axios
      .get('/test')
      .then((response: { data: any }) => setGreetings(response.data));
  }, []);

  return (
    <div id='App'>
      <h1>{greetings} hsad</h1>
    </div>
  );
};

export default App;

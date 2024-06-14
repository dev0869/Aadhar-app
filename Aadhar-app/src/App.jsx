import  { useState } from 'react';
import Form from './components/forms/Form';
import AadharCard from './components/forms/AadharCard';
import { generateUID } from './utilities';


function App() {
  const [userInfo, setUserInfo] = useState(null);
  const [uid, setUid] = useState('');

  const handleSubmit = (data) => {
    const generatedUid = generateUID();
    setUid(generatedUid);
    setUserInfo(data);
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1>Aadhar Card Registration</h1>
      </header>
      {!userInfo ? (
        <Form onSubmit={handleSubmit} />
      ) : (
        <AadharCard userInfo={userInfo} uid={uid} />
      )}
    </div>
  );
}

export default App;

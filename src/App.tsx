import React, { useState } from 'react';
import CryptoJS from 'crypto-js';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa el CSS de Bootstrap

function App() {
  const [text, setText] = useState('');
  const [key, setKey] = useState('');
  const [encryptedText, setEncryptedText] = useState('');
  const [decryptedText, setDecryptedText] = useState('');

  const encryptText = () => {
    const ciphertext = CryptoJS.AES.encrypt(text, key).toString();
    setEncryptedText(ciphertext);
  };

  const decryptText = () => {
    try {
      const bytes = CryptoJS.AES.decrypt(encryptedText, key);
      const decrypted = bytes.toString(CryptoJS.enc.Utf8);
      setDecryptedText(decrypted);
    } catch (error) {
      console.error('Error al descifrar: ', error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-6">
          <div className="mb-3">
            <label htmlFor="text" className="form-label">Texto a cifrar/descifrar:</label>
            <input
              type="text"
              id="text"
              className="form-control"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="key" className="form-label">Clave:</label>
            <input
              type="text"
              id="key"
              className="form-control"
              value={key}
              onChange={(e) => setKey(e.target.value)}
            />
          </div>
          <button className="btn btn-primary" onClick={encryptText}>Cifrar</button>
          <button className="btn btn-secondary ms-2" onClick={decryptText}>Descifrar</button>
        </div>
        <div className="col-lg-6">
          <div className="mb-3">
            <p>Texto cifrado:</p>
            <textarea className="form-control" value={encryptedText} readOnly />
          </div>
          <div className="mb-3">
            <p>Texto descifrado:</p>
            <textarea className="form-control" value={decryptedText} readOnly />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

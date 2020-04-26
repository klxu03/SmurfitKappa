import React from 'react';
import logo from './logo.svg';
import './App.css';

import { IonApp } from '@ionic/react';

/* === Components === */
import ImageUpload from './components/ImageUpload.component';

function App() {
  return (
    <IonApp>
      <ImageUpload />
    </IonApp>
  );
}

export default App;

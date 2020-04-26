import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonInput } from '@ionic/react';
import React from 'react';
import './styleHome.css';
import logo from './barcode_PNG34.png';


const Home: React.FC = () => {
  return (
<>

        <div class="flex-container">
            <div id="deviceready">
                <button onclick="scan()" id="scanButton"><img src={logo} width="100" height="50" /></button>
            </div>
        </div>

</>
  );
};

export default Home;
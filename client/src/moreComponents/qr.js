import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonInput } from '@ionic/react';
import React from 'react';
import './styleHome.css';



const Home: React.FC = () => {
  return (
<>

        <div class="flex-container">
            <div id="deviceready">
                <button onclick="scan()" id="scanButton">Scan Barcode</button>
            </div>
        </div>

</>
  );
};

export default Home;
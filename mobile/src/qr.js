import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonInput } from '@ionic/react';
import React from 'react';


const Home: React.FC = () => {
  return (
<>

        <div class="inputControls">
            <div id="deviceready">
                <button onclick="scan()" id="scanButton">Scan barcode</button>
                <input type="text" id="barcodeScanDevice" placeholder="1"></input>
            </div>
        </div>

</>
  );
};

export default Home;
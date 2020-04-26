import React from 'react';

import { IonProgressBar } from '@ionic/react';

const Example: React.SFC<{}> = () => (
  <>
    <h5 style={{textAlign: "center"}}>SmurfitKappa Environmental Goal</h5>
    <br></br>

    <IonProgressBar value={0.6}></IonProgressBar>
    <div>
    <div style={{float: "left",padding: "20px"}}>600 Trees Saved</div>
    <div style={{textAlign: "right", float: "right", padding: "20px"}}>2000 Tons of Plastic Saved</div>
</div>

  </>
);

export default Example;
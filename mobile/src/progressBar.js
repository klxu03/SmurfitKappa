import React from 'react';

import { IonProgressBar } from '@ionic/react';

const Example: React.SFC<{}> = () => (
  <>

    {/*-- Default Progressbar with 50 percent --*/}
    <IonProgressBar value={0.5}></IonProgressBar>


  </>
);

export default Example;
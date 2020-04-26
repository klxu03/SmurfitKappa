import React, { useState } from "react";
import ImageUploader from "react-images-upload"; //https://github.com/jakehartnell/react-images-upload#readme

import { IonButton } from '@ionic/react';

const ImageUpload = props => {
  const [pictures, setPictures] = useState([]);

  const onDrop = picture => {
    setPictures([...pictures, picture]);
  };

  return (
    <React.Fragment>
        <ImageUploader
        {...props}
        withIcon={true}
        onChange={onDrop}
        imgExtension={[".jpg", ".png"]}
        maxFileSize={5242880}
        label = "Upload your Image, Accept .jpg or .png"
        singleImage = {true}
        buttonText = 'Choose the Image'
        withPreview = {true}
        />
        <IonButton expand="block">Submit</IonButton>
    </React.Fragment>
  );
};

export default ImageUpload;
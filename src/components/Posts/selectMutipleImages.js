import React, { useState } from 'react';
import MultiImageInput from 'react-multiple-image-input';
 
export function Images() {
  const crop = {
    unit: '%',
    aspect: 4 / 3,
    width: '100'
  };
 
  const [images, setImages] = useState({});
 
  return (
    <MultiImageInput
    // style={{height:"30px"}}
    // theme={{
    //     background: 'rgba(228, 228, 228, 0.2)',
    //     outlineColor: '#111111',
    //     textColor: 'rgba(255,255,255,0.6)',
    //     buttonColor: 'orange',
    //     modalColor: '#ffffff',
    //     height:"20px"
    //   }}
      images={images}
      setImages={setImages}
      cropConfig={{ crop, ruleOfThirds: true }}
      
    />
  );
}
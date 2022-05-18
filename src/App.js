import React, { useEffect, useState } from 'react';
import ImageCard from './Components/ImageCard';

const App = () => {
  const [images, setImages] = useState();
  function test() {
    for(let i =0 ; i < 100000; i++) {
       //operation;
    }
 }

  console.time('test')
  test()

  useEffect(() => {
    fetch('images?limit=10')
      .then(res => res.json())
      .then(data => {
        console.log('Success:', data);
        setImages(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  console.timeEnd('test')

  return (
    <div>
      <ImageCard images={images}/>
    </div>
  );
}

export default App;

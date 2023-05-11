import styles from "../styles/assets.module.css";
import Image from 'next/image';
import ba1 from '../public/ba1.png';
import ba2 from '../public/ba2.png';
import eggplant from '../public/eggplant.png';
import origami from '../public/origami.png';
import watercolor from '../public/watercolor.png';
import React, { useState, useEffect } from 'react';

const items = [
  { id: 1, title: 'Item 1', imageUrl: ba1, buttonText1: '$678', buttonText2: 'sell' },
  { id: 2, title: 'Item 2', imageUrl: ba2, buttonText1: '$988', buttonText2: 'sell' },
  { id: 3, title: 'Item 3', imageUrl: origami, buttonText1: '$20,032', buttonText2: 'sell' },
  { id: 4, title: 'Item 4', imageUrl: eggplant, buttonText1: '$892', buttonText2: 'sell' },
  { id: 5, title: 'Item 4', imageUrl: watercolor, buttonText1: '$191', buttonText2: 'sell' }
];

export default function Assets(props) {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const handleModalClose = () => {
    setSelectedImage(null);
  };

  return (
    <div className="main-section">
       <div className={styles.container}>
      {items.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.imageContainer}>
            <Image onClick={() => handleImageClick(item.imageUrl)} className={styles.image} src={item.imageUrl} alt="item" />
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.buttonCost} disabled>{item.buttonText1}</button>
            <button className={styles.buttonSell}>{item.buttonText2}</button>
          </div>
        </div>
      ))}

      {selectedImage && (
        <div className={styles.modal} onClick={handleModalClose}>
          <Image src={selectedImage} alt="full-size" />
        </div>
      )}




    </div>
    </div>
  )
}



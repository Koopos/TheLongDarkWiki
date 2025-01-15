/*
 * @Author: 娄松 
 * @Date: 2025-01-15 16:37:14
 * @LastEditors: 娄松 
 * @LastEditTime: 2025-01-15 16:37:18
 * @FilePath: \TheLongDarkWiki\src\components\ImageView.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const ClickableImage = ({ src, alt }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <img
        src={src}
        alt={alt}
        style={{ cursor: 'pointer', maxWidth: '100%' }}
        onClick={() => setIsOpen(true)}
      />
      {isOpen && (
        <Lightbox
          mainSrc={src}
          onCloseRequest={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default ClickableImage;

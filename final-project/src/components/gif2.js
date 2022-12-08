import React from 'react';
import PixelCafe from '../img/pixelcafe2.gif';

import { Image } from 'react-bootstrap';

export const Gif2 = () => {
    return (
        <div className="center">
                <Image className="headerImage" src={PixelCafe} alt="Pixel art of a cafe by art-whippersnapper."></Image>
        </div>
    );
};
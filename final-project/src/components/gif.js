import React from 'react';
import PixelCafe from '../img/pixelcafe.gif';

import { Image } from 'react-bootstrap';

export const Gif = () => {
    return (
        <div className="center">
                <Image className="headerImage" src={PixelCafe} alt="Pixel art of a cafe by Pixel Jeff."></Image>
        </div>
    );
};
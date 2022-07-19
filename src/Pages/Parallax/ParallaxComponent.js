// rfc - shortcut to create function component with file name
import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import cat from './Images/cat.gif';
import land from './Images/land.png';
import moon from './Images/moon.jpg';

function ParallaxComponent() {
  return (
    <div>
      <Parallax pages={4}>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{ backgroundImage: `url(${moon})`, backgroundSize: `cover` }}>
          First
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={0.5}
          factor={4}
          style={{ backgroundImage: `url(${land})`, backgroundSize: `cover` }}>
          Second
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 0.9, end: 2.5 }}>
          <img alt='Cat' src={cat} />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default ParallaxComponent;

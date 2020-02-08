import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

import './index.scss';

type Direction = 'left' | 'right';
type Image = { id: number, src: any, alt: string };
type Tech = 'Web' | 'Mobile';

const images: Image[] = [
  { id: 0, src: require('assets/images/web.jpg'), alt: "Web Development" },
  { id: 1, src: require('assets/images/bball.jpg'), alt: "Basketball court" },
];

const ExpertiseSection = () => {
  const [direction, setDirection] = useState<Direction>('left');
  const [index, setIndex] = useState(0);

  // Content
  const [title, setTitle] = useState<Tech>('Web');

  const isLeft = direction === 'left';

  const onSwitch = (d: Direction) => {
    const isLeft = d === 'left';

    console.log('click');
    setDirection(d);
    setIndex(isLeft ? 0 : 1);
    setTitle(isLeft ? 'Web' : 'Mobile');
  }

  return (
    <div className={`ExpertiseSection-container ${direction}`}>
      <img
        key={images[index].id}
        src={images[index].src}
        alt={images[index].alt}
      />
      <div className="text-container">
        <h1>{title}</h1>
        <h3>Development</h3>
      </div>
      <div className="footer">
        <span
          className={isLeft ? 'enabled' : ''}
          onClick={() => onSwitch('left')}
        >
          <FontAwesomeIcon icon={faLaptop} />
        </span>
        <span
          className={!isLeft ? 'enabled' : ''}
          onClick={() => onSwitch('right')}
        >
          <FontAwesomeIcon icon={faMobileAlt} />
        </span>
      </div>
    </div>
  )
}

export default ExpertiseSection;

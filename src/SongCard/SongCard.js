import React from 'react';
import './SongCard.css';

const SongCard = ({ song }) => {
  console.log('playlist', song);
  const url = `https://w.soundcloud.com/player/?url=https%3A//${song.url}&color=%23a83044&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`;

  return (
    <div className='song'>
      <iframe
        title={song.name}
        width="100%"
        height="166"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src={url}>
      </iframe>
      <div>
        <a
          href="https://soundcloud.com/gorgon-city" title="Gorgon City"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gorgon City
        </a>
        <a
          href="https://soundcloud.com/gorgon-city/go-slow" title="Go Slow"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go Slow
        </a>
      </div>
    </div>
  )
}

export default SongCard;

import React from 'react';
import './SongCard.css';

const SongCard = ({ song }) => {
  console.log('playlist', song);
  const url = `https://w.soundcloud.com/player/?url=https%3A//${song.url}&color=%23a83044&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`;

  return (
    <div className='song-card'>
      <div className='player-wrapper'>
        <iframe
          className='song-player'
          title={song.name}
          width="60%"
          height="166"
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          src={url}>
        </iframe>
      </div>
    </div>
  )
}

export default SongCard;

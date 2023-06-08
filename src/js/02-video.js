import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe#vimeo-player');
const newPlayer = new Player(iframe);

function playTime(data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
};

newPlayer.on('timeupdate', throttle(playTime, 1000));

const savedTime = localStorage.getItem('videoplayer-current-time');

if (savedTime) {
    newPlayer.setCurrentTime(savedTime); 
};



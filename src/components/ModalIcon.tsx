import React from 'react';

const emojis = ['🚀', '🎉', '🎈', '🔥', '💥', '💀', '🫠', '🧨', '💣'];

const getRandomEmoji = () => {
  const randomIndex = Math.floor(Math.random() * emojis.length);
  return emojis[randomIndex];
};

const Icon: React.FC = () => {
  return <span className="icon">{getRandomEmoji()}</span>;
};

export default Icon;
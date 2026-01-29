import React from 'react';

const HeroAvatar: React.FC = () => {
  return (
    <div
      style={{
        width: '340px',
        height: '340px',
        borderRadius: '50%',
        overflow: 'hidden',
        flexShrink: 0
      }}
    >
      <img
        src="/images/1000058707.jpg"
        alt="Profile picture"
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />
    </div>
  );
};

export default HeroAvatar;

import React from 'react';
import ContentLoader from 'react-content-loader';

function LoadingBlock() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={1}
      width={270}
      height={460}
      viewBox="0 0 270 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <circle cx="133" cy="130" r="130" />
      <rect x="0" y="285" rx="0" ry="0" width="270" height="25" />
      <rect x="0" y="325" rx="6" ry="6" width="270" height="84" />
      <rect x="0" y="420" rx="0" ry="0" width="85" height="36" />
      <rect x="126" y="418" rx="20" ry="20" width="144" height="39" />
    </ContentLoader>
  );
}

export default LoadingBlock;

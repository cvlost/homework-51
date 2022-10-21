import React from 'react';

interface BallProps {
  content: number;
}

const Ball: React.FC<BallProps> = (props) => {
  return (
    <div className="ball">
      {props.content}
    </div>
  );
};

export default Ball;
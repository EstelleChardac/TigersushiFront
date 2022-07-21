import React from 'react';
import IRecord from '../interfaces/IRecord';

interface CardRecordProps {
  title?: string;
  image?: string;
  bandname?: string;
}

const CardRecord = ({ title, image, bandname }: CardRecordProps) => {
  return (
    <>
      <div className="cardcont__cardrecord">
        <div className="cardcont__cardrecord__image">
          <img src={image} />
        </div>
        <div className="cardcont__cardrecord__content">
          <div className="cardcont__cardrecord__content__bandname">{bandname}</div>
          <div className="cardcont__cardrecord__content__title">{title}</div>
        </div>
      </div>
    </>
  );
};

export default CardRecord;

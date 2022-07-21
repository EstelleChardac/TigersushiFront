import axios from 'axios';
import React, { useEffect, useState } from 'react';
import IRecord from '../interfaces/IRecord';
import CardRecord from './CardRecord';

const Home = () => {
  // je crée un usestate pour afficher les données
  const [content, setContent] = useState<IRecord[]>();

  // je récupère mon tableau de records via l'appel axios
  const getContent = async () => {
    const url: string = `http://localhost:3000/api/records`;

    const { data } = await axios.get<IRecord[]>(url);
    setContent(data);
    console.log(content && content);
  };

  // WHEN LOADING THE COMPONENT, I EXECUTE THE GETCONTENT FUNCTION //
  useEffect(() => {
    getContent();
  }, []);

  return (
    <>
      <div className="home">
        <img
          src="http://remiolamoto.phpnet.org/wp-tigersushi/wp-content/uploads/2017/07/tigrou-fil-noir-clean-234x300.png"
          className="home__logo"
        />
        <div className="home__header">
          <img src="http://tigersushi.com/wp-content/uploads/2017/07/joakim-1280x620.jpg" />
          <p className="home__header__description">
            Tigersushi is a creation lab dedicated to release out-of-the-ordinary,
            extra-sensory music and whatever else that springs to our deranged minds.
          </p>
        </div>
        <div className="home__titles">
          <h2 className="home__titles__1">Latest releases</h2>
          <div className="home__titles__2">All | Album Releases | Single Releases</div>
        </div>
        <div className="cardcont">
          {content && content.map((record) => <CardRecord key={record.id} {...record} />)}
        </div>
      </div>
    </>
  );
};

export default Home;

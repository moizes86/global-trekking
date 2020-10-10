import React from 'react';
import './about-us.styles.scss';

const AboutUs = () => {
  const img_1 =
  process.env.PUBLIC_URL + '1.jpg';

  const img_2 =
    process.env.PUBLIC_URL + '2.jpg';

  const img_3 =
  process.env.PUBLIC_URL + '3.jpg';

  const img_4 =
  process.env.PUBLIC_URL + '4.jpg';

  return (
    <div className='section about-us' id='about-us' >
    
    <h1>Hiking In Israel And Around The World</h1>
      <p>
        Global Trekking guides tours in Israel's beautiful Judea Desert and in
        many special and unique places around the world. The tours, guided by
        Jan Shai Deniz, includes high class equipment, food and sleeping
        arrangements.
      </p>
      <hr />
      <div className='img-container'>
        <div style={{ backgroundImage: `url(${img_2})` }}></div>
        <div
          className='large'
          style={{ backgroundImage: `url(${img_1})` }}
        ></div>
        <div
          className='large'
          style={{ backgroundImage: `url(${img_4})` }}
        ></div>
        <div style={{ backgroundImage: `url(${img_3})` }}></div>
      </div>
    </div>
  );
};

export default AboutUs;

import React, { memo } from 'react';

const CardTemplate = () => {
  return (
    <div className='image-container'>
      <div className='summary-section'>
        <p className='player-rating'>99</p>
        <p className='player-position'>STR</p>
        <div className='player-country-image-container'>
          <img src='https://restcountries.eu/data/aus.svg' alt='country flag' className='player-country-image' />
        </div>
        <div className='player-club-image-container'>
          <img
            src='https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/1200px-Chelsea_FC.svg.png'
            alt='club flag'
            className='player-club-image'
          />
        </div>
      </div>
      <div className='photo-section'>
        <div className='player-image-container'>
          <img src='https://via.placeholder.com/400x600' alt='player image' className='player-image' />
        </div>
      </div>
      <div className='stats-section'>
        <p className='player-name'>John Doe</p>
        <p className='player-stat-value left-stat-value player-stat-value-1'>99</p>
        <p className='player-stat-name left-stat-name player-stat-name-1'>PAC</p>
        <p className='player-stat-value left-stat-value player-stat-value-2'>99</p>
        <p className='player-stat-name left-stat-name player-stat-name-2'>SHO</p>
        <p className='player-stat-value left-stat-value player-stat-value-3'>99</p>
        <p className='player-stat-name left-stat-name player-stat-name-3'>PAS</p>

        <p className='player-stat-value right-stat-value player-stat-value-1'>99</p>
        <p className='player-stat-name right-stat-name player-stat-name-1 stat-DRI'>DRI</p>
        <p className='player-stat-value right-stat-value player-stat-value-2'>99</p>
        <p className='player-stat-name right-stat-name player-stat-name-2'>DRF</p>
        <p className='player-stat-value right-stat-value player-stat-value-3'>99</p>
        <p className='player-stat-name right-stat-name player-stat-name-3'>PHY</p>
      </div>
    </div>
  );
};

export default memo(CardTemplate);

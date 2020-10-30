import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Projects</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/projects/katron.jpg'
              text='Katron Portas'
              location='Mafra - Santa Catarina'
              label='Website'
              path='https://www.katron.com.br/'
            />
            <CardItem
              src='images/projects/bosquehoa.jpg'
              text='Bosque Hoa'
              location='Rio Negro - Paraná'
              label='Website/System'
              path='https://www.bosquehoa.com.br/'
            />
            <CardItem
              src='images/projects/sonia-cake-designer.jpg'
              text='Sonia Cake Designer'
              location='Rio Negro - Paraná'
              label='Website'
              path='https://www.soniacakedesinger.com.br/'
            />
            <CardItem
              src='images/projects/neo-klima.jpg'
              text='NeoKlima'
              location='Cabreúva - São Paulo'
              label='Website'
              path='https://www.neoklima.com.br/'
            />
          </ul>
          
          <ul className='cards__items'>
            <CardItem
              src='images/projects/money-cambio.jpg'
              text='Money Câmbio'
              location='Anápolis - Goiás'
              label='Website'
              path='https://www.moneycambio.com.br/'
            />
            <CardItem
              src='images/projects/brasilnota.jpg'
              text='Brasilnota'
              location='Rio Negro - Paraná'
              label='Website'
              path='https://www.brasilnota.com.br/'
            />
            <CardItem
              src='images/projects/arquivo-mobile.jpg'
              text='ArquivoWeb'
              location='Rio Negro - Paraná'
              label='App'
              path='https://brasilnota.com.br/arquivo/'
            />
            <CardItem
              src='images/projects/support-informatica.jpg'
              text='Support Informática'
              location='Rio Negro - Paraná'
              label='Website'
              path='https://www.support-br.com.br/'
            />
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default Cards;

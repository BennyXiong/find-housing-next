import React from 'react';
import styles from '../styles/housingOptions.module.scss';

const mockListings = [
  {
    name: 'Britannia Crossing',
    operator: 'The Mustard Seed Society',
    type: 'Below market',
    address: '15807-102 Avenue Edmonton T5P 4P7',
    phone: '(780) 850-0940',
    lat: 53.5444,
    lng: -113.4909,
  },
  {
    name: 'Canora Place',
    operator: 'Jasper Place Wellness Centre',
    type: 'Below market',
    address: '10141 153 street NW Edmonton T5P 2B3',
    phone: '(780) 481-4001',
    lat: 53.5381,
    lng: -113.5526,
  },
  {
    name: 'Castle Brae Place Townhouses',
    operator: 'City of Edmonton Non-Profit Housing Corporation - homeEd',
    type: 'Below market',
    address: '14305 - 121 Street Edmonton T5X 3P8',
    phone: '(780) 474-5706',
    lat: 53.5976,
    lng: -113.5302,
  },
];

const HousingList: React.FC = () => {
  return (
    <div>
      <h4 className={styles.filter}>🔎 Filter Options</h4>
      <p>Showing {mockListings.length} results of 59</p>
      <div className={styles.list}>
        {mockListings.map((item, i) => (
          <div key={i} className={styles.card}>
            <h5 className={styles.title}>{item.name}</h5>
            <p>Operated by: <strong>{item.operator}</strong></p>
            <p><em>{item.type}</em></p>
            <p>{item.address}</p>
            <p><a href={`tel:${item.phone}`}>{item.phone}</a></p>
            <div className={styles.links}>
              <a href="#">Apply</a> | <a href="#">More details</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HousingList;

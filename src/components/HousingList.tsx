import React from 'react';
import styles from '../styles/housingOptions.module.scss';
import { locationsDict, type Community } from '../library/data';

const HousingList: React.FC<{ community: Community }> = ({ community }) => {
  return (
    <div>
      <h4 className={styles.filter}>🔎 Filter Options</h4>
      <p>Showing {locationsDict[community].marks.length} results of 59</p>
      <div className={styles.list}>
        {locationsDict[community].marks.map((item, i) => (
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

import pageStyles from '../styles/Page.module.scss'
import styles from '../styles/housingOptions.module.scss';

import { GoAButton, GoAButtonGroup } from '@abgov/react-components';
import HousingList from '../components/HousingList';
import HousingMap from '../components/HousingMap';
import { useNavigate } from 'react-router-dom';
import { useHousehold } from '../hooks/useHousehold';
import type { Community } from '../library/data';

const HousingOptions: React.FC = () => {
    const { location } = useHousehold();
    const navigate = useNavigate();

    const previous = () => {
        navigate("../location")
    };

    return (
        <div className={`${pageStyles.page} ${pageStyles.income}`}>
            <h2>Housing options</h2>
            <div className={styles.container}>
                <div className={styles.sidebar}>
                    <HousingList community={(location?.community as Community)?? 'Edmonton'}/>
                </div>
                <div className={styles.map}>
                    <HousingMap community={(location?.community as Community)?? 'Edmonton'}/>
                </div>
            </div>
            <hr />
            <GoAButtonGroup alignment="start" gap="relaxed">
                <GoAButton type="tertiary" onClick={previous}>
                    Back: Location
                </GoAButton>
            </GoAButtonGroup>
        </div>
    )
};

export default HousingOptions
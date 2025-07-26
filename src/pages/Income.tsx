import { useNavigate } from 'react-router-dom';
import styles from '../styles/Page.module.scss'

import { GoAButton, GoAButtonGroup } from '@abgov/react-components';

const Income: React.FC = () => {    
    const navigate = useNavigate();

    const previous = () => {
        navigate("../peopleAndAge")
    };

    const next = () => {
        navigate("../location")
    };
    return (
        <div className={`${styles.page} ${styles.income}`}>
            <h2>Income</h2>
            <hr />
            <GoAButtonGroup alignment="start" gap="relaxed">
                <GoAButton type="tertiary" onClick={previous}>
                    Back: People and ages
                </GoAButton>
                <GoAButton type="primary" onClick={() => next()}>
                    Next: Location
                </GoAButton>
            </GoAButtonGroup>
        </div>
    )
};

export default Income
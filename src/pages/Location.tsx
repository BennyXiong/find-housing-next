import { useNavigate } from 'react-router-dom';
import styles from '../styles/Page.module.scss'

import { GoAButton, GoAButtonGroup } from '@abgov/react-components';

const Location: React.FC = () => {    
    const navigate = useNavigate();

    const previous = () => {
        navigate("../income")
    };

    const next = () => {
        navigate("../housingOptions")
    };
    return (
        <div className={`${styles.page} ${styles.income}`}>
            <h2>Location</h2>
            <hr />
            <GoAButtonGroup alignment="start" gap="relaxed">
                <GoAButton type="tertiary" onClick={previous}>
                    Back: Income
                </GoAButton>
                <GoAButton type="primary" onClick={() => next()}>
                    Next: Housing options
                </GoAButton>
            </GoAButtonGroup>
        </div>
    )
};

export default Location
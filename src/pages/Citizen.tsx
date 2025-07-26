import styles from '../styles/Page.module.scss'

import { GoAButton, GoAButtonGroup } from '@abgov/react-components';
import { useNavigate } from 'react-router-dom';

const Citizenshihp: React.FC = () => {
    const navigate = useNavigate();

    const previous = () => {
        navigate("..")
    };

    const next = () => {
        navigate("../peopleAndAge")
    };

    return (
        <div className={`${styles.page} ${styles.citizenshihp}`}>
            <h2>Citizenshihp</h2>
            <hr />
            <GoAButtonGroup alignment="start" gap="relaxed">
                <GoAButton type="tertiary" onClick={previous}>
                    Back: Start
                </GoAButton>
                <GoAButton type="primary" onClick={next}>
                    Next: People and ages
                </GoAButton>
            </GoAButtonGroup>
        </div>
    )
};

export default Citizenshihp
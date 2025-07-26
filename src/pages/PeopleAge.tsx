import { useNavigate } from 'react-router-dom';
import styles from '../styles/Page.module.scss'

import { GoAButton, GoAButtonGroup } from '@abgov/react-components';

const PeopleAge: React.FC = () => {    
    const navigate = useNavigate();

    const previous = () => {
        navigate("../citizenship")
    };

    const next = () => {
        navigate("../income")
    };
    return (
        <div className={`${styles.page} ${styles.peopleAge}`}>
            <h2>People and ages</h2>
            <hr />
            <GoAButtonGroup alignment="start" gap="relaxed">
                <GoAButton type="tertiary" onClick={previous}>
                    Back: Citizenship
                </GoAButton>
                <GoAButton type="primary" onClick={() => next()}>
                    Next: Income
                </GoAButton>
            </GoAButtonGroup>
        </div>
    )
};

export default PeopleAge
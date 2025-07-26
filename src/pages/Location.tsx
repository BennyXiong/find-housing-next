import { useNavigate } from 'react-router-dom';
import styles from '../styles/Page.module.scss'

import { GoAButton, GoAButtonGroup, GoADropdown, GoADropdownItem, GoAFormItem } from '@abgov/react-components';
import { useHousehold } from '../hooks/useHousehold';
import { LocationInfo } from '../library/location';
import { hasErrors } from '../library/common';

const Location: React.FC = () => {
    const { location, setHousehold } = useHousehold();
    const navigate = useNavigate();

    const set = (value: Partial<LocationInfo>) => {
        setHousehold({ location: new LocationInfo({ ...location, ...value }) });
    };

    const previous = () => {
        navigate("../income")
    };

    const next = () => {
        const validated = new LocationInfo(location ?? {}).validate();
        set(validated)
        if (hasErrors(validated)) return;
        navigate("../housingOptions")
    };
    return (
        <div className={`${styles.page} ${styles.income}`}>
            <h2>Location</h2>
            <GoAFormItem label="Where in Alberta do they want to live?" error={location?.errorState.community}>
                <GoADropdown name="item" value={location?.community} error={!!location?.errorState.community} onChange={(_, value) => set({ community: value as string })}>
                    <GoADropdownItem value="Edmonton" label="Edmonton"></GoADropdownItem>
                    <GoADropdownItem value="Calgary" label="Calgary"></GoADropdownItem>
                </GoADropdown>
            </GoAFormItem>
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
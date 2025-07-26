import { atom, useRecoilState } from "recoil";
import { Household } from "../library/household";
import { useCallback } from "react";

const householdState = atom<Household>({
    key: "findhousing_householdState",
    default: undefined
});

const useHousehold = () => {
    const [state, setState] = useRecoilState(householdState);

    const setHousehold = useCallback((value: Partial<Household>) => {
        setState((current: Household) => new Household({ ...current, ...value }))
    }, []);

    return ({ ...state, setHousehold });
};

export { useHousehold }
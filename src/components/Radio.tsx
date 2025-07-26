import styles from "../styles/Radio.module.scss";

export interface IRadioProps {
    id?: string;
    values: string[];
    value?: string;
    inputWidth?: string;
    inError?: boolean;
    onChange: (value: string) => void;
}

export function Radio(props: IRadioProps) {
    function select(value: string) {
        props.onChange(value);
    }

    return (
        <div id={props.id} className={`${styles.radio} ${props.inError ? "error" : ""}`} style={{ minWidth: "min-content" }}>
            {props.values.map((value: string) => (
                <label key={value} tabIndex={0} className={`${styles.hdsRadioItem} ${props.value === value ? styles.active : ""}`} onClick={() => select(value)} >
                    {value}
                </label>
            ))}
        </div>
    );
}
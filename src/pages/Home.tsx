import styles from '../styles/Page.module.scss'

import React from 'react'
import { GoAAccordion, GoAButton, GoAButtonGroup, GoACallout, GoACheckbox, GoAFormItem } from '@abgov/react-components'
import { Radio } from '../components/Radio'
import { useHousehold } from '../hooks/useHousehold'
import { convertToYesNo, hasErrors } from '../library/common'
import { Situation } from '../library/situation'
import { useNavigate } from 'react-router-dom'

const Home: React.FC = () => {
    const { situation, setHousehold } = useHousehold();
	const navigate = useNavigate();

    const set = (value: Partial<Situation>) => {
        setHousehold({ situation: new Situation({ ...situation, ...value }) });
    };

    const next = () => {
        const validated = new Situation(situation ?? {}).validate();
        set(validated)
        if (hasErrors(validated)) return;
        navigate("../citizenship")
    };

    const titleTextDict: Record<string, { title: string; text: string }> = {
        "Myself": { title: "Do you need immediate temporary housing?", text: "Options available for urgent situations, if you don’t have somewhere safe to sleep tonight." },
        "A friend or family member": { title: "Does the household you are helping need immediate temporary housing?", text: "Options available for urgent situations, if the household doesn’t have somewhere safe to sleep tonight." },
        "A client or customer": { title: "Does your client’s household need immediate temporary housing?", text: "Options available for urgent situations, if your client’s household doesn’t have somewhere safe to sleep tonight." }
    }

    return (
        <div className={`${styles.page} ${styles.home}`}>
            <h2>Discover what housing options may be available to you</h2>
            <p>To find housing options that may be a good fit for you, we’ll ask a few questions. <strong>All of your answers are anonymous. These questions should take about 5 minutes.</strong></p>
            <div>
                <GoAAccordion heading="What questions will I be asked?" headingSize="medium">
                    <p>These questions are based on eligibility criteria for housing options that may be a good fit for you. We will need to learn a few things about:</p>
                    <ul>
                        <li>household income;</li>
                        <li>citizenship status;</li>
                        <li>preferred locations; and,</li>
                        <li>number of family members.</li>
                    </ul>
                </GoAAccordion>
            </div>

            <GoACallout type="information">
                <h4>Potential housing options</h4>
                <p>Once you’re done, you will see applicable housing options. Seeing these options <strong>does not mean</strong> there are units available right now, but you can <strong>learn more and get details on how to apply.</strong></p>
            </GoACallout>
            <h2>Let's get started!</h2>
            <GoAFormItem label={"I'm looking to help:"} error={situation?.errorState.helpFor} >
                <Radio values={["Myself", "A friend or family member", "A client or customer"]} value={situation?.helpFor} inError={!!situation?.errorState.helpFor} onChange={(value: string) => set({ helpFor: value })} />
            </GoAFormItem>

            {situation?.helpFor && <>
                <ErgentQuestion title={titleTextDict[situation.helpFor].title} text={titleTextDict[situation.helpFor].text} />
                <GoAFormItem label={""} error={situation?.errorState.isErgent} >
                    <Radio values={["Yes", "No"]} value={convertToYesNo(situation?.isErgent)} inError={!!situation?.errorState.isErgent} onChange={(value: string) => set({ isErgent: value === "Yes" })} />
                </GoAFormItem>
                {situation?.isErgent && <>
                    <IsNotSafe />
                    <GoAFormItem label="If you or someone you know is in immediate danger, call 911" error={situation?.errorState.isUnderstood}>
                        <GoACheckbox name="item" text="I understand the suggested housing options do not provide the household with emergency housing and want to continue." value="" checked={situation?.isUnderstood?? false} error={!!situation?.errorState.isUnderstood} onChange={(_, value) => set({isUnderstood: value})} />
                    </GoAFormItem>
                </>
                }</>}
            <hr />
            <GoAButtonGroup alignment="start" gap="relaxed">
                <GoAButton type="primary" onClick={() => next()}>
                    Next: Citizenship
                </GoAButton>
            </GoAButtonGroup>
        </div>
    )
};

const ErgentQuestion = ({ title, text }: { title: string; text: string }) => {
    return (
        <GoACallout type="important">
            <h4>{title}</h4>
            <p>{text}</p>
        </GoACallout>
    );
};

const IsNotSafe = () => {
    return (
        <div id="divIsNotSafe" className="mt-4">
            <h2>Find shelters</h2>
            <p>
                Individuals and families can access emergency shelters and temporary housing when facing family violence, domestic violence or homelessness.
            </p>
            <p>
                <a href="https://www.alberta.ca/find-shelters" target="_blank" rel="noopener noreferrer">
                    https://www.alberta.ca/find-shelters
                </a>
            </p>
            <br />
            <p>
                <a
                    href="https://www.alberta.ca/emergency-financial-assistance"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: 24 }}
                >
                    <strong>24-hour Emergency Income Support Contact Centre</strong>
                </a>
            </p>
            <span>
                <div id="divEmergency">
                    <span>
                        If the household is facing an emergency need for food, medication, or temporary shelter.
                    </span>
                </div>
                <strong>24 hours a day, 365 days a year</strong>
            </span>
            <p>
                Call toll free:
                <a href="tel:1-866-644-5135">
                    <span className="underline">1-866-644-5135</span>
                </a>
                <br />
                Email:
                <a href="mailto:css.iscc@gov.ab.ca">
                    <span className="underline">css.iscc@gov.ab.ca</span>
                </a>
                (responses may take 1-3 business days)
            </p>
        </div>
    )
};

export default Home

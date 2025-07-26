import type { ErrorState, IErrorState } from "./common";

interface ISituation {
    helpFor?: string;
    isErgent?: boolean;
    isUnderstood?: boolean;
}

class Situation implements IErrorState<Partial<ISituation>> {
    readonly helpFor?: string;
    readonly isErgent?: boolean;
    readonly isUnderstood?: boolean;
    private readonly validated: boolean;

    constructor(from: Partial<ISituation>) {
        this.helpFor = from.helpFor;
        this.isErgent = from.isErgent;
        this.isUnderstood = from.isUnderstood;
        this.validated = (from as Situation)?.validated ?? false;
    }

    validate() {
        return new Situation({ ...this, validated: true });
    }

    get errorState(): ErrorState<Partial<Situation>> {
        return this.validated ? {
            helpFor: !this.helpFor ? "An individual must be specified." : "",
            isErgent: this.isErgent === undefined ? "Please select Yes or No." : "",
            isUnderstood: this.isErgent && !this.isUnderstood ? "Please acknowledge the above if you wish to proceed." : "",
        } : {};
    }
}

export {
    Situation
};
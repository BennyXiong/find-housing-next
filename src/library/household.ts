import type { ErrorState, IErrorState } from "./common";
import type { Situation } from "./Situation";

interface IHousehold {
	situation?: Situation;
}
class Household implements IErrorState<Partial<IHousehold>> {
	readonly situation?: Situation;
	private readonly validated: boolean;

	constructor(from: Partial<IHousehold>) {
		this.situation = from.situation;
		this.validated = (from as Household)?.validated ?? false;
	}

	validate() {
		return new Household({ ...this, validated: true });
	}

	get errorState(): ErrorState<Partial<Household>> {
		return this.validated ? {
		} : {};
	}
}

export {
	Household
};
import type { ErrorState, IErrorState } from "./common";
import type { LocationInfo } from "./location";
import type { Situation } from "./situation";

interface IHousehold {
	situation?: Situation;
	location?: LocationInfo;
}
class Household implements IErrorState<Partial<IHousehold>> {
	readonly situation?: Situation;
	readonly location?: LocationInfo;
	private readonly validated: boolean;

	constructor(from: Partial<IHousehold>) {
		this.situation = from.situation;
		this.location = from.location;
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
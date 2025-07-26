import type { ErrorState, IErrorState } from "./common";

interface ILocationInfo {
    community?: string;
}

class LocationInfo implements IErrorState<Partial<ILocationInfo>> {
    readonly community?: string;
    private readonly validated: boolean;

    constructor(from: Partial<ILocationInfo>) {
        this.community = from.community;
        this.validated = (from as LocationInfo)?.validated ?? false;
    }

    validate() {
        return new LocationInfo({ ...this, validated: true });
    }

    get errorState(): ErrorState<Partial<LocationInfo>> {
        return this.validated ? {
            community: !this.community ? "Please select at least one community." : ""
        } : {};
    }
}

export {
    LocationInfo
};
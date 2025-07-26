export type ErrorState<T> = {
	[property in keyof T]: string;
};

export interface IErrorState<T> {
	errorState?: ErrorState<T>;
}

export function convertToYesNo(value: boolean | undefined) {
	switch (value) {
		case true:
			return "Yes";
		case false:
			return "No";
		default:
			return "";
	}
}

export const isEmpty = (value: any): boolean => value === undefined || value === null || Number.isNaN(value) || (value.constructor === Object && Object.keys(value).length === 0);

export const hasErrors: (property: any) => boolean = (property: any) =>
	typeof property === "object" &&
	!isEmpty(property) &&
	((property.errorState && Object.values(property.errorState).some(v => v !== "")) ||
		Object.keys(property)
			.filter(k => k !== "errorState")
			.some(k => hasErrors(property[k])));
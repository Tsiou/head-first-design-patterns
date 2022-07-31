export const enum SIZES {
	TALL = "tall",
	GRANDE = "grande",
	VENTI = "venti",
}

export default abstract class Beverage {
	size: SIZES = SIZES.TALL;

	abstract get description() : string;

	abstract get cost(): number;
}

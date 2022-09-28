import { get, readable, writable, type Readable } from 'svelte/store';

export interface Budget {
	id: number;
	name: string;
	description: string;
	budgetedAmount: number;
	currentAmount: number;
	percentOfTotal: number;
}

export interface IBudgetService {
	budgets: Readable<Budget[]>;
	addBudget: () => Budget;
	removeBudget: (id: number) => void;
}

var getBugetService = (): IBudgetService => {
	const createModel = (): Budget => {
		return {
			id: Date.now(),
			name: 'Budget ABC',
			description: 'Desc of Budget',
			budgetedAmount: 550.0,
			currentAmount: 523.21,
			percentOfTotal: 23
		};
	};

	const models: Budget[] = [];

	[...Array(7).keys()].forEach((x) => models.push({ ...createModel() }));

	const bugetStore = writable<Budget[]>(models);
	var { subscribe, set, update } = bugetStore;

	return {
		budgets: { subscribe },
		addBudget: (): Budget => {
			const budget = createModel();
			var budgets = get(bugetStore);
			budgets.push(budget);
			set(budgets);
			return budget;
		},
		removeBudget: (id: number) => {
			var budgets = get(bugetStore);
			budgets = budgets.filter((b: any) => b.id !== id);
			set(budgets);
		}
	};
};

const budgetService = getBugetService();

export default budgetService;

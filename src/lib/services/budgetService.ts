import { get, readable, writable, type Readable, type Writable } from 'svelte/store';
import { v4 as uuidv4 } from 'uuid';

export type Budget = {
	id: string;
	name: string;
	description: string;
	budgetedAmount: number;
	currentAmount: number;
	percentOfTotal: number;
};

export type BudgetTotal = {
	budgetTotal: number;
	current: number;
};

export interface IBudgetService {
	budgets: Writable<Budget[]>;
	budgetTotal: Readable<BudgetTotal>;
	addBudget: () => Budget;
	removeBudget: (id: string) => void;
}

var getBugetService = (): IBudgetService => {
	const createModel = (id: string): Budget => {
		return {
			id,
			name: 'Budget ABC',
			description: 'Desc of Budget',
			budgetedAmount: 550.0,
			currentAmount: 523.21,
			percentOfTotal: 23
		};
	};

	const models: Budget[] = [];

	[...Array(7).keys()].forEach((x) => models.push({ ...createModel(uuidv4()) }));

	const budgetTotal = writable<BudgetTotal>({ budgetTotal: 0, current: 0 });
	var { subscribe: totalSub, set: totalSet } = budgetTotal;

	const bugetStore = writable<Budget[]>(models);
	var { subscribe, set } = bugetStore;

	subscribe((budgets: Budget[]) => {
		const budgetTotal = budgets.reduce((sum, current) => sum + current.budgetedAmount, 0);
		const current = budgets.reduce((sum, current) => sum + current.currentAmount, 0);
		totalSet({ budgetTotal, current });
	});

	return {
		budgets: bugetStore,
		budgetTotal: { subscribe: totalSub },
		addBudget: (): Budget => {
			const budget = createModel(uuidv4());
			var budgets = get(bugetStore);
			budgets.push(budget);
			set(budgets);
			return budget;
		},
		removeBudget: (id: string) => {
			var budgets = get(bugetStore);
			console.log(budgets);
			budgets = budgets.filter((b: any) => b.id !== id);
			set(budgets);
		}
	};
};

const budgetService = getBugetService();

export default budgetService;

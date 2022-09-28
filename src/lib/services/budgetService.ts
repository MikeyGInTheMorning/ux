import { get, readable, writable, type Readable } from 'svelte/store';
import { v4 as uuidv4 } from 'uuid';

export interface Budget {
	id: string;
	name: string;
	description: string;
	budgetedAmount: number;
	currentAmount: number;
	percentOfTotal: number;
}

export interface IBudgetService {
	budgets: Readable<Budget[]>;
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

    
	[...Array(7).keys()].forEach((x) => models.push({ ...createModel(uuidv4()) }))



	const bugetStore = writable<Budget[]>(models);
	var { subscribe, set, update } = bugetStore;

	return {
		budgets: { subscribe },
		addBudget: (): Budget => {
			const budget = createModel( uuidv4());
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

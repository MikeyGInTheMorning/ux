import { get, readable, writable, type Readable, type Writable } from 'svelte/store';
import { v4 as uuidv4 } from 'uuid';

export type Budget = {
	id: string;
	name: string;
	description: string;
	estimatedBudget: number;
	usedBudget: number;
	percentOfTotal: number;
};

export type BudgetTotal = {
	estimatedIncome: number;
	estimatedBudgetTotal: number;
	targetBudget: number;
	usedBudget: number;
};

export type Forecast = {
	name: string;
	estimatedAmount: number;
	monthly: number;
};

export interface IBudgetService {
	budgets: Writable<Budget[]>;
	budgetTotal: Writable<BudgetTotal>;
	forecasts: Readable<Forecast[]>;
	addBudget: () => Promise<Budget>;
	removeBudget: (id: string) => Promise<void>;
	save: () => Promise<void>;
}

var getBugetService = async (): Promise<IBudgetService> => {
	const createModel = (id: string): Budget => {
		return {
			id,
			name: 'Budget ABC',
			description: 'Desc of Budget',
			estimatedBudget: 550.0,
			usedBudget: 523.21,
			percentOfTotal: 23
		};
	};

	const getBudgets = async (): Promise<Budget[]> => {
		const res = await fetch('http://localhost:4000/api/budgets');
		return (await res.json()) as Budget[];
	};

	const saveBudgets = async (budgets: Budget[]): Promise<void> => {
		const res = await fetch('http://localhost:4000/api/budgets', {
			method: 'POST',
			body: JSON.stringify(budgets),
			headers: {
				'Content-Type': 'application/json'
			}
		});
	};

	const budgetTotal = writable<BudgetTotal>({
		estimatedBudgetTotal: 0,
		usedBudget: 0,
		targetBudget: 0,
		estimatedIncome: 0
	});
	
	var { subscribe: tSub, update: tUpdate } = budgetTotal;

	const bugetStore = writable<Budget[]>(await getBudgets());
	var { subscribe, set } = bugetStore;

	subscribe((budgets: Budget[]) => {
		const estimatedBudget = budgets.reduce((sum, current) => sum + current.estimatedBudget, 0);
		const usedBudget = budgets.reduce((sum, current) => sum + current.usedBudget, 0);

		tUpdate((total) => {
			total.estimatedBudgetTotal = estimatedBudget;
			total.usedBudget = usedBudget;
			total.targetBudget = total.estimatedBudgetTotal * 1.5;
			return total;
		});
	});

	const forecastStore = writable<Forecast[]>([]);
	var { subscribe: fSub, set: fSet, update: fupdate } = forecastStore;

	tSub((totals: BudgetTotal) => {
		const forecastArr: Forecast[] = [];

		[1, 2, 3, 4, 5, 6, 9, 12, 16, 24, 36, 60].forEach((x) =>
			forecastArr.push({
				name: `${x} month${x == 0 ? '' : 's'}`,
				estimatedAmount: x * Math.abs(totals.estimatedIncome / 12 - totals.estimatedBudgetTotal),
				monthly: totals.estimatedIncome / 12
			})
		);

		fSet(forecastArr);
	});

	return {
		budgets: bugetStore,
		budgetTotal,
		forecasts: { subscribe: fSub },
		addBudget: async (): Promise<Budget> => {
			const budget = createModel(uuidv4());
			var budgets = get(bugetStore);
			budgets.push(budget);
			set(budgets);
			await saveBudgets(budgets);
			return budget;
		},
		removeBudget: async (id: string) => {
			var budgets = get(bugetStore);
			console.log(budgets);
			budgets = budgets.filter((b: any) => b.id !== id);
			set(budgets);
			await saveBudgets(budgets);
		},
		save: async () => await saveBudgets(get(bugetStore))
	};
};

const budgetService = await getBugetService();

export default budgetService;

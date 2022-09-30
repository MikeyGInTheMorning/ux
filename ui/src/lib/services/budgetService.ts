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

export type Transaction = {
	id: string;
	date: Date;
	name: string;
	amount: number;
	bucketId: string;
};

export interface IBudgetService {
	budgets: Writable<Budget[]>;
	budgetTotal: Writable<BudgetTotal>;
	forecasts: Readable<Forecast[]>;
	transactions: Writable<Transaction[]>;
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
		const body = await res.json();
		const ret = body.data ? JSON.parse(body.data) : [];
		return ret;
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

	const serverBudgets = await getBudgets();
	const budgets = writable<Budget[]>(serverBudgets);
	var { subscribe, set } = budgets;

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

	const transactions = writable<Transaction[]>([]);
	var { subscribe: trSub, update: trUpdate } = transactions;

	return {
		budgets: budgets,
		budgetTotal,
		transactions,
		forecasts: { subscribe: fSub },
		addBudget: async (): Promise<Budget> => {
			const budget = createModel(uuidv4());
			var b = get(budgets);
			b.push(budget);
			set(b);
			await saveBudgets(b);
			return budget;
		},
		removeBudget: async (id: string) => {
			var b = get(budgets);
			b = b.filter((b: any) => b.id !== id);
			set(b);
			await saveBudgets(b);
		},
		save: async () => await saveBudgets(get(budgets))
	};
};

const budgetService = await getBugetService();

export default budgetService;

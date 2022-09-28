import { readable, writable, type Readable } from "svelte/store"
export interface Budget{

}

export interface IBudgetService {
    budgets:Readable<Budget[]>,
    addBudget: () => Budget,
    removeBudget: (id:number) => void
}

var getBugetService = ():IBudgetService => {
    var { subscribe, set}= writable<Budget[]>([])

    return {
        budgets: {subscribe},
        addBudget: () =>{
            return {

            }
        },
        removeBudget: () =>{

        }
    }
}
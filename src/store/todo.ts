import { defineStore } from "pinia";

interface TodoStore {
    todo: any[] ,
}
export const Todo = defineStore("main",{
    state: ():TodoStore => {
        return {
            todo:[],
        }
    },
    getters: {
        total(state) {
            return state.todo.length
        }
    }
});
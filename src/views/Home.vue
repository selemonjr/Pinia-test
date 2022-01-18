<template>
  <div class="home">
    <div class="title"><h1 class="todoApp">Todo App</h1></div>
    <div class="app">
      <p v-if="main.total > 0" class="tasks">You have {{main.total}} task(s) left </p>
        <div>
      <input v-model="item" placeholder="Add an item" />
    <button @click="addItem(item)" class="add" :disabled="!item">Add Item</button>
   </div>
   <div v-if="todo && todo.length > 0">
     <div v-for="(item,index) in todo" :key="index">
      <div class="flex">
         <ul>
           <li>{{item}}</li>
         </ul>
        <div class="inputs">
           <button @click="deleteItem(index)" class="delete">Delete</button>
        </div>

      </div>
     </div>
   </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Todo} from "@/store/todo";
import {storeToRefs} from "pinia";
import {ref} from "vue";
import {defineComponent} from "vue";
export default defineComponent({
  setup() {
const main = Todo();
const {todo} = storeToRefs(main);
const item = ref("");
const addItem = (item:string) => {
  main.$patch((state) => {
    state.todo.push(item)
  });
  
};
const deleteItem = (index:number) => {
  main.$patch((state) => {
    state.todo.splice(index,1)
  })
}
return {
  deleteItem,
  addItem,
  item,
  todo,
  main,
}
}
})
</script>

<style scoped>
.home {
  display:grid;
  place-items:center;
  margin-top:2rem;
}
.title {
  margin-bottom:1rem;
}
ul {
  list-style:none;
}
.flex {
  display:flex;
  justify-content:space-between;
  align-items:center;
  width:15em;
  margin-top:10px;
  margin-left:1rem;
}
.app {
  width:20em;
  max-height:30em;
  background:#eee;
  padding:1rem;
}
.todoApp {
  font-size:2rem;
}
input {
  padding:7px 4px;
  width:10rem;
  border:none;
  border-bottom:1px solid #000;
  outline:none;
  background:#eee;
  margin-left:10px;
}
button {
    padding:5px 4px;
    width:80px;
    margin-left:10px;
}
.add:hover {
  border:none;
  background:#008000;
  color:#fff;
  transition:0.5s ease;
  border-radius:3px;
}

.delete:hover {
  border:none;
  background:#ff0000;
  color:#fff;
  transition:0.5s ease;
  border-radius:3px;
}
.tasks {
  margin-left:3em;
  margin-bottom:1rem;
}


</style>

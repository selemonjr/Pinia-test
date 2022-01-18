import { defineComponent } from 'vue';
<template>
    <div>
        <nav>
            <div class="nav__logo">
                <img src="https://pinia.vuejs.org/logo.svg" alt="Pinia">
            </div>
            <div class="nav__routes">
                <ul>
                    <li>Home</li>
                    <li>Pinia</li>
                </ul>
            </div>
        </nav>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name:"Navigation"
})
</script>
<style scoped>
nav {
    display:flex;
    justify-content: space-between;
    align-items: center;
    width:100%;
    background: #eee;
    height: 10vh;
}
.nav__logo img {
    width: 3rem;
    height:3rem;
}
.nav__routes ul {
    display:inline-flex;
    list-style:none;
}
.nav__routes ul li {
    margin:1rem;
    cursor:pointer;
    position: relative;
}

.nav__routes ul li::after {
    content: "";
    display: block;
    position:absolute;
    background:#ffee00;
    height:2px;
    width:0;
    left: 0;
}
.nav__routes ul li:hover::after {
    width:100%;
    transition: 0.5s ease-out;
}

</style>
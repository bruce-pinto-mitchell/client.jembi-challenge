<template>
    <div id="app">
        <header>
            <div class="header-title">Bruce Mitchell's Jembi - FHIR Challenge</div>
            <div class="header-options">
        <span class="header-option" v-on:click="onHomeClicked()">
          Home
        </span>
                <span class="header-option" v-on:click="onCreateClicked()">
          Create
        </span>
                <span class="header-option" v-on:click="onSearchClicked()">
          Search
        </span>
            </div>
        </header>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app',
        methods: {
            onHomeClicked() {
                this.$router.push('/landing');
            },
            onCreateClicked() {
                this.$router.push('/create');
            },
            onSearchClicked() {
                this.$router.push('/search');
            }
        }
    }
</script>

<style scoped>
    header {
        display: flex;
        flex-direction: row;
        background-color: #002eb5;
        height: 10vh;
    }

    .header-title {
        color: #FFFFFF;
        justify-self: flex-start;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-left: 15px;
    }

    .header-options {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-self: flex-end;
        position: fixed;
        top: 0;
        right: 0;
        height: 10vh;
    }

    .header-option {
        margin: 0 30px;
        border: 1px solid black;
        padding: 10px 30px;
        font-size: 15px;
        color: #FFFFFF;
        background-color: #7724cf;
    }

    .header-option:hover {
        cursor: pointer;
    }
</style>

<template>
    <div>
        <h2>Search</h2>
        <table>
            <tr class="search">
                <td>Enter Observation Identifier</td>
                <td><input id="searchInput" type="search"><span class="hint">Mock data examples range from 100 - 110</span></td>
            </tr>
            <tr>
                <td colspan="2"><button v-on:click="onSearchClicked()">Search</button></td>
            </tr>
        </table>
        <div id="invalidInput" style="display: none;">
            <span class="invalid-input">For the purpose of this POC please enter a value between 100 and 110 (inclusive)</span>
        </div>
        <div id="searchResult" style="display: none; flex-direction: column;">
            <h3 >Search Result:</h3>
            <table id="searchResultTable">
                <tr>
                    <td></td>
                    <td></td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: 'Search',
        methods: {
            onSearchClicked() {
                const searchInput = document.querySelector('#searchInput');
                if (parseInt(searchInput.value, 10) < 100 || parseInt(searchInput.value, 10) > 110) {
                    document.querySelector('#invalidInput').style.display = 'block';
                    return;
                }
                axios.get('http://localhost:3000/api/search?identifier=' + searchInput.value).then(function(response) {
                    if (response) {
                        const searchResult = document.querySelector('#searchResult');
                        const searchResultTable = document.querySelector('#searchResultTable');

                        searchResult.style.display = 'flex';
                        Object.keys(response.data.observation).forEach((key, index) => {
                            const row = searchResultTable.insertRow(index);
                            const keyCell = row.insertCell(0);
                            const valueCell = row.insertCell(1);
                            keyCell.innerHTML = key;
                            valueCell.innerHTML = response.data.observation[key];
                        })
                    }
                });
            }
        }
    }
</script>

<style scoped>
    .search {
        margin-bottom: 20px;
    }

    .hint {
        margin-left: 15px;
        font-size: 10px;
        font-style: italic;
    }

    .invalid-input {
        font-size: 10px;
        font-style: italic;
        color: red;
    }
</style>

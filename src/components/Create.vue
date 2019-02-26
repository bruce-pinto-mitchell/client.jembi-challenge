<template>
    <div>
        <h1>Create</h1>
        <form name="createForm" method="POST" action="localhost:3000/api/create">
            <table>
                <tr>
                    <td>Based On</td>
                    <td><input type="text" v-model="basedOn"></td>
                </tr>
                <tr>
                    <td>Part of</td>
                    <td><input type="text" v-model="partOf"></td>
                </tr>
                <tr>
                    <td>Status</td>
                    <td><input type="text" v-model="status"></td>
                </tr>
                <tr>
                    <td>Category</td>
                    <td><input type="text" v-model="category"></td>
                </tr>
                <tr>
                    <td>Code</td>
                    <td><input type="text" v-model="code"></td>
                </tr>
                <tr>
                    <td>Subject</td>
                    <td><input type="text" v-model="subject"></td>
                </tr>
                <tr>
                    <td>Focus</td>
                    <td><input type="text" v-model="focus"></td>
                </tr>
                <tr>
                    <td>Encounter</td>
                    <td><input type="text" v-model="encounter"></td>
                </tr>
                <tr>
                    ...
                </tr>
                <tr>
                    <td colspan="2"><button v-on:click="onSaveClicked()">Save</button></td>
                </tr>
            </table>
        </form>
        <div id="createResult" style="display: none;">
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: 'Create',
        data: function () {
            return {
                basedOn: '',
                partOf: '',
                status: '',
                category: '',
                code: '',
                subject: '',
                focus: '',
                encounter: ''
            }
        },
        methods: {
            onSaveClicked() {
                axios.post('http://localhost:3000/api/create', {
                    basedOn: this.basedOn,
                    partOf: this.partOf,
                    status: this.status,
                    category: this.category,
                    code: this.code,
                    subject: this.subject,
                    focus: this.focus,
                    encounter: this.encounter
                }).then((response) => {
                    const createResultText = response.status === 200 ? 'Successfully Created!!!' : 'Error during creation',
                        createResult = document.querySelector('#createResult');

                    createResult.style.display = 'block';
                    createResult.innerHTML = `${createResultText}`;
                });
            }
        }
    }
</script>

<style scoped>
    #createResult {
        margin: 20px 0;
    }
</style>

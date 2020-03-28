<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button @click="selectedComponent = 'appAuthor'">Author</button>
                <button @click="selectedComponent = 'appQuota'">Quota</button>
                <button @click="selectedComponent = 'appNew'">New</button>
                <hr>
                <p>{{ selectedComponent }}</p>
                <component :is="selectedComponent">
                    <p>Default Component</p>
                </component>
            </div>
        </div>
    </div>
</template>

<script>
import Author from './compornents/Author.vue';
import Quota from './compornents/Quota.vue';
import New from './compornents/New.vue';
    export default {
        data: function (){
            return {
                quoteTitle: 'The Quota',
                selectedComponent: 'appQuote'
            }
        },
        methods: {

        },
        components: {
            appAuthor: Author,
            appQuota: Quota,
            appNew: New
        }
    }
</script>

<style>
</style>

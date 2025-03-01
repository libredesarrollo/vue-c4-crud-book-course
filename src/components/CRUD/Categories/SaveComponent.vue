<template>
    <h1>
        <template v-if="category">
            Update: <span class="font-bold"> {{ category.titulo }}</span>
        </template>
        <template v-else>
            Create
        </template>
    </h1>

    <div class="card max-w-lg mx-auto">
        <!-- <o-field label="Title"> -->
        <o-field label="Title" :variant="errors.title ? 'danger' : ''" :message="errors.title">
            <o-input v-model="form.title" expanded></o-input>
        </o-field>

        <o-button variant="primary" @click="send">Send</o-button>
    </div>

</template>

<script>
export default {
    data() {
        return {
            category: '',
            form: {
                title: '',
            },
            errors: {
                title: '',
            }
        }
    },
    async mounted() {

        if (this.$route.params.id) {
            await this.getCategory()
            this.init()
        }

    },
    methods: {
        init() {
            this.form.title = this.category.titulo
        },
        async getCategory() {
            this.category = await axios.get('http://code4movies.test/api/categoria/' + this.$route.params.id)
                .then(res => res.data)
                .catch(error => error)
        },
        async send() {

            let res = ''
            if (this.category == '') {
                const formData = new FormData()
                formData.append('titulo', this.form.title)
                res = await axios.post('http://code4movies.test/api/categoria', formData)
                    .then(res => res.data) // 200
                    .catch(error => error) // 500-400 
                this.cleanForm()
            } else {
                res = await axios.put('http://code4movies.test/api/categoria/' + this.category.id, this.form)
                    .then(res => res.data) // 200
                    .catch(error => error) // 500-400 
                this.cleanForm()
            }

            // error
            if (res.response && res.response.data.titulo) {
                this.errors.title = res.response.data.titulo
            }
        },
        cleanForm() {
            this.errors = {
                title: ''
            }
        }
    },
}
</script>
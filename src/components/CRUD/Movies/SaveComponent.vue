<template>
    <h1>
        <template v-if="movie">
            Update: <span class="font-bold"> {{ movie.titulo }}</span>
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
        <o-field label="Description" :variant="errors.description ? 'danger' : ''" :message="errors.description">
            <o-input v-model="form.description" type="textarea" expanded></o-input>
        </o-field>
        <o-field label="Category" :variant="errors.category_id ? 'danger' : ''" :message="errors.category_id">
            <o-select v-model="form.category_id" expanded>
                <option v-for="c in categories" :key="c" :value="c.id">{{ c.titulo }}</option>
            </o-select>
        </o-field>

        <o-button variant="primary" @click="send">Send</o-button>
    </div>

</template>

<script>
export default {
    data() {
        return {
            categories: [],
            movie: '',
            form: {
                title: '',
                description: '',
                category_id: '',
            },
            errors: {
                title: '',
                description: '',
                category_id: '',
            }
        }
    },
    async mounted() {

        if (this.$route.params.id) {
            await this.getMovie()
            this.init()
        }

        this.getCategories()
    },
    methods: {
        init() {
            this.form.title = this.movie.titulo
            this.form.description = this.movie.descripcion
            this.form.category_id = this.movie.categoria_id
        },
        async getCategories() {
            this.categories = await axios.get('http://code4movies.test/api/categoria')
                .then(res => res.data)
                .catch(error => error)
        },
        async getMovie() {
            this.movie = await axios.get('http://code4movies.test/api/pelicula/' + this.$route.params.id)
                .then(res => res.data)
                .catch(error => error)
        },
        async send() {


            // const res = await axios.post('http://code4movies.test/api/pelicula',{
            //     titulo: this.form.title,
            //     descripcion: this.form.description,
            //     categoria_id: this.form.categoria_id
            // })


            let res = ''
            if (this.movie == '') {
                const formData = new FormData()
                formData.append('titulo', this.form.title)
                formData.append('descripcion', this.form.description)
                formData.append('categoria_id', this.form.category_id)
                res = await axios.post('http://code4movies.test/api/pelicula', formData)
                    .then(res => res.data) // 200
                    .catch(error => error) // 500-400 
                this.cleanForm()
            } else {
                res = await axios.put('http://code4movies.test/api/pelicula/' + this.movie.id, this.form)
                    .then(res => res.data) // 200
                    .catch(error => error) // 500-400 
                this.cleanForm()
            }

            // errors
            if (res.response && res.response.data.titulo) {
                this.errors.title = res.response.data.titulo
            }
            if (res.response && res.response.data.descripcion) {
                this.errors.description = res.response.data.descripcion
            }
            if (res.response && res.response.data.categoria_id) {
                this.errors.category_id = res.response.data.categoria_id
            }


        },
        cleanForm() {
            this.errors = {
                title: '',
                description: '',
                category_id: '',
            }
        }
    },
}
</script>
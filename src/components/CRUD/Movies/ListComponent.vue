<template>

    <o-modal v-model:active="confirmDeleteActive">
        <div class="m-4">
            <p class="mb-3">Are you sure you want to delete the <span class="font-bold">{{ deleteMovieRow && deleteMovieRow.row ? deleteMovieRow.row.titulo : '' }}</span> record?</p>
            <div class="flex gap-2 flex-row-reverse">
                <o-button @click="confirmDeleteActive = false">Cancel</o-button>
                <o-button variant="danger" @click="remove">Delete</o-button>
            </div>
        </div>
    </o-modal>

    <h1>List {{ deleteMovieRow }}</h1>

    <div class="card">
        <!-- <o-button @click="$router.push('/save')" variant="primary">Create</o-button> -->
        <div class="mb-4 ms-2">
            <o-button @click="$router.push({ name: 'movie.save' })" variant="primary" size="large">Create</o-button>
            <!-- <o-button @click="" variant="primary">
        <router-link to="/save">Create</router-link>
    </o-button> -->
        </div>
        <o-table :data="movies" :bordered="true" :striped="true" :hoverable="true" :selectable="true">
            <o-table-column field="id" label="ID" v-slot="m" sortable>
                {{ m.row.id }}
            </o-table-column>
            <o-table-column field="titulo" label="Title" v-slot="m" sortable>
                {{ m.row.titulo }}
            </o-table-column>
            <o-table-column label="Actions" v-slot="m">
                <o-button @click="$router.push({ name: 'movie.save', params: { id: m.row.id } })"
                    icon-left="pencil">Edit</o-button>
                <div class="inline ms-3">
                    <o-button variant="danger" size="small" @click="confirmDeleteActive = true; deleteMovieRow = m"
                        icon-left="delete">Delete</o-button>
                </div>
            </o-table-column>
        </o-table>
    </div>
    <!-- <o-table :data="movies" :columns="[
        { field: 'id', label: 'ID', },
        { field: 'titulo', label: 'Titulo' },
        { field: 'descripcion', label: 'Descripcion' },]">
    </o-table> -->

    <!-- <div v-for="m in movies" :key="m.id">
        <h3>{{ m.titulo }}</h3>
        <p>{{ m.descripcion }}</p>
    </div> -->



</template>
<script>
export default {
    created() {
        // axios.get('http://code4movies.test/api/pelicula')
        //     .then(res => this.movies = res.data)
        //     .catch(error => console.log(error))

        this.getMovies();
    },
    data() {
        return {
            movies: [],
            confirmDeleteActive: false,
            deleteMovieRow: ''
        }
    },
    methods: {
        // remove(movie){
        remove() {
            axios.delete('http://code4movies.test/api/pelicula/' + this.deleteMovieRow.row.id)
                .then(res => res.data)
                .catch(error => error)
            this.movies.splice(this.deleteMovieRow.index, 1)
            this.confirmDeleteActive = false
        },
        async getMovies() {
            this.movies = await axios.get('http://code4movies.test/api/pelicula')
                .then(res => res.data)
                .catch(error => error)
        },
    },
}
</script>
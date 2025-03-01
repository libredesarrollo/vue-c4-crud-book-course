<template>

    <o-modal v-model:active="confirmDeleteActive">
        <div class="m-4">
            <p class="mb-3">Are you sure you want to delete the <span class="font-bold">{{ deleteCategoryRow && deleteCategoryRow.row ? deleteCategoryRow.row.titulo : '' }}</span> record?</p>
            <div class="flex gap-2 flex-row-reverse">
                <o-button @click="confirmDeleteActive = false">Cancel</o-button>
                <o-button variant="danger" @click="remove">Delete</o-button>
            </div>
        </div>
    </o-modal>

    <h1>List</h1>

    <div class="card">
        <div class="mb-4 ms-2">
            <o-button @click="$router.push({ name: 'category.save' })" variant="primary" size="large">Create</o-button>
        </div>

        <o-table :data="categories" :bordered="true" :striped="true" :hoverable="true" :selectable="true">
            <o-table-column field="id" label="ID" v-slot="c" sortable>
                {{ c.row.id }}
            </o-table-column>
            <o-table-column field="titulo" label="Title" v-slot="c" sortable>
                {{ c.row.titulo }}
            </o-table-column>
            <o-table-column label="Actions" v-slot="c">
                <o-button @click="$router.push({ name: 'category.save', params: { id: c.row.id } })"
                    icon-left="pencil">Edit</o-button>
                <div class="inline ms-3">
                    <o-button variant="danger" size="small" @click="confirmDeleteActive = true; deleteCategoryRow = m"
                        icon-left="delete">Delete</o-button>
                </div>
            </o-table-column>
        </o-table>
    </div>
</template>
<script>
export default {
    created() {
        this.getCategories();
    },
    data() {
        return {
            categories: [],
            confirmDeleteActive: false,
            deleteCategoryRow: ''
        }
    },
    methods: {
        remove() {
            axios.delete('http://code4movies.test/api/categoria/' + this.deleteCategoryRow.row.id)
                .then(res => res.data)
                .catch(error => error)
            this.categories.splice(this.deleteCategoryRow.index, 1)
            this.confirmDeleteActive = false
        },
        async getCategories() {
            this.categories = await axios.get('http://code4movies.test/api/categoria')
                .then(res => res.data)
                .catch(error => error)
        },
    },
}
</script>
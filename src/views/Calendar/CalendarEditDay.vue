<template>
    <div class="calendar__container--day__edit">
        <form>
            <input type="text" v-model="newEvent"/>
            <button @click.prevent="saveEdit">
                <i class="fas fa-check-circle"></i>
            </button>
        </form>
    </div>
</template>

<script>
export default {
    data(){
        return {
            newEvent: ''
        }
    },
    methods: {
        saveEdit(){
            this.$emit("confirmEdit", this.newEvent)
        }
    }
}
</script>


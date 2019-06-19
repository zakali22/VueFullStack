<template>
    <div class="calendar__event">
        <h2>Add new Event: Monday</h2>
        <form>
            <label for="event">
                <p>Enter a new event</p>
                <input id="event" v-model="newEvent"/>
            </label>
            <div class="calendar__event--options">
                <label for="work">
                    <p>Work</p>
                    <input type="radio" id="work" v-model="eventType"/>
                </label>
                <label for="personal">
                    <p>Personal</p>
                    <input type="radio" id="personal" v-model="eventType"/>
                </label>
                <label for="social">
                    <p>Social</p>
                    <input type="radio" id="social" v-model="eventType"/>
                </label>
            </div>
            <button>Add Event</button>
        </form>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    data(){
        return {
            newEvent: '',
            eventType: '',
            activeDay: ''
        }
    },
    computed: {
        ...mapGetters([
            'getActiveDay'
        ])
    },
    created(){
        console.log(this.getActiveDay)
        this.activeDay = this.getActiveDay
    }
}
</script>

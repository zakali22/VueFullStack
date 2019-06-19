<template>
    <div class="calendar">
        <div class="calendar__container">
            <div v-for="(day, index) in week" :key="index" class="calendar__container--day">
                <div class="calendar__container--day__header">
                    <h4>{{day.name}}</h4>
                </div>
                <div  v-for="(event, id) in day.events" :key="id" class="calendar__container--day__event">
                    <p v-if="!event.edit">{{event.details}}</p>
                    <div v-if="!event.edit" class="edits">
                        <i class="fas fa-trash-alt" @click="deleteEvent(id, index)"></i>
                        <i class="fas fa-pen-square" @click="setAsEdit(id, index)"></i>
                    </div>
                    <calendar-edit-day v-if="event.edit" @confirmEdit="saveEdit(...arguments, id, index)"></calendar-edit-day>
                </div>
                <button class="calendar__container--day__add" @click="setAsActive(index)">
                    <i class="fas fa-plus-circle"></i>
                </button>
            </div>
        </div>
        <calendar-new-event></calendar-new-event>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import CalendarEditDay from "./CalendarEditDay.vue"
import CalendarNewEvent from "./CalendarNewEvent.vue"
export default {
    components: {
        'calendar-edit-day': CalendarEditDay,
        'calendar-new-event': CalendarNewEvent
    },
    data(){
        return {
            week: []
        }
    },
    computed: {
        ...mapGetters([
            'getAllDays'
        ])
    },
    methods: {
        ...mapActions([
            'setActiveDay',
            'setEditActive',
            'editEvent',
            'deleteEvent'
        ]),
        setAsActive(index){
            const payload = {
                index
            }
            this.$store.dispatch('setActiveDay', payload)
        },
        setAsEdit(id, index){
            const payload = {
                dayIndex: index,
                eventIndex: id
            }
            this.$store.dispatch('setEditActive', payload)
        },
        saveEdit(newEvent, id, index){
            console.log(newEvent)
            const payload = {
                newEvent,
                eventIndex: id,
                dayIndex: index
            }
            this.$store.dispatch('editEvent', payload)
        },
        deleteEvent(id, index){
            const payload = {
                dayIndex: index,
                eventIndex: id
            }
            this.$store.dispatch('deleteEvent', payload)
        }
    },
    mounted(){
        this.week = this.getAllDays;
        console.log(this.week)
    }
}
</script>


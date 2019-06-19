function initialState(){
    return {
        week: [
            {
                name: 'Mon',
                longName: 'Monday',
                events: [
                    { details: 'Get Groceries', edit: false},
                    { details: 'Carpool', edit: false}
                ],
                active: false
            },
            {
                name: 'Tue',
                longName: 'Tuesday',
                events: [
                ],
                active: false
            },
            {
                name: 'Wed',
                longName: 'Wednesday',
                events: [
                ],
                active: false
            },
            {
                name: 'Thurs',
                longName: 'Thursday',
                events: [
                ],
                active: false
            },
            {
                name: 'Fri',
                longName: 'Friday',
                events: [
                ],
                active: false
            },
            {
                name: 'Sat',
                longName: 'Saturday',
                events: [
                ],
                active: false
            },
            {
                name: 'Sun',
                longName: 'Sunday',
                events: [
                ],
                active: false
            }
        ]
    }
}

const getters = {
    getActiveDay: state => {
        const {week} = state;
        week.find((el) => {
            if(el.active){
                console.log(el)
                return el
            }
        })
    },
    getAllDays: state => {
        return state.week
    }
}

const actions = {
    setActiveDay: ({commit, state}, payload) => {
        const {index} = payload;
        commit('setDayToActive', index)
    },
    setEditActive: ({commit, state}, payload) => {
        commit('setEditEventActive', payload);
    },
    editEvent: ({commit, state}, payload) => {
        commit('editEventOnDay', payload)
    },
    deleteEvent: ({commit, state}, payload) => {
        commit('deleteEventOnDay', payload)
    }
}

const mutations = {
    setDayToActive: (state, dayIndex) => {
        const {week} = state;
        week.forEach((day, index) => {
            if(index === dayIndex){
                console.log(day)
                day.active = true
            } else {
                console.log(day)
                day.active = false
            }
        })
    },
    setEditEventActive: (state, payload) => {
        const {week} = state;
        const {dayIndex, eventIndex} = payload;

        week[dayIndex].events.forEach((event, index) => {
            if(index === eventIndex){
                event.edit = true;
            } else {
                event.edit = false;
            }
        })
    },
    editEventOnDay: (state, payload) => {
        const {dayIndex, eventIndex, newEvent} = payload;    
        const {week} = state;
        if(newEvent.length > 0){
            week[dayIndex].events[eventIndex].details = newEvent;
        } else {
            week[dayIndex].events[eventIndex].details = week[dayIndex].events[eventIndex].details;
        }
        week[dayIndex].events[eventIndex].edit = false;
    },
    deleteEventOnDay: (state, payload) => {
        const {dayIndex, eventIndex} = payload;
        const {week} = state;

        week[dayIndex].events.splice(eventIndex, 1);
    }
}





export default {
    state: initialState,
    actions,
    getters,
    mutations
}
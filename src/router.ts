import Vue from 'vue'
import Router from 'vue-router'

import VotingApp from "./views/Voting/VotingApp.vue"
import CalendarApp from "./views/Calendar/CalendarApp.vue"

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: {name: 'voting_app'}
    },
    {
      path: '/voting_app',
      name: 'voting_app',
      component: VotingApp
    },
    {
      path: '/calendar_app',
      name: 'calendar_app',
      component: CalendarApp
    }
  ]
})

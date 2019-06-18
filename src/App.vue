<template>
  <div id="app">
    <nav class="navigation">
      <ul>
        <router-link tag="li" :to="{name: 'voting_app'}" exact>Voting App</router-link>
        <router-link tag="li" :to="{name: 'calendar_app'}" exact>Calendar App</router-link>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

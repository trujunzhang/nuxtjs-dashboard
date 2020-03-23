<template>
  <v-app v-show="!isLoading">
    <v-fade-transition mode="out-in">
      <nuxt/>
    </v-fade-transition>
  </v-app>
</template>

<script src="./default.js"/>


<template>
  <v-content>
    <div id="core-view">
      <v-fade-transition mode="out-in">
        <nuxt/>
      </v-fade-transition>
    </div>
    <core-footer v-if="$route.name !== 'Maps'"/>
  </v-content>
</template>

<script src="./AppView.js"/>

<style lang="scss" src="./AppView.scss"/>



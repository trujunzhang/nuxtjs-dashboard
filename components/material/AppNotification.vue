<template>
  <v-alert
    v-bind="$attrs"
    :class="[`elevation-${elevation}`]"
    :value="value"
    class="v-alert--notification"
    v-on="$listeners"
  >
    <slot/>
  </v-alert>
</template>

<script src="./AppNotification.js"/>

<style lang="scss" src="./AppNotification.scss"/>



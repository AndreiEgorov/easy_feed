<template>
  <div class="feeds">
    <h2>My feeds</h2>
    <ul>
        <li v-for="(feed, index) in feeds" :key="index">{{ feed }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Feeds",
  props: {
    feeds: Array,
  },
};
</script>

<template>
  <Feeds :feeds="feedsData" />
</template>

<script>
import Feeds from "./components/Feeds/Feeds.vue";
import {API} from "aws-amplify";

// TODO explore composition api and replace the below code
// TODO explore store options for Vue3
export default {
  name: "App",
  components: {
    Feeds,
  },
  data() {
    return {
      api: 'feeds',
      path: '/feeds',
      feedsData: []
    };
  },
  created(){
    console.log("cresated")
    API.get(this.api, this.path)
    .then(r => {
      this.feedsData = r.feeds
    })
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

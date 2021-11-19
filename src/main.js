import { createApp } from "vue";
import App from "./App.vue";



import '@aws-amplify/ui-vue';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';


Amplify.configure(awsconfig);

const app = createApp(App);

app.mount("#app");

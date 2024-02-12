import { createApp } from 'vue';
import App from './App.vue';
import { store } from './store.js'; // Importa il tuo store Vuex

// Importa bootstrap (js)
import * as bootstrap from 'bootstrap';

/* Importa il core di Font Awesome */
import { library } from '@fortawesome/fontawesome-svg-core';

/* Importa il componente di icona di Font Awesome */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* Importa icone specifiche */
import * as solidIcons from '@fortawesome/free-solid-svg-icons';
import * as regularIcons from '@fortawesome/free-regular-svg-icons';
import * as brandIcons from '@fortawesome/free-brands-svg-icons';

library.add(solidIcons.fas);
library.add(regularIcons.far);
library.add(brandIcons.fab);

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);

app.use(store);

app.mount('#app');

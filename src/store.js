import { createStore } from 'vuex';

export const store = createStore({
    state() {
        return {
            events: [] // Inizializza lo stato degli eventi
        };
    },
    mutations: {
        SET_EVENTS(state, events) {
            state.events = events; // Aggiorna lo stato degli eventi
        }
    },
    actions: {

    },
    getters: {

    }
});
export default store;
import axios from 'axios';

export default {
    getCards: function() {
        return axios.get('/api/decks')
    }
}
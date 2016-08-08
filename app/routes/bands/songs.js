import Ember from 'ember';

export default Ember.route.extend({
    model: function() {
        return this.modelFor('bands.band');
    }
});
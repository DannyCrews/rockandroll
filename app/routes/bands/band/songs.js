import Ember from 'ember';
// import wait from '../../../utils/wait';
import { capitalize as capitalizeWords } from '../../../helpers/capitalize';

export default Ember.Route.extend({
  model() {
    return this.modelFor('bands.band');
  },

  resetController(controller) {
    controller.set('songCreationStarted', false);
  },

  actions: {
    didTransition() {
      var band = this.modelFor('bands.band');
      var name = capitalizeWords(band.get('name'));
      document.title = `${name} songs - Rock & Roll`;
    },

    createSong() {
      var controller = this.get('controller'),
          band = controller.get('model');
      var song = this.store.createRecord('song', {
        title: controller.get('title'),
        band: band
      });
      song.save().then(function() { controller.set('title', '');
    });
    },
  }
});

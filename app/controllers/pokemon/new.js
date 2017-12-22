import Controller from '@ember/controller';

export default Controller.extend({
  saved: false,
  actions:{
    createPokemon: function(){
      const name = this.get('name');
      const pokemon = this.store.createRecord('pokemon', {
          id: name,
          name,
      });

      pokemon.save();

      this.setProperties({
          name: '',
          saved: true,
      });
    }
  }
});

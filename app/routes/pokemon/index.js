import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.query('pokemon', {
      limit: 100,
      offset: 0,
    }).then(function(pokemon) {
      return pokemon;
    });
  },
  actions:{
    loading() {
      console.log('loading'); //eslint-disable-line
      this.controllerFor('pokemon.index').set('loading', true);
      this.controllerFor('pokemon.new').set('saved', false);
    },
    didTransition(){
      this.controllerFor('pokemon.index').set('loading', false);
    }
  }
});

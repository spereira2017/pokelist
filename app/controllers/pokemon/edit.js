import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        editPokemon: function(id){
            const name = this.get('model.name');
            this.store.findRecord('pokemon', id).then(pokemon => {
                pokemon.set('name', name);
                pokemon.set('updatedAt', new Date());
                pokemon.save();
            });
        }
    }
});

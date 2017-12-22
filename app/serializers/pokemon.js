import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    if (payload.results) {
      payload = {
        pokemon: payload.results.map(pokemon => ({ id: pokemon.name, name: pokemon.name })),
      }
    } else {
      payload = {
        pokemon: {
          id: payload.name,
          name: payload.name,
        }
      }
    }
    return this._super(store, primaryModelClass, payload, id, requestType);
  },
});

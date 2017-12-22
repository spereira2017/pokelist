import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'https://pokeapi.co/api/v2',
  pathForType: function(type) {
    return type;
  },
  ajaxOptions: function(url, type, hash) {
    hash = hash || {};
    if (type === 'PUT') {
      hash.headers = {
        'pokemon-edit': true,
      };
    }

    return this._super(url, type, hash);
}
});

import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  updatedAt: DS.attr('date'),
  one: DS.attr('date'),
  two: DS.attr('date'),
  a: DS.attr('date'),
  b: DS.attr('date'),
  c: DS.attr('date'),
  d: DS.attr('date'),
});

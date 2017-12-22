import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('pokemon', { path: '/' }, function() {
    this.route('new');
    this.route('edit',{path: '/edit/:id'});
  });
});

export default Router;

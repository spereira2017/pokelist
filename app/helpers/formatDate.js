import Ember from 'ember';

export function formatDate(params){
	return moment(params[0]).format('YYYY-MM-DD HH:mm:ss'); //eslint-disable-line
}

export default Ember.Helper.helper(formatDate);

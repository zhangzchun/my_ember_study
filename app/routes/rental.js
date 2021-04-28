import Route from '@ember/routing/route';

// const COMMUNITY_CATEGORIES = ['Condo', 'Townhouse', 'Apartment'];
import { inject as service } from '@ember/service';

export default class RentalRoute extends Route {
  /*async model(params) {
    let response = await fetch(`/api/rentals/${params.rental_id}.json`);
    let { data } = await response.json();

    let { id, attributes } = data;
    let type;

    if (COMMUNITY_CATEGORIES.includes(attributes.category)) {
      type = 'Community';
    } else {
      type = 'Standalone';
    }

    return { id, type, ...attributes };
  }*/
  @service store;
  async model(params) {
    return this.store.findRecord('rental', params.rental_id);
  }
}

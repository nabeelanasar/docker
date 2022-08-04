/*
* hooks for services_categories.
*
* @author Viji
* @version 1.0.0
*/

import * as feathersAuthentication from '@feathersjs/authentication';
import populateDetails from '../../hooks/services/populateDetails';
// Don't remove this comment. It's needed to format import lines nicely.


const { authenticate } = feathersAuthentication.hooks;

export default {
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [ populateDetails() ],
    create: [ populateDetails() ],
    update: [ populateDetails() ],
    patch: [ populateDetails() ],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};

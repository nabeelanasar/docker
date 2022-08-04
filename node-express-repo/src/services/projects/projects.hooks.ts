/*
* hooks for projects_name.
*
* @author Anusree
* @version 1.0.0
*/

import * as feathersAuthentication from '@feathersjs/authentication';
import populateData from '../../hooks/projects/populateData';
// Don't remove this comment. It's needed to format import lines nicely.


const { authenticate } = feathersAuthentication.hooks;

export default {
  before: {
    all: [authenticate('jwt')],
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
    get: [ populateData() ],
    create: [ populateData() ],
    update: [ populateData() ],
    patch: [ populateData() ],
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

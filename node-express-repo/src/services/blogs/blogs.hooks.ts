/*
* hooks for blogs_categories.
*
* @author Anisha
* @version 1.0.0
*/

import * as feathersAuthentication from '@feathersjs/authentication';
import populateComments from '../../hooks/blogs/populateComments';
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
    get: [ populateComments() ],
    create: [ populateComments() ],
    update: [ populateComments() ],
    patch: [ populateComments() ],
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

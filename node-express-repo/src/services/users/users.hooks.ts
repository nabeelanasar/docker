/*
* model for users.
*
* @author Anisha
* @version 1.0.0
*/

import * as feathersAuthentication from '@feathersjs/authentication';
import * as local from '@feathersjs/authentication-local';
// Don't remove this comment. It's needed to format import lines nicely.

import storePassword from '../../hooks/users/storePassword';
import createAndAddToken from '../../hooks/users/createAndAddToken';


const { authenticate } = feathersAuthentication.hooks;
const { hashPassword, protect } = local.hooks;

export default {
  before: {
    all: [],
    find: [ authenticate('jwt') ],
    get: [ authenticate('jwt') ],
    create: [ storePassword(), hashPassword('password') ],
    update: [ hashPassword('password'),  authenticate('jwt') ],
    patch: [ hashPassword('password'),  authenticate('jwt') ],
    remove: [ authenticate('jwt') ]
  },

  after: {
    all: [],
    find: [protect('password')],
    get: [protect('password')],
    create: [ createAndAddToken() ],
    update: [protect('password')],
    patch: [protect('password')],
    remove: [protect('password')]
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

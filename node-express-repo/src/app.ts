import path from 'path';
import favicon from 'serve-favicon';
import compress from 'compression';
import helmet from 'helmet';
import cors from 'cors';

import feathers from '@feathersjs/feathers';
import configuration from '@feathersjs/configuration';
import express from '@feathersjs/express';
import socketio from '@feathersjs/socketio';

import { Application } from './declarations';
// import { Application } from './custom.application';
import logger from './logger';
import middleware from './middleware';
import services from './services';
import appHooks from './app.hooks';
import channels from './channels';
import authentication from './authentication';
import sequelize from './sequelize';
var versionate = require('feathers-versionate');
// Don't remove this comment. It's needed to format import lines nicely.

// const app2: any = feathers();
// app2.configure(versionate());
// app2.versionate('v1', '/api/v1/');
// const app: Application = express(app2);

const app: any = express(feathers());

// Add versioning to API's
app.configure(versionate());
app.versionate('v1', '/api/v1/');

// Load app configuration
app.configure(configuration());
// Enable security, CORS, compression, favicon and body parsing
app.use(helmet());
app.use(cors());
app.use(compress());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(favicon(path.join(app.get('public'), 'favicon.ico')));
// Host the public folder
app.use('/', express.static(app.get('public')));

// Set up Plugins and providers
app.configure(express.rest());
app.configure(socketio());

app.configure(sequelize);

// Configure other middleware
app.configure(middleware);
app.configure(authentication);
// Set up our services
app.configure(services);
// Set up event channels
app.configure(channels);

// Configure a middleware for 404s and the error handler
app.use(express.notFound());
app.use(express.errorHandler({ logger } as any));

app.hooks(appHooks);

export default app;

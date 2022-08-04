import dotenv from 'dotenv'
import { Sequelize } from 'sequelize';
import { Application } from './declarations';

// import blogs_categories from './models/blogs/blogs_categories.model';
// import blogs_comments from './models/blogs/blogs_comments.model';
// import covid_countries from './models/covid/covid_countries.model';
// import covid_news from './models/covid/covid_news.model';
// import products_categories from './models/products/products_categories.model';
// import projects_details from './models/projects/projects_list.model';
// import projects_data from './models/projects/projects_data.model';
// import services_categories from './models/services/services_categories.model';
// import services_details from './models/services/services_details.model';



export default function (app: Application) {
  
  // Original: get connectionString from default.json
  // const connectionString = app.get('postgres');

  // New: get connectionString from .env file in dev environment
  // TODO: Set env variables in production environment
  dotenv.config();
  const connectionString: any = process.env.DATABASE_URL;

  const sequelize = new Sequelize(connectionString, {
    dialect: 'postgres',
    logging: false,
    define: {
      freezeTableName: true
    }
  });

  const oldSetup = app.setup;
  app.set('sequelizeClient', sequelize);

  app.setup = function (...args) {

    const result = oldSetup.apply(this, args);

    // const models = sequelize.models;
    let models: any = sequelize.models;

    models = {
      ...models,
      blogs_comments: require('./models/blogs/blogs_comments.model').default(app),
      blogs_categories: require('./models/blogs/blogs_categories.model').default(app),
      covid_countries: require('./models/covid/covid_countries.model').default(app),
      covid_news: require('./models/covid/covid_news.model').default(app),
      products_categories: require('./models/products/products_categories.model').default(app),
      projects_data: require('./models/projects/projects_data.model').default(app),
      services_categories: require('./models/services/services_categories.model').default(app),
      services_details: require('./models/services/services_details.model').default(app)
    }
    // models = {
    //   ...models,
    //   blogs_categories: blogs_categories,
    //   blogs_comments: blogs_comments,
    //   covid_countries: covid_countries,
    //   covid_news: covid_news,
    //   products_categories: products_categories,
    //   projects_details: projects_details,
    //   projects_data: projects_data,
    //   services_categories: services_categories,
    //   services_details: services_details
    // }
    


    Object.keys(models).forEach(name => {
      if ('associate' in models[name]) {
        (models[name] as any).associate(models);
      }
    });

    // Sync to the database
    app.set('sequelizeSync', sequelize.sync({ alter: true }));

    return result;
  };
}

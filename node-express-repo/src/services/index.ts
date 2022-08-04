import { Application } from '../declarations';

import users from './users/users.service';
import projects from './projects/projects.service';
import blogs from './blogs/blogs.service';
import covid from './covid/covid.service';
import services from './services/services.service';
import products from './products/products.service';
// Don't remove this comment. It's needed to format import lines nicely.


export default function (app: Application) {
  
  app.configure( users );
  app.configure( projects );
  app.configure( blogs );
  app.configure( covid );
  app.configure( services );
  app.configure( products );
}

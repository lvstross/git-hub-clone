import { makeRootDirectory } from '../modules/Executables';

const routes = (app) => {
  app.route('/root-path')
    .get(async (req, res) => {
      await makeRootDirectory(res);
    });
}

export default routes;

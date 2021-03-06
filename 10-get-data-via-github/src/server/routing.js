import { tutorialsPage } from 'server/controller';
import { HOME_PAGE_ROUTE, firstEndpointRoute, tutorialsRoute } from 'shared/routes';
import githubRepoProxy from 'server/middlewares/github';

import renderApp from 'server/render-app';

export default (app) => {
  app.get(HOME_PAGE_ROUTE, (req, res) => {
    res.send(renderApp(req.url));
  });

  app.get(tutorialsRoute(), (req, res) => {
    res.send(renderApp(req.url, tutorialsPage()));
  });

  app.get(firstEndpointRoute(), (req, res) => {
    res.json({
      serverMessage: `Hello from the server! (received ${req.params.num})`,
    });
  });

  app.use('/repo', githubRepoProxy);

  app.get('/500', () => {
    throw Error('Fake Internal Server Error');
  });

  app.get('*', (req, res) => {
    res.status(404).send(renderApp(req.url));
  });

  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    // eslint-disable-next-line no-console
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  });
};

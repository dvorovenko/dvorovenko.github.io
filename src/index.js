import { listen } from './app';
import { reportError } from './errorHandler';

listen(err => {
  if (err) reportError(err);
  process.exit(err ? -1 : 0);
});

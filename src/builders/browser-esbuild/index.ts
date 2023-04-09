import { createBuilder } from '@angular-devkit/architect';

export default createBuilder(() => {
  throw new Error(
    'angular-cli-hooks cannot wrap browser-esbuild, since there is no API for it.'
  );
});

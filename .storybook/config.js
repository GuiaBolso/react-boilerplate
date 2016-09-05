import { configure } from '@kadira/storybook';

function loadStories() {
    const req = require.context('../app/components', true, /.+\.story\.jsx?$/);
    req.keys().forEach(f => require(`../app/components/${f.slice(2)}`));
}

configure(loadStories, module);
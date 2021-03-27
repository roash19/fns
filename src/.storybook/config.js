import { configure } from '@storybook/react';

function loadStories() {
  require('../src/**/*.stories.@(js|tsx|mdx)\'');
}

configure(loadStories, module);
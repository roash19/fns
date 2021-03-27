import React from 'react';
import { storiesOf } from '@storybook/react';
import { BarChart } from './BarChart';
import '../../stylesheet/index.scss';

storiesOf('BarChart', module).add('default', () => (
  <BarChart points={[10, 20, 30]}>Button</BarChart>
));

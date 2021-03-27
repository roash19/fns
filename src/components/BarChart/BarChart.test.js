import React from 'react';
import renderer from 'react-test-renderer';
import { BarChart } from './BarChart';

it('renders correctly', () => {
  const tree = renderer
    .create(<BarChart points={[10, 20, 30]}>Facebook</BarChart>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
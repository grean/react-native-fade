import React from 'react';
import renderer from 'react-test-renderer';
import Fade from '../Fade';

test('renders correctly', () => {
  const tree = renderer.create(<Fade />).toJSON();
  expect(tree).toMatchSnapshot();
});
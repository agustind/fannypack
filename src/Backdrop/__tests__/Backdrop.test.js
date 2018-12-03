import React from 'react';
import render from '../../_utils/tests/render';
import Backdrop from '../Backdrop';
it('renders correctly for a basic backdrop', () => {
  const { container } = render(<Backdrop visible>test</Backdrop>);
  expect(container.firstChild).toMatchSnapshot();
});

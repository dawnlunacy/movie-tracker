import React from 'react';
import { shallow } from 'enzyme';
import MoviesContainer from './MoviesContainer';

describe('MoviesContainer', () => {

  it('should match snapshot', () => {
    const wrapper = shallow(<MoviesContainer />)

    expect(wrapper).toMatchSnapshot();
  })

})

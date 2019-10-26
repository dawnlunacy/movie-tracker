import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { App, mapStateToProps, mapDispatchToProps } from './App';

describe('App', () => {
  it('should match snapshot', () => {
    const wrapper = shallow (<App />)

    expect(wrapper).toMatchSnapshot()
  });

}); 


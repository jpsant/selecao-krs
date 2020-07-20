import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Dashboard from './index';
import Header from '../../ui/organisms/Header';
import CardsContainer from '../../ui/organisms/CardsContainer';

configure({adapter: new Adapter()});

describe("<Dashboard /> unit tests", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Dashboard />)
  });

  it("Should render one instance of the <Header />", () => {
    expect(wrapper.find(Header)).toHaveLength(1)
  });

  it("Should render one instance of the <CardsContainer />", () => {
    expect(wrapper.find(CardsContainer)).toHaveLength(1)
  });
})
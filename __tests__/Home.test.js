import React from 'react'
import ReactDOM from 'react-dom'
import "../src/setupTests"
import { shallow, mount, render } from 'enzyme'

import Home from '../src/components/Home'

describe("Home", () => {
  it("should render About title",() => {
    const wrapper = mount(<Home />)

    expect(wrapper.contains(<h4 className="center">Recent Posts</h4>)).toEqual(true)
  });

});

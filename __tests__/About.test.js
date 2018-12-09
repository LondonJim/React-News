import React from 'react'
import ReactDOM from 'react-dom'
import "../src/setupTests"
import { shallow, mount, render } from 'enzyme'

import About from '../src/components/About'

describe("About", () => {
  it("should render About title",() => {
    const wrapper = mount(<About />)

    expect(wrapper.contains(<h4 className="center">About</h4>)).toEqual(true)
  });

});

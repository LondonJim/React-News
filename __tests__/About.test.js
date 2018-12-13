import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import "../src/setupTests"
import { shallow, mount, render } from 'enzyme'

import About from '../src/components/About'

describe("About", () => {
  it("should render About title",() => {
    const wrapper = mount(<Router><About /></Router>)

    expect(wrapper.contains(<h4 className="center black-text">About</h4>)).toEqual(true)
  });

});

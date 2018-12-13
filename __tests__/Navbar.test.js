import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import "../src/setupTests"
import { shallow, mount, render } from 'enzyme'

import Navbar from '../src/components/Navbar'

describe("Navbar", () => {
  it("should render About title",() => {
    const wrapper = mount(<Router><Navbar /></Router>)

    expect(wrapper.contains("React News")).toEqual(true)
    expect(wrapper.contains("Home")).toEqual(true)
    expect(wrapper.contains("About")).toEqual(true)
    expect(wrapper.contains("Create")).toEqual(true)
    expect(wrapper.contains("Contact")).toEqual(true)
  });

});

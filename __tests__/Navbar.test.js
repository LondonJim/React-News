import React from 'react'
import ReactDOM from 'react-dom'
import "../src/setupTests"
import { shallow, mount, render } from 'enzyme'

import Navbar from '../src/components/Navbar'

describe("Navbar", () => {
  it("should render About title",() => {
    const wrapper = mount(<Navbar />)

    expect(wrapper.contains("React News")).toEqual(true)
    expect(wrapper.contains("Home")).toEqual(true)
    expect(wrapper.contains("About")).toEqual(true)
    expect(wrapper.contains("Contact")).toEqual(true)
  });

});

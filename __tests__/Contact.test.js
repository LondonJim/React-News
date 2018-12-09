import React from 'react'
import ReactDOM from 'react-dom'
import "../src/setupTests"
import { shallow, mount, render } from 'enzyme'

import Contact from '../src/components/Contact'

describe("Contact", () => {
  it("should render About title",() => {
    const wrapper = mount(<Contact />)

    expect(wrapper.contains(<h4 className="center">Contact</h4>)).toEqual(true)
  });

});

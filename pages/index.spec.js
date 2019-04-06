import React from "react";
import {shallow} from "enzyme";
import Home from "./index";

describe("Home", () => {
  test("h1タグが描画されること", () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find("h1").text()).toEqual("Welcome to Next!");
  });
});

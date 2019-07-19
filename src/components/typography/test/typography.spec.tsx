import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import faker from "faker";
import React from "react";
import sinon from "sinon";
import Typography from "../index";

Enzyme.configure({ adapter: new Adapter() });

describe("typography specs", () => {

  const sandbox = sinon.createSandbox();

  afterEach(() => {
    sandbox.verifyAndRestore();
  });

  it("should render product slider correctly", () => {
    const wrapper = shallow(<Typography variant={"h1"}/>);

    expect(wrapper.find(".q-typography")).toHaveLength(1);
  });

  it("should be of type h1 if given h1 variant", () => {
    const wrapper = shallow(<Typography variant={"h1"}/>);
    expect(wrapper.type()).toBe("h1");
  });

  it("should be of type h2 if given h2 variant", () => {
    const wrapper = shallow(<Typography variant={"h2"}/>);
    expect(wrapper.type()).toBe("h2");
  });

  it("should be of type h3 if given h3 variant", () => {
    const wrapper = shallow(<Typography variant={"h3"}/>);
    expect(wrapper.type()).toBe("h3");
  });

  it("should be of type h4 if given h4 variant", () => {
    const wrapper = shallow(<Typography variant={"h4"}/>);
    expect(wrapper.type()).toBe("h4");
  });

  it("should be of type h5 if given h5 variant", () => {
    const wrapper = shallow(<Typography variant={"h5"}/>);
    expect(wrapper.type()).toBe("h5");
  });

  it("should be of type h6 if given h6 variant", () => {
    const wrapper = shallow(<Typography variant={"h6"}/>);
    expect(wrapper.type()).toBe("h6");
  });

  it("should be of type p if given body1 variant", () => {
    const wrapper = shallow(<Typography variant={"body1"}/>);
    expect(wrapper.type()).toBe("p");
  });

  it("should be of type p if given body2 variant", () => {
    const wrapper = shallow(<Typography variant={"body2"}/>);
    expect(wrapper.type()).toBe("p");
  });

  it("should be of type h6 if given subtitle1 variant", () => {
    const wrapper = shallow(<Typography variant={"subtitle1"}/>);
    expect(wrapper.type()).toBe("h6");
  });

  it("should be of type h6 if given subtitle2 variant", () => {
    const wrapper = shallow(<Typography variant={"subtitle2"}/>);
    expect(wrapper.type()).toBe("h6");
  });

  it("should have className underline when given underline prop", () => {
    const wrapper = shallow(<Typography variant={"h1"} underline />);

    expect(wrapper.exists(".q-underline")).toEqual(true);
  });

  it("should accept additional classNames", () => {
    const fakeClass = faker.lorem.word();
    const wrapper = shallow(<Typography variant={"h1"} className={fakeClass}/>);

    expect(wrapper.hasClass(fakeClass)).toBe(true);
  });

});
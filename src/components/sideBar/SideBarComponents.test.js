// Renders a div with class 'side-main'
it("should render a div with class 'side-main' when SidebarComponent is rendered", () => {
  const wrapper = shallow(<SidebarComponent />);
  expect(wrapper.find(".side-main")).toHaveLength(1);
});

// Renders an OrderedList component
it("should render an OrderedList component when SidebarComponent is rendered", () => {
  const wrapper = shallow(<SidebarComponent />);
  expect(wrapper.find(OrderedList)).toHaveLength(1);
});

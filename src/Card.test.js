import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";

it("it should render", function(){
  render(<Card/>)
})

it('should match snapshot', function () {
    const {asFragment} = render (<Card/>)
    expect(asFragment()).toMatchSnapshot();
})
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";

it("should render", function (){
 render(<Carousel
 photos={TEST_IMAGES}
 title="images for testing"/>)
})

it ("it should match Snapshot", function(){
  const {asFragment} = render(<Carousel 
    photos={TEST_IMAGES}
    title="images for testing"
    />)
    expect(asFragment()).toMatchSnapshot()
})

it("works when you click on the right arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);
  

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();

  //expect left arrow to show first image

  const leftArrow = container.querySelector(".bi-arrow-left-circle");
  fireEvent.click(leftArrow)

  expect( container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();


});

it("should hide left arrow key on first image", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
 //expect left arrow key to be missing

 const leftArrow = container.querySelector(".bi-arrow-left-circle");

 expect(
  leftArrow).not.toBeInTheDocument();
 
})

it("should hide right arrow key on last image", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
 //expect left arrow key to be missing

 const rightArrow = container.querySelector(".bi-arrow-right-circle");

 fireEvent.click(rightArrow);
 fireEvent.click(rightArrow);

 expect(
  rightArrow).not.toBeInTheDocument();
 
})




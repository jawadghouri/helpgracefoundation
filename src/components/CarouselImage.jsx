/* eslint-disable react/prop-types */
// import Image1 from "./../assets/AboutBanner.jpg";
// import Image2 from "./../assets/C2.jpg";
// import Image3 from "./../assets/C3.jpg";
import Image1 from "./../assets/1-A.jpg";
import Image2 from "./../assets/C2.jpg";
import Image3 from "./../assets/C3.jpg";

const images = {
  "First slide": Image1,
  "Second slide": Image2,
  "Third slide": Image3,
};

function CarouselImage(props) {
  return (
    <div
      style={{
        width: "100%",
        height: "550px",
        backgroundImage: `url(${images[props.text] || Image1})`, // Default to Image1
        backgroundSize: "contain", // or 'cover' if you want cropping
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      aria-label={props.text} // Use aria-label for accessibility
    />
  );
}

export default CarouselImage;

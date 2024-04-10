import { imagesBackgrounds } from "../Global/images";

const image = imagesBackgrounds[parseInt(Math.random() * imagesBackgrounds.length)];

const Layout = ({ opacity }) => {
  return (
    <div className="Layout_Image" style={{ backgroundImage: `url(${image})`, opacity: opacity }}></div>
  );
}

export { Layout };

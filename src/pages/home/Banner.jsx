import imageBanner from "../../assets/images/banner.jpg";

const Banner = () => {
  return (
    <img
      src={imageBanner}
      alt="banner"
      className="w-full mb-6 mt-[-80px] object-cover"
    />
  );
};

export default Banner;

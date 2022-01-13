import { Swiper } from "@tarojs/components";

function Page(props) {
  const { children } = props;

  return (
    <>
      <Swiper
        className="swiper"
        indicatorColor="#fff"
        indicatorActiveColor="#eee"
        indicatorDots
        autoplay
      >
        {children}
      </Swiper>
    </>
  );
}

export default Page;

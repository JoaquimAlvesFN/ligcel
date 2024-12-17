import Logo from "@/assets/banner_teste.jpg";
import BannerStyle from "./style-banner";

export default function Banner() {
  return (
    <BannerStyle.Container>
      <BannerStyle.Logo src={Logo} alt="Ligcel | Sky" />
    </BannerStyle.Container>
  );
}

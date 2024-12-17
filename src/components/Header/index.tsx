import Logo from "@/assets/logo_1x.png";
import HeaderStyle from "./style-header";

export default function Header() {
  return (
    <HeaderStyle.Container>
      <HeaderStyle.Logo src={Logo} alt="Ligcel | Sky" width={100} />
      <div />
      {/* <span>Fortaleza, CE</span> */}
    </HeaderStyle.Container>
  );
}

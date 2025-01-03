import Logo from "@/assets/logo_1x.png";
import HeaderStyle from "./style-header";
import Link from "next/link";

export default function Header() {
  return (
    <HeaderStyle.Container>
      <Link href="/">
        <HeaderStyle.Logo src={Logo} alt="Ligcel | Sky" width={100} />
      </Link>
      <div />
      <Link href="/quemsomos">
        <strong>Sobre a Ligcel</strong>
      </Link>
    </HeaderStyle.Container>
  );
}

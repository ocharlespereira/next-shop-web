import { HomeContainer, Product } from "@/styles/pages/home";
import Image from "next/image";

import tshirt1 from "@/assets/tshirt/1.png";
import tshirt2 from "@/assets/tshirt/2.png";
import tshirt3 from "@/assets/tshirt/3.png";

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={tshirt1} width={520} height={480} alt="" />
        <Image src={tshirt2} width={520} height={480} alt="" />
        <Image src={tshirt3} width={520} height={480} alt="" />

        <footer>
          <strong>Camisa X</strong>
          <span>R$ 100,00</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}

import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '@/styles/pages/product';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Product() {
  const { query } = useRouter();

  return (
    <ProductContainer>
      <ImageContainer>{/* <Image /> */}</ImageContainer>

      <ProductDetails>
        <h1>T-shirt</h1>
        <span>R$ 178,90</span>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          rem eos pariatur molestiae, facere sint reiciendis odio illo libero
          tenetur doloremque neque beatae iure quisquam nihil alias, laborum
          harum dolore!
        </p>

        <button>Comprar Agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}

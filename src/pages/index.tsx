import { HomeContainer, Product } from '@/styles/pages/home';
import Head from 'next/head';
import Image from 'next/image';
import { stripe } from '@/lib/stripe';
import { GetServerSideProps, GetStaticProps } from 'next';
import Link from 'next/link';

import { useKeenSlider } from 'keen-slider/react';

import tshirt1 from '@/assets/tshirt/1.png';
import tshirt2 from '@/assets/tshirt/2.png';
import tshirt3 from '@/assets/tshirt/3.png';

import 'keen-slider/keen-slider.min.css';
import Stripe from 'stripe';

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
  }[];
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  return (
    <>
      <Head>
        <title>Home | E-commerce</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          return (
            <Link
              href={`/product/${product.id}`}
              key={product.id}
              prefetch={false}
            >
              <Product key={product.id} className="keen-slider__slide">
                <Image src={product.imageUrl} width={520} height={480} alt="" />

                <footer>
                  <strong>{product.name}</strong>
                  <span>R$ {product.price.toFixed(2)}</span>
                </footer>
              </Product>
            </Link>
          );
        })}
      </HomeContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      nme: product.name,
      imageUrl: product.images[0],
      price: new intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount / 100),
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  };
};

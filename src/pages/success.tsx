import { SuccessContainer, ImageContainer } from '@/styles/pages/success';
import Link from 'next/link';

export default function Success() {
  return (
    <SuccessContainer>
      <h1>Compra efetuada!</h1>

      <ImageContainer></ImageContainer>

      <p>
        Uhuul <strong>Charles</strong>, sua <strong>Camisa</strong> já está a
        caminho da sua casa.
      </p>

      <Link>
        <a href="/">Voltar ao catálogo</a>
      </Link>
    </SuccessContainer>
  );
}

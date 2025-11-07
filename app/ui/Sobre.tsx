import { ReactNode } from 'react';

export function Resumo() {
  return (
    <>
      <GuestLine>cat Resumo.txt</GuestLine>
      <br />
      <p>
        Formado em Ciência da Computação pela{' '}
        <span className="text-fuchsia-500">UDESC</span>, estou em transição para
        me consolidar como desenvolvedor web full stack. Com experiência em
        projetos que envolvem Vue.js, Node.js, bancos de dados e integrações com
        APIs, busco criar soluções eficientes e centradas no usuário.
      </p>
      <br />
      <GuestLine>
        <BlinkButton />
      </GuestLine>
    </>
  );
}

export function Dados() {
  return (
    <>
      <GuestLine>
        echo <span className="text-fuchsia-500">$NOME</span>
      </GuestLine>

      <p>Andrei Antonio Villa</p>

      <GuestLine>
        echo <span className="text-fuchsia-500">$IDADE</span>
      </GuestLine>

      <p>24</p>

      <GuestLine>
        echo <span className="text-fuchsia-500">$LOCALIDADE</span>
      </GuestLine>

      <p>Florianópolis SC</p>
      <GuestLine>
        <BlinkButton />
      </GuestLine>
    </>
  );
}

export function GuestLine({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-row gap-x-2">
      <p className="text-green-600">guest</p>
      <p className="text-blue-500">~ resumo</p>
      {children}
    </div>
  );
}
function BlinkButton() {
  return <span className="text-brand-white-200 animate-blink">█</span>;
}

import './App.css';

function App() {
  return (
    <div>

      <img className="image" src="https://img2.gratispng.com/20181125/jyh/kisspng-logo-house-clothing-shop-brand-alternate-mode-instrument-upgrades-and-repairs-5bfb58f3d19729.9484723415431989638585.jpg" alt="imagem"/>
      <div/>

      <div/>
      <h1 className="title">ADS Store</h1>
      <h2 className="description">A MELHOR LOJA DE ELETRÔNICOS</h2>
      <div className="cabeçalho">
      <h3 className="menu">Menu</h3>
      <h3 className="contato">Contato</h3>
      <h3 className="sobre">Sobre</h3>
      </div>

      <div className="Imput">
        <input type="text" placeholder="Buscar na loja"/>
        <button type="submit">Buscar</button>
        </div>

        <column className="column1"/>
        
        <div className="Imagem1">
          <h3 className="description4">Promoção</h3>
          <img src="https://s2.glbimg.com/s30-WCB6zt9UK5TULQtXAG5gxCE=/0x0:695x695/600x0/smart/filters:gifv():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2019/3/P/Q0auZnREmBsnkJ8KagcQ/placa-de-video-asus-radeon-rx570-rog-strix-oc-edition-4gb-rog-strix-rx570-o4g-gaming-gddr5-64851.jpg" alt="imagem"/> 
          <h3 className="title2">Placa de vídeo RX 570 4GB</h3>
          <h3 className="description2">R$ 999,90 PIX OU BOLETO</h3>
          <h3 className="description3">OU 12x de 129,90</h3>
          <button className='Button' type="submit">Comprar</button>
        </div>

        <div className="Imagem2">
          <h3 className="description4">Promoção</h3>
          <img src="https://s2.glbimg.com/rGkGBwqGq00vmO9O34ohFHniejA=/0x0:1000x1000/600x0/smart/filters:gifv():strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2021/0/6/wB63I9QmKz1VpW9rLxLw/placa-de-video-msi-nvidia-geforce-rtx-3090-ventus-3x-24g-oc-gddr6x.jpg" alt="imagem"/> 
          <h3 className="title2">Placa de vídeo RTX 3090 24GB</h3>
          <h3 className="description2">R$ 8.999,90 PIX OU BOLETO</h3>
          <h3 className="description3">OU 12x de 833,32</h3>
          <button className='Button' type="submit">Comprar</button>
        </div>

        <div className="Imagem3">
          <h3 className="description4">Promoção</h3>
          <img src="https://www.master10.net/img/produtos/REF373498-11.jpg" alt="imagem"/>
          <h3 className="title2">Placa de vídeo RTX 2060 6GB</h3>
          <h3 className="description2">R$ 1.499,90 PIX OU BOLETO</h3>
          <h3 className="description3">OU 12x de 133,32</h3>
          <button className='Button' type="submit">Comprar</button>
        </div>

        </div>
  );
}

export default App;
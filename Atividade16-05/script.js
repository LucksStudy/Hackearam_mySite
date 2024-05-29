const texto = document.querySelector("#texto");
texto.insertAdjacentHTML("afterbegin", '<p>São Petersburgo é uma cidade portuária russa situada às margens do Mar Báltico. Ela foi capital imperial por 2 séculos, tendo sido fundada em 1703 por Pedro, o Grande, objeto da emblemática estátua do "Cavaleiro de Bronze" da cidade. São Petersburgo continua sendo o centro cultural da Rússia, com locais como o ultramoderno Teatro Mariinski, com ópera e balé, e o Museu Russo, que expõe a arte russa, desde pinturas de ícones ortodoxos até obras de Kandinsky.</p>');

const imagens = document.querySelectorAll('img');
imagens.forEach(imagem => {
    console.log(imagem);
  });
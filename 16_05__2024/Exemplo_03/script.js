const texto = document.querySelector("#texto");
texto.insertAdjacentHTML("beforebegin", "<p> Teste antes</p>");
texto.insertAdjacentHTML("afterbegin", '<p>Teste depois</p>');
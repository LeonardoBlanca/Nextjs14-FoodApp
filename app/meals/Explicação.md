## Arquivo Loading
A página Loading será aplicada a esta página e todas as páginas abaixo delas.<br>
Ela é um fallback até a página acabar de carregar o conteúdo.<br>
<br><br>
## Buscando dados no BD
Já que é uma aplicação backend, não precisamos usar o fetch para buscar no backend.<br>
Estamos apenas criando as tabelas com o conteúdo do meals.db.<br>
Definimos um tempo dentro da lib/meals.js para 5 segundos (originalmente 2) para mostrar o loading.js desta página.<br>
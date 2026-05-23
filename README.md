# Exercício AJAX — Perfil do GitHub

Projeto desenvolvido como exercício prático de **AJAX** com JavaScript. A página exibe o perfil público de um usuário do GitHub, carregando os dados dinamicamente via API, em vez de valores fixos no HTML.

## O que foi feito

Inicialmente, a página continha informações **hardcoded** (nome, username, avatar, contadores e link do perfil). A refatoração substituiu esses dados estáticos por uma requisição assíncrona usando a API REST do GitHub.

O usuário consultado é **[SrDev-Henrique](https://github.com/SrDev-Henrique)**.

### Dados exibidos

| Campo na página | Propriedade da API |
|-----------------|-------------------|
| Avatar          | `avatar_url`      |
| Nome            | `name`            |
| Username        | `login`           |
| Repositórios    | `public_repos`    |
| Seguidores      | `followers`       |
| Seguindo        | `following`       |
| Link "Ver no Github" | `html_url`   |

## Como funciona

1. Ao carregar a página, o arquivo `main.js` executa um `fetch` para:

   ```
   https://api.github.com/users/SrDev-Henrique
   ```

2. A resposta é convertida em JSON com `.json()`.

3. Os elementos do DOM são atualizados com os dados retornados.

4. Enquanto a requisição está em andamento, a página exibe placeholders (`Carregando...` e `-`).

5. Se a requisição falhar, uma mensagem de erro é exibida no lugar do nome do perfil.

## Estrutura do projeto

```
exercicio_ajax/
├── index.html   # Estrutura da página e placeholders
├── main.css     # Estilos do perfil
├── main.js      # Requisição fetch e renderização dos dados
└── README.md
```

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (Fetch API)
- [GitHub REST API](https://docs.github.com/en/rest/users/users)

## Como executar

1. Clone ou baixe este repositório.
2. Abra o arquivo `index.html` no navegador.

Também é possível usar uma extensão como **Live Server** (VS Code) para servir a página localmente.

> A API pública do GitHub não exige autenticação para consultar dados básicos de um usuário.

## Conceitos praticados

- Requisições assíncronas com `fetch`
- Manipulação do DOM com `querySelector` e `textContent`
- Tratamento de resposta com Promises (`.then` / `.catch`)
- Consumo de API REST externa

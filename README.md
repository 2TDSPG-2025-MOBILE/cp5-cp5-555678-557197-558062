# React Native Calculator

## Descrição

Calculadora científica construída em **React Native** com suporte a operações básicas (`+`, `-`, `×`, `÷`) e funções científicas (`sin`, `cos`, `tan`, `√`, `x²`, `%`, `π`, `±`).
Possui histórico das últimas 5 operações, alternância entre tema claro e escuro, layout responsivo e ajuste automático do tamanho da fonte para evitar quebra do display.

O projeto é modularizado, com componentes `Display`, `Button`, `ButtonGrid` e `HistoryModal` para facilitar manutenção e expansão.

## Funcionalidades

* Alternância de tema claro e escuro com o botão `THEME`.
* Histórico de operações com o botão `HISTORY`.
* Operações básicas: soma, subtração, multiplicação e divisão.
* Funções científicas: seno, cosseno, tangente, raiz quadrada, potência ao quadrado, porcentagem, π e troca de sinal.
* Layout responsivo: display não quebra mesmo com números grandes.
* Botões dinâmicos: cores mudam conforme tipo (especial, operação ou científica).

## Estrutura de pastas

```
src/
├─ components/
│  ├─ Button.js
│  ├─ ButtonGrid.js
│  ├─ Display.js
│  └─ HistoryModal.js
├─ screens/
│  └─ CalculatorScreen.js
├─ utils/
│  └─ calculations.js
├─ App.js
├─ package.json
└─ README.md
```

## Pré-requisitos

Antes de rodar o projeto, é necessário ter:

* [Node.js](https://nodejs.org/) (>=16)
* [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
* [React Native CLI](https://reactnative.dev/docs/environment-setup)
* Android Studio ou Xcode para emuladores ou dispositivos reais

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/2TDSPG-2025-MOBILE/cp5-cp5-555678-557197-558062.git
cd calculadora
```

2. Instale as dependências:

```bash
npm install
# ou
yarn install
```

## Execução

```bash
npx expo start
```

## Tema

* Claro: background branco, botões cinza, azul (operações), verde (científicos), laranja (especiais), texto preto ou branco nos botões destacados.
* Escuro: background cinza escuro, botões cinza escuro, azul escuro, verde escuro, laranja escuro, texto branco ou branco nos botões destacados.
* Alternância com o botão `THEME`.

## Componentes

* **Button.js**: botão individual com cores dinâmicas conforme tipo, com ajuste de opacidade ao clicar.
* **ButtonGrid.js**: organiza os botões em linhas e recebe a função `onButtonPress`.
* **Display.js**: mostra número atual, operação anterior e resultado. Ajusta automaticamente o tamanho da fonte.
* **HistoryModal.js**: modal que exibe as últimas 5 operações e permite limpar histórico.
* **CalculatorScreen.js**: tela principal, controla estados da calculadora, operações, histórico e tema.

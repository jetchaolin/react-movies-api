# React Movies API

Curso Mais Prati - Exercício 5 - Consumo de API com React

## **Pré-requisitos**

- [`Node.js`](#baixe-e-instale-o-nvm)
- [`React`](#instale-os-pacotes)

## **MODO DE INSTALAÇÃO**

### Instale o `Node.js` na sua máquina

#### 1. Você pode baixar o `Node.js` no [site-do-nodejs](https://nodejs.org/en/download/) e instalar na sua máquina

#### 2. Ou você pode utilizar o gerenciador de pacotes `nvm` para isso

**Baixe e instale o `nvm`**

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
```

**Reinicie o `shell`**

```sh
\. "$HOME/.nvm/nvm.sh"
```

**Baixe e instale `Node.js`**

```sh
nvm install 22
```

**Verifique a versão do `Node.js`**

```sh
node -v # "v22.15.0".
nvm current # "v22.15.0".
```

**Verifique a versão do `npm`**

```sh
npm -v
```

### Baixe o repositório com o APP

```bash
# Clona o repositório para sua máquina

git clone https://github.com/jetchaolin/react-movies-api.git # Https

git clone git@github.com:jetchaolin/react-movies-api.git # Ssh
```

## **Instale os pacotes**

```sh
# Navegue até a pasta do APP no seu terminal
cd <react-movies-api>
# Instale as dependências
npm install
```

## **Rode o APP**

```sh
npm run dev
```

Acesse o APP na url `http://localhost:5173/`
